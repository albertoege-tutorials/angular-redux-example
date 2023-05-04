import {
  ADD_TODO_ITEM,
  AddTodoItemAction,
  CHANGE_TODO_STATUS,
  ChangeTodoStatusAction,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCEEDED,
  GetTodosFailedAction,
  GetTodosSucceededAction,
  REMOVE_TODO_ITEM,
  RemoveTodoItemAction,
  TodoActions
} from './actions';
import { TodoItem, TodoListState } from './models';

const INITIAL_TODO_LIST_STATE: TodoListState = {
  items: [],
  status: 'idle'
};

const ADD_TODO_ITEM_REDUCER: (state: TodoListState, action: AddTodoItemAction) => TodoListState = (state, action) => {
  const newItem: TodoItem = {
    description: action.newItem.description,
    id: action.newItem.id ?? action.newItem.description + new Date().getTime()
  };

  return {
    ...state,
    items: [...state.items, newItem]
  };
};

const REMOVE_TODO_ITEM_REDUCER: (state: TodoListState, action: RemoveTodoItemAction) => TodoListState = (
  state,
  action
) => {
  const items: TodoItem[] = state.items.filter((item) => item.id !== action.id);

  return {
    ...state,
    items
  };
};

const GET_TODOS_SUCEEDED_REDUCER: (state: TodoListState, action: GetTodosSucceededAction) => TodoListState = (
  state,
  action
) => {
  const items: TodoItem[] = action.items;

  return {
    ...state,
    items,
    status: 'idle'
  };
};

const GET_TODOS_FAILED_REDUCER: (state: TodoListState, action: GetTodosFailedAction) => TodoListState = (
  state,
  action
) => {
  console.log(action.error);

  return {
    ...state,
    status: 'error'
  };
};

const CHANGE_TODO_STATUS_REDUCER: (state: TodoListState, action: ChangeTodoStatusAction) => TodoListState = (
  state,
  action
) => {
  return {
    ...state,
    status: action.status
  };
};

// Inicialización de reducers por id de acción
const reducerActionsByType: Map<string, (state: TodoListState, action: TodoActions) => TodoListState> = new Map();
reducerActionsByType.set(ADD_TODO_ITEM, ADD_TODO_ITEM_REDUCER);
reducerActionsByType.set(REMOVE_TODO_ITEM, REMOVE_TODO_ITEM_REDUCER);
reducerActionsByType.set(GET_TODOS_SUCCEEDED, GET_TODOS_SUCEEDED_REDUCER);
reducerActionsByType.set(GET_TODOS_FAILED, GET_TODOS_FAILED_REDUCER);
reducerActionsByType.set(CHANGE_TODO_STATUS, CHANGE_TODO_STATUS_REDUCER);

export default function getTodoListReducerByAction(state: TodoListState, action: TodoActions): TodoListState {
  const todoListReducerByAction = reducerActionsByType.get(action.type);
  if (!todoListReducerByAction) {
    return state;
  }

  return todoListReducerByAction(state, action);
}

export function todoListReducer(state: TodoListState = INITIAL_TODO_LIST_STATE, action: TodoActions) {
  return getTodoListReducerByAction(state, action);
}
