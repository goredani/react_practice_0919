function TodoMetadata({ todoId, todoUserId }) {
    return (
        <div className='TodoMetadata'>

            <p>Id: {todoId}</p>
            <p>User id: {todoUserId}</p>

        </div>
    )

}

export default TodoMetadata;