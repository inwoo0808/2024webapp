import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Counter from "./components/Counter.jsx";
function App() {
  return (
    //Provider로 감싸면 모든 자식 컴포넌트에 값 전달 가능
    <Provider store={store}>
      <div>App</div>
      <Counter />
    </Provider>
  );
}

export default App;
