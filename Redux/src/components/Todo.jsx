import { useSelector } from "react-redux"

export default function Todo() {
   const todos =  useSelector((state) => state.todos);
    console.log(todos);
    return<><h2>Todos</h2>
    <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
                    {todo.task}
                </span>
            </li>
        ))}
    </ul>
    
    </> 
}