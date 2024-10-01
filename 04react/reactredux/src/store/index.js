import { createStore } from "react-redux";
import reducer from "../redux/reducer";

const store = createStore(reducer);

export default store;
