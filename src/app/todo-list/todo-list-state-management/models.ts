export interface TodoListState {
  items: TodoItem[];
  status?: TodoStatus;
}

export interface TodoItem {
  description: string;
  id?: string;
}

export type TodoStatus = 'loading' | 'idle' | 'error';

export interface GetTodosResponse {
  items: TodoItem[];
}
