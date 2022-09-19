import './Todo.css';

function Todo({ item }) {
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.id}</p>
            <p>{item.userId}</p>
            <p>{item.completed.toString()}</p>
        </div>
    )

}

export default Todo;
