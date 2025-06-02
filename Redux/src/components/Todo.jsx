import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Features/todo/todoSlices";

export default function Todo() {
   const todos =  useSelector((state) => state.todos);
    const dispatch = useDispatch();
   const handler = (id) => {
      console.log("Delete", id);
      dispatch(deleteTodo(id));
   }
    console.log(todos);
    return<><h2>Todos</h2>
    <ul> 
        {todos.map((todo) => (
            <li key={todo.id}>
                <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
                    {todo.task}
                </span>
                <button onClick={() => handler(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
    
    </> 
}