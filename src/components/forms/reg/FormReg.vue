<script setup lang="ts">
import { ref } from 'vue';
import { NSelect, NButton, NForm, NFormItem, NInput, NDatePicker, FormInst } from 'naive-ui';
import { useRegFormConf } from 'components/forms/reg/FormReg.formconf.ts';
import { useUsersStore } from '@/store/users.store.ts';

const regFormRef = ref<FormInst | null>();

const usersStore = useUsersStore();
const { rules, formValues, options, optionsRoles } = useRegFormConf();

function goReg() {
  regFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }
    await usersStore.employeeReg(formValues);
  });
}
</script>

<template>
  <NForm ref="regFormRef" :model="formValues" :rules="rules" class="reg-form">
    <NFormItem label="Номер сотрудника" path="code">
      <NInput v-model:value="formValues.code" placeholder="Сгенерируется сам, если оставите незаполненным" />
    </NFormItem>
    <NFormItem label="Фамилия" path="lastName">
      <NInput v-model:value="formValues.lastName" placeholder="Иванов" />
    </NFormItem>
    <NFormItem label="Имя" path="firstName">
      <NInput v-model:value="formValues.firstName" placeholder="Иван" />
    </NFormItem>
    <NFormItem label="Отчество" path="patronymicName">
      <NInput v-model:value="formValues.patronymicName" placeholder="Иванович" />
    </NFormItem>
    <NFormItem label="Дата устройства на работу" path="startWorkDate">
      <NDatePicker style="width: 100%" value-format="yyyy-MM-dd" v-model:formatted-value="formValues.startWorkDate" placeholder="" type="date" />
    </NFormItem>
    <NFormItem label="Отделы" path="departments">
      <NSelect v-model:value="formValues.departments" placeholder="Выберите какие-нибудь" multiple remote :options="options" />
    </NFormItem>
    <NFormItem label="Роль сотрудника" path="role">
      <NSelect v-model:value="formValues.role" placeholder="" :options="optionsRoles" />
    </NFormItem>
    <NFormItem label="Логин" path="login">
      <NInput v-model:value="formValues.login" placeholder="" />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput v-model:value="formValues.password" type="password" placeholder="" show-password-on="click" />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goReg()"> Создать </NButton>
  </NForm>
</template>

<style scoped></style>
