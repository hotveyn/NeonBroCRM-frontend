<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TableOrdersStopped from 'components/tables/orders/stoped/TableOrdersStopped.vue';
import { useOrdersStoppedStore } from '@/store/orders/orders-stopped.store.ts';
import { NSkeleton } from 'naive-ui';
import { NDivider } from 'naive-ui';

const ordersStoppedStore = useOrdersStoppedStore();

const isLoading = ref<boolean>(true);

onMounted(async () => {
  await ordersStoppedStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="manager-orders-stopped">
    <NDivider title-placement="left">Заказы снятые с производства</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersStopped v-else :table-data="ordersStoppedStore.orders" />
  </div>
</template>

<style scoped lang="scss"></style>
