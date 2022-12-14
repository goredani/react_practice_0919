import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoMetadata from './components/TodoMetadata';
const todos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
]




function App() {
  return (
    <div className='App'>
      <div className='todo-container'>
        {todos.map(todo => (<Todo item={todo} />))}

      </div>
    </div>
  )
}
export default App;
