<template>
  <div v-if="item" class="card mt-3" style="margin-left: 25%; width: 50%">
    <div class="text-center mt-3">
      <h1>수정하기</h1>
    </div>
    <form @submit.prevent="updateItem">
      <div class="form-group mt-3" style="margin-left: 10%; width: 80%">
        <label for="title">제목</label>
        <input
          v-model="updatedItem.title"
          type="text"
          id="title"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3" style="margin-left: 10%; width: 80%">
        <label for="date">날짜</label>
        <input
          v-model="updatedItem.date"
          type="date"
          id="date"
          class="form-control"
          required
        />
      </div>

      <div class="form-group mt-3" style="margin-left: 10%; width: 80%">
        <label for="content">내용</label>
        <textarea
          v-model="updatedItem.content"
          id="content"
          class="form-control"
          rows="4"
          required
        ></textarea>
      </div>

      <div class="form-group mt-3" style="margin-left: 10%; width: 80%">
        <label for="image">이미지 URL</label>
        <input
          v-model="updatedItem.image"
          type="text"
          id="image"
          class="form-control"
        />
      </div>

      <button
        type="submit"
        class="btn btn-outline-dark mt-3 mb-3"
        style="margin-left: 40%"
      >
        저장
      </button>
      <button
        type="button"
        @click="goBack"
        class="btn btn-outline-dark mt-3 mb-3"
        style="margin-left: 2%"
      >
        취소
      </button>
    </form>
  </div>
  <p v-else>로딩 중...</p>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

// 기존 항목 찾기
const item = computed(() => {
  return store.state.recordData.find(
    (record) => record.id === parseInt(route.params.id)
  );
});

// 수정할 항목 데이터 설정
const updatedItem = reactive({ ...item.value });

const updateItem = () => {
  // Vuex에 업데이트 액션 호출
  store.dispatch("updateRecord", updatedItem);
  alert("수정되었습니다.");
  router.push({ name: "detail", params: { id: updatedItem.id } });
};

const goBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped></style>
