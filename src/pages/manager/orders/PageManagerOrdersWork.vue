<script setup lang="ts">
import TableOrdersWork from 'components/tables/orders/work/TableOrdersWork.vue';
import { onMounted, reactive, ref } from 'vue';
import { useOrdersWorkStore } from '@/store/orders/orders-work.store.ts';
import { NCard, NModal, NSkeleton, NDivider } from 'naive-ui';
import FormOrderWorkUpdate from 'components/forms/order/work-update/FormOrderWorkUpdate.vue';
import { useDialogService } from '@/services/dialog.service';

const ordersWorkStore = useOrdersWorkStore();
const dialogService = useDialogService();

const isLoading = ref<boolean>(true);

const orderChangeModal = reactive({
  isShow: false,
  id: NaN,
});

function change(id: number) {
  orderChangeModal.id = id;
  orderChangeModal.isShow = true;
}

async function deleteOne(id: number) {
  dialogService.confirm(async ()=>{
    await ordersWorkStore.deleteOne(id)
  })
}

function updateDone() {
  orderChangeModal.isShow = false;
}

onMounted(async () => {
  await ordersWorkStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="manager-orders-work">
    <NDivider title-placement="left">Заказы в производстве</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersWork v-else @change="change" @deleteOne="deleteOne" :table-data="ordersWorkStore.orders" />
    <NModal v-model:show="orderChangeModal.isShow">
      <NCard style="width: 600px">
        <FormOrderWorkUpdate :id="orderChangeModal.id" @done="updateDone" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
