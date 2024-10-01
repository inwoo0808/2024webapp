import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState();
  const { moveToList } = useCustomMove();

  return (
    <div>
      <div className="flex gap-2">
        <div>title</div>
        <input
          type="text"
          className="border-2 border-gray-300"
          onChange={handleChangeTodo}
        />
      </div>
    </div>
  );
}

export default AddComp;
