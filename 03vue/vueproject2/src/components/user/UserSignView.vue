<template>
  <div>
    <div class="mb-3 mt-3">
      <input
        type="text"
        class="form-control"
        placeholder="title"
        v-model="recordData.title"
      />
    </div>
    <div class="mb-3">
      <input type="date" class="form-control" v-model="recordData.date" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">exercise content</span>
      <textarea
        class="form-control"
        aria-label="exercise content"
        v-model="recordData.content"
      ></textarea>
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="mt-3 text-center">
      <div class="btn btn-outline-dark" @click="addRecord">submit</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const recordData = ref({
  title: null,
  date: null,
  content: "",
  image: null,
});

const clearform = () => {
  recordData.value.title = null;
  recordData.value.date = null;
  recordData.value.content = null;
  recordData.value.image = null;
};

const addRecord = () => {
  let uData = {
    title: recordData.value.title,
    date: recordData.value.date,
    content: recordData.value.content,
    image: recordData.value.image,
  };
  store.commit("addRecord", uData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    recordData.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
