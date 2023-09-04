<script setup lang="ts">
import { ref } from 'vue';
import { FormInst, NForm, NInput, NFormItem, NInputNumber, NButton, NSwitch, NSelect } from 'naive-ui';
import { useOrdersWorkStore } from '@/store/orders/ordersWork.store.ts';
import { useOrderWorkUpdateFormConf } from 'components/forms/order/work-update/orderWorkUpdate.formconf.ts';

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const orderWorkStore = useOrdersWorkStore();

const orderUpdateFormRef = ref<FormInst | null>();

const { options, rules, isDepartmentsChange, formValues } = useOrderWorkUpdateFormConf(props.id);

function goUpdate() {
  orderUpdateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    if (!isDepartmentsChange) delete formValues.departments;

    await orderWorkStore.update(props.id, formValues);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderUpdateFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Название заказа" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Длина неона" path="neon_length">
      <NInputNumber v-model:value="formValues.neon_length" placeholder="" />
    </NFormItem>
    <NFormItem label="Тип вывески" path="type">
      <NSelect v-model:value="formValues.type" remote :options="options" />
    </NFormItem>
    <NFormItem label="Ваш комментарий к заказу">
      <NInput v-model:value="formValues.comment" type="textarea" placeholder="" />
    </NFormItem>
    <NFormItem label="Поменять ли этапы работы? Если вы их поменяете процесс работы начнётся занова с первого этапа!">
      <NSwitch v-model:value="isDepartmentsChange" />
    </NFormItem>
    <NFormItem v-show="isDepartmentsChange" label="Отделы в порядке их работы" path="departments">
      <NSelect v-model:value="formValues.departments" placeholder="Порядок важен!" multiple remote :options="options" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goUpdate()"> Изменить </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>