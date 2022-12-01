import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown'

export const App = () => (
  <>
    <h1>Состояние компонента</h1>
    <Counter />
    <Dropdown />
  </>
)


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
