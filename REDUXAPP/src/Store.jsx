import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const AddTask = "task/add";
const DelTask = "task/delete";
const FETCH_TASK = "task/fetch";

const initialState = {
  task: ["Mango"],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTask:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DelTask:
      const UpdatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: UpdatedTask,
      };
    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };
    default:
      return state;
  }
};

export const Store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const addTask = (data) => {
  return {
    type: AddTask,
    payload: data,
  };
};
export const delTask = (id) => {
  return {
    type: DelTask,
    payload: id,
  };
};

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      dispatch({
        type: FETCH_TASK,
        payload: task.map((currTask) => currTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

Store.dispatch(addTask());
Store.dispatch(delTask());
