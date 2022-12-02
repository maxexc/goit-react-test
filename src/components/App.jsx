import React, {Component} from 'react';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import Dropdown from './Dropdown'
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
    todos: [
      {id: 'id-1', text: 'Выучить основы React', completed: false},
      {id: 'id-1', text: 'Разобраться с React Router', completed: false},
      {id: 'id-1', text: 'Пережить Redux', completed: false},
    ],
   }
  render() {
    const {todos} = this.state
    return (
      <>
    <h1>Состояние компонента</h1>
    <Counter initialValue={10} />
    <Dropdown />
    <ColorPicker options={colorPickerOptions} />
    <TodoList todos={todos}/>
  </>
    );
  }
}

// const App = () => (
//   <>
//     <h1>Состояние компонента</h1>
//     <Counter initialValue={10} />
//     <Dropdown />
//     <ColorPicker options={colorPickerOptions} />
//     <TodoList />
//   </>
// )

export default App;


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template TEST ))
//     </div>
//   );
// };
