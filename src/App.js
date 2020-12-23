import React, { useState , useEffect} from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';

const App = () =>{

    const [inputText , setInputText] = useState('');
    const [todos , setTodos] = useState([]);
    const [status , setStatus] = useState('all');
    const [filteredTodo , setFilteredTodo] = useState([]);

    useEffect(() => {
filterHandler()    
}, [todos,status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodo(todos.filter((todo)=>todo.completed === true));
                break;
            case 'uncompleted' :
                setFilteredTodo(todos.filter((todo)=>todo.completed===false));    
                break;
            default:
                setFilteredTodo(todos);
                break;
        }
    }


return (
    <div className='App'>
        <header>
            <h1>Mohammad`s Todo List</h1>
        </header>
        <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        <TodoList filteredTodo={filteredTodo} todos={todos} setTodos={setTodos}/>
    </div>
)

}
export default App;