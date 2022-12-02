import React, {Component} from 'react';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import Dropdown from './Dropdown'
import initialTodos from '../todos.json'
import TodoList from './TodoList';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,     
   }

   deleteTodo =(todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
   }


  render() { 
    const {todos} = this.state;
    const completedTodos = todos.reduce(
      (acc,todo) => (todo.completed ? acc + 1 : acc), 0, );
    console.log(completedTodos);

    return (
      <>
    <h1>Состояние компонента</h1>
    <Counter initialValue={10} />
    <Dropdown />
    <ColorPicker options={colorPickerOptions} />
    {/* <hr></hr> */}
    <div className='List'>
      <span>Общее кол-во: {todos.length}</span>
      <span>Кол-во выполненных: </span>
    </div>
    <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
  </>
    );
  }
}

export default App;

// const App = () => (
//   <>
//     <h1>Состояние компонента</h1>
//     <Counter initialValue={10} />
//     <Dropdown />
//     <ColorPicker options={colorPickerOptions} />
//     <TodoList />
//   </>
// )


