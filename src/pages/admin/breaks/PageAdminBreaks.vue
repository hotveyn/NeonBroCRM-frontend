<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-breaks-all',
    text: 'Виды браков',
  },
  {
    id: 2,
    name: 'admin-breaks-create',
    text: 'Добавить',
  },
];
</script>

<template>
  <div class="admin-breaks">
    <BaseNavigation :routes="routes" />
    <div class="admin-breaks__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-breaks {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
