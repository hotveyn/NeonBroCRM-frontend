<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-employees-all',
    text: 'Сотрудники',
  },
  {
    id: 2,
    name: 'admin-employees-create',
    text: 'Добавить',
  },
  {
    id: 3,
    name: 'admin-employees-fired',
    text: 'Уволенные',
  },
];
</script>

<template>
  <div class="admin-users">
    <BaseNavigation :routes="routes" />
    <div class="admin-users__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-users {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
