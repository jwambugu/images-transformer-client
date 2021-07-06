<template>
  <div class="appBottomMenu">
    <router-link :to="{ name: 'home' }" class="item">
      <div class="col">
        <ion-icon name="cloud-upload-outline" class="md hydrated"></ion-icon>

        <strong>Transform Photos</strong>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
};
</script>

<style scoped></style>
