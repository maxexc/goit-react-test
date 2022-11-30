import React from 'react';
// import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
import './Counter.css';


class Counter extends React.Component {
    render() {
        return (
            <div className='Counter'>
                <span className='Counter__value'>0</span>
                <div className='Counter__controls'>
                    <button type='button' 
                    onClick={() => { 
                        console.log('Кликнули в увеличить')}}
                        >Увеличить на 1</button>
                    <button type='button'
                    onClick={() => { 
                        console.log('Кликнули в уменьшить')}}
                        >Уменьшить на 1</button>
                </div>
            </div>
        )
    }   
}

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

export default Counter;