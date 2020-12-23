import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos,setStatus}) =>{


    const inputTextHandler =(e)=>{
        setInputText(e.target.value);
    }
    const submitTodoHnadler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText , completed:false , id:Math.random()*1000}])
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


return (

    <form>
        <input onChange={inputTextHandler} value={inputText} type="text" className='todo-input'/>
        <button onClick={submitTodoHnadler} className='btn bg-danger btn-warning todo-button' type='submit'>
             <i className=" fa fa-plus-square" />
        </button>
        <select onChange={statusHandler} name="todos" className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </form>

)

}
export default Form;