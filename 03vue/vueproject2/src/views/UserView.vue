<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-6 text-center py-3">
        <h3>My Exercise Record</h3>
        <UserSignView />
      </div>
      <div class="col-md-6 text-center py-3">
        <h3>My Record List</h3>
        <UserListView />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <MapView />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
import MapView from "../components/user/MapView.vue";
</script>

<style lang="scss" scoped></style>
