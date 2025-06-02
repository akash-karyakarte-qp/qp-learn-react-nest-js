import type { ITodo } from '../../types/ITodo'
import type {IUser} from '../../types/IUser'

export const userMockDb = {
  getUser: (): IUser => {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    }
  },
  getTodos: (): ITodo[] => {
    return [
      {id: 1, title: 'Todo 1', status: 'active'},
      {id: 2, title: 'Todo 2', status: 'completed'},
      {id: 3, title: 'Todo 3', status: 'active'},
    ]
  },
}
