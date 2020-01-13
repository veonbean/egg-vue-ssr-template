<template>
  <AdminLayout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </AdminLayout>
</template>

<script>
import AdminLayout from 'component/layout/index.vue';

export default {
  components: {
    AdminLayout,
  },
  computed: {},
  mounted() {},
}
</script>

<style>

</style>