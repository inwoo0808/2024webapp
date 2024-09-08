<template>
  <div v-if="item" class="card mt-3" style="width: 50%; margin-left: 25%">
    <div class="text-center mt-3">
      <h3>{{ item.title }}</h3>
    </div>

    <p style="margin-left: 75%"><strong>Date:</strong> {{ item.date }}</p>
    <p style="text-align: center">
      {{ item.content }}
    </p>
    <div class="text-center">
      <img
        :src="item.image"
        alt="Item image"
        class="item-image"
        style="width: 200px; height: 200px"
      />
    </div>
    <button
      @click="goBack"
      class="btn btn-outline-dark mt-3 mb-3"
      style="width: 15%; margin-left: 43%"
    >
      뒤로가기
    </button>
  </div>
  <p v-else>로딩 중...</p>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

const item = computed(() => {
  return store.state.recordData.find(
    (record) => record.id === parseInt(route.params.id)
  );
});

const goBack = () => {
  router.back();
};

onMounted(() => {
  // Additional setup if needed
});
</script>

<style lang="scss" scoped>
.detail-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;

  .item-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
