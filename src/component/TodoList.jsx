import React from 'react';
import Todo from './Todo';

const TodoList =({todos,setTodos,filteredTodo})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodo.map((todo)=>(
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;