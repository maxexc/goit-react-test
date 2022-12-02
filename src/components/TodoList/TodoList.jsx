import React from 'react';
import './TodoList.css'

const TodoList = ({todos}) => 
    <ul>
        {todos.map(({id, text}) => 
        <li key={id} className='TodoList__item'>
            <p TodoList__text>{text}</p>
            <button>Удалить</button>
        </li>)} 
    </ul>


export default TodoList; 