import { useReducer, useState } from "react";
import TodoListReducer from "../TodoListReduce/TodoListReducer";
import { initallState } from "../TodoListReduce/TodoListReducer";
import {
  CreateAction,
  RemoveItemAction,
  UpdateItemAction,
} from "../TodoListReduce/TodoListReducer";

const TodoList = () => {
  const [selectValue, setSelectValue] = useState("7h-9h");
  const [nameList, setNameList] = useState("");
  const [levelCheckRadio, setLevelCheckRadio] = useState("");
  const [todos, dispatch] = useReducer(TodoListReducer, initallState);
  const [has_A_emptySpace, setHas_A_emptySpace] = useState(null);
  // lưu ý khi todos được trả về , nên console để xem kết quả trả về để dễ sử dụng
  const todos_Result = todos.todo;

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const initial = {
      id: Date.now().toString(),
      listName: nameList,
      timeRanges: selectValue,
      level: levelCheckRadio,
    };

    for (const value of Object.values(initial)) {
      if (!value) {
        setHas_A_emptySpace(true);
        return console.log("have a output need check");
      } else {
        setHas_A_emptySpace(false);
        console.log("check value được khởi tạo : " + value);
      }
    }

    setNameList("");
    dispatch(CreateAction(initial));
  };

  const handleRemoveItem = (id) => {
    dispatch(RemoveItemAction(id));
  };

  const handleStatusItemChange = (status) => {
    dispatch(UpdateItemAction(status));
  };

  const erronWithEmptySpace = () => {
    return (
      <div className="text-red-300 py-1 px-5 bg-red-50 border-[1px] rounded-md mb-2 transition ease-in-out duration-300">
        You should choose all input
      </div>
    );
  };

  return (
    <div className="max-w-[600px]  shadow-indigo-500/50 p-4 md:p-4 bg-white mx-auto mt-[60px] border-[2px] rounded-[6px] border-indigo-500 transition ease-in-out duration-300">
      {has_A_emptySpace ? erronWithEmptySpace() : null}
      {todos_Result.map((todo) => {
        const { status, level } = todo;

        return (
          <div
            className={
              status
                ? "todo-list  relative rounded-md z-10 border-indigo-300 border-soild border-[1px] p-3 mb-3 bg-indigo-400/25"
                : "todo-list rounded-md relative z-10 border-indigo-300 border-soild border-[1px] p-3 mb-3 bg-indigo-100/25"
            }
            key={todo.listName}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] capitalize text-indigo-400">
                {todo.listName}
              </h3>
              <p className="text-[12px] text-slate-400">
                estimated time: {todo.timeRanges}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-slate-400 cursor-pointer">
                Complete:
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[2px] align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 focus:ring-0"
                  type="checkbox"
                  value=""
                  onChange={(e) =>
                    handleStatusItemChange({
                      id: todo.id,
                      status: e.target.checked,
                    })
                  }
                />
              </label>
              <div
                className="text-slate-400 btn-remove cursor-pointer"
                onClick={() => handleRemoveItem(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="stroke-slate-200 cursor-pointe"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" />
                </svg>
              </div>
            </div>
            <div
              className={`recognitionLevel w-[15px] h-[15px] absolute recognitionLevel-${level}`}
            ></div>
          </div>
        );
      })}
      <div className="form-todo mt-2">
        <h3 className="text-slate-400 capitalize  text-[18px]">
          Create todo list for you
        </h3>
        <ul className="grid grid-cols-3 gap-x-5 my-10 max-w-md">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="easy"
              name="answer"
              id="answer_easy"
              onChange={(e) => setLevelCheckRadio(e.target.value)}
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent text-slate-400"
              htmlFor="answer_easy"
            >
              Easy
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👍
            </div>
          </li>

          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="medium"
              name="answer"
              id="answer_medium"
              onChange={(e) => setLevelCheckRadio(e.target.value)}
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent text-slate-400"
              htmlFor="answer_medium"
            >
              Medium
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👎
            </div>
          </li>

          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="difficult"
              name="answer"
              id="answer_difficult"
              onChange={(e) => setLevelCheckRadio(e.target.value)}
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent text-slate-400"
              htmlFor="answer_difficult"
            >
              Difficult
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              🤔
            </div>
          </li>
        </ul>
        <form className="form flex flex-col">
          <label>
            <input
              className="border-soild border-[1px] focus:outline-none border-slate-400 rounded-md p-2 mt-4"
              type="text"
              value={nameList}
              placeholder="Create List"
              onChange={(e) => setNameList(e.target.value)}
            ></input>
          </label>
          <select
            className="mt-4 focus:outline-none border-[1px] rounded-md p-1 border-slate-400 text-slate-400"
            defaultValue={selectValue}
            onChange={handleSelectChange}
          >
            <option value="7h-9h">7h-9h</option>
            <option value="14h-16h">14h-16h</option>
            <option defaultValue value="19h-21h">
              19h-21h
            </option>
            <option value="17h-21h">17h-21h</option>
            <option value="" disabled>
              Choose a salutation ...
            </option>
          </select>
          <button
            className="text-white text-[18px] font-semibold bg-red-300 py-2 px-4 capitalize mt-4 rounded-md"
            onClick={handleSubmitForm}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
