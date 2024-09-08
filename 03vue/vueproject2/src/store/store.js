import { createStore } from "vuex";

export default createStore({
  state: {
    recordData: [
      {
        id: 1,
        title: "오운완 등 완료!!",
        date: "2024-09-01",
        content: "오늘은 등 자극이 잘 들어왔다:)",
        image: "https://picsum.photos/100",
      },
      {
        id: 2,
        title: "오운완 하체 완료!!",
        date: "2024-09-02",
        content: "무게를 치다가 다리를 다칠뻔했다ㅠㅠ",
        image: "https://picsum.photos/100",
      },
      {
        id: 3,
        title: "오운완 가슴 완료!!",
        date: "2024-09-03",
        content: "어제 하체를 해서 오늘 상체 운동을 했다!!",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addRecord(state, payload) {
      state.recordData.push(payload);
    },
    updateRecord(state, payload) {
      const index = state.recordData.findIndex(
        (record) => record.id === payload.id
      );
      if (index !== -1) {
        state.recordData[index] = payload;
      }
    },
    deleteRecord(state, id) {
      state.recordData = state.recordData.filter((record) => record.id !== id);
    },
  },
  actions: {
    addRecord({ commit }, record) {
      commit("addRecord", record);
    },
    updateRecord({ commit }, record) {
      commit("updateRecord", record);
    },
    deleteRecord({ commit }, id) {
      commit("deleteRecord", id);
    },
  },
});
