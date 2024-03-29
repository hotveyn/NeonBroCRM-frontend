<script setup lang="ts">
import { h } from 'vue';
import { NDataTable, DataTableColumns, NButton } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';

defineProps<{
  tableData: IOrder[];
}>();

const emit = defineEmits<{
  detail: [id: number];
  rate: [id: number];
}>();

const columns = createColumns({
  detail: (id: number) => emit('detail', id),
  rate: (id: number) => emit('rate', id),
});

function createColumns(actions: { detail: (id: number) => void; rate: (id: number) => void }): DataTableColumns<IOrder> {
  return [
    {
      title: 'Код',
      key: 'code',
      sorter: 'default' as const,
    },
    {
      title: 'Название',
      key: 'name',
      sorter: 'default' as const,
    },
    {
      title: 'Дата начала',
      key: 'date_start',
      sorter: 'default' as const,
    },
    {
      title: 'Дата сдачи',
      key: 'date_end',
      sorter: 'default' as const,
    },
    {
      title: 'Тип',
      key: 'type.name',
      sorter: 'default' as const,
    },
    {
      title: 'Стоимость',
      key: 'price',
      sorter: 'default' as const,
    },
    {
      title: 'Оценка',
      key: 'rating',
      sorter: 'default' as const,
    },
    {
      title: 'Комментарий',
      key: 'comment',
      sorter: 'default' as const,
    },
    {
      title: 'Действия',
      key: 'actions',
      width: 110,
      render(row) {
        return [
          h(
            NButton,
            {
              type: 'default',
              size: 'small',
              style: {
                marginRight: '6px',
                width: '100%',
                maxWidth: '100px',
              },
              onClick: () => actions.detail(row.id),
            },
            {
              default: () => 'Детали',
            }
          ),
          h(
            NButton,
            {
              type: 'primary',
              size: 'small',
              style: {
                marginRight: '6px',
                marginTop: '6px',
                width: '100%',
                maxWidth: '100px',
              },
              onClick: () => actions.rate(row.id),
            },
            {
              default: () => 'Оценить',
            }
          ),
        ];
      },
    },
  ];
}
</script>

<template>
  <div class="table-orders-ready">
    <NDataTable
      :single-line="false"
      :data="tableData"
      :columns="columns"
      :pagination="{
        pageSize: 30,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
