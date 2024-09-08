<template>
  <div
    v-for="(item, i) in $store.state.recordData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3 mt-3"
  >
    <div class="avata">
      <img :src="item.image" alt="" />
    </div>
    <div>
      <h5 class="mb-0">{{ item.title }}</h5>
      <p class="mb-0">{{ item.date }}</p>
      <p class="mb-0">{{ item.content }}</p>
    </div>
    <div class="action-buttons">
      <router-link
        :to="{ name: 'detail', params: { id: item.id } }"
        class="btn btn-outline-dark mt-3"
        style="height: 50%"
        >상세보기</router-link
      >
      <router-link
        :to="{ name: 'edit', params: { id: item.id } }"
        class="btn btn-outline-dark mt-3"
        style="height: 50%"
        >수정</router-link
      >
      <button
        @click="deleteItem(item)"
        class="btn btn-outline-dark mt-3"
        style="height: 50%"
      >
        삭제
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const viewDetails = (item) => {
  // 상세보기 로직
  alert(`상세보기: ${item.title}`);
  // 예를 들어, 모달을 띄우거나 상세 페이지로 이동할 수 있습니다.
};

const editItem = (item) => {
  // 수정 로직
  const updatedItem = {
    ...item,
    title: prompt("새 제목을 입력하세요", item.title),
  };
  if (updatedItem.title) {
    store.dispatch("updateRecord", updatedItem);
    alert(`수정됨: ${updatedItem.title}`);
  }
};

const deleteItem = (item) => {
  if (confirm(`정말로 ${item.title}을(를) 삭제하시겠습니까?`)) {
    store.dispatch("deleteRecord", item.id);
    alert(`삭제됨: ${item.title}`);
  }
};
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.action-buttons {
  margin-left: auto;
  display: flex;
  gap: 10px;

  .btn {
    cursor: pointer;
  }
}
</style>
