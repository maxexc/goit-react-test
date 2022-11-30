import React from 'react';
import Controls from './Controls';
import Value from './Value';
// import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
import './Counter.css';


class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { value: 5, }
    // }

    state = {
        value: 7
    }

    handleIncrement = (event) => {
        this.setState(prevState => ({
            value: prevState.value +1,
        }))
        // this.setState ({value: 4,})
        // console.log('Кликнули в увеличить');
        // const {target} = event;

        // setTimeout(() => {
        //     console.log(target)
        // }, 1000)        
    }

    handleDecrement = (event) => {
        this.setState(prevState => ({
            value: prevState.value -1,
        }))
        // this.setState ({value: 6,})
        // console.log('Кликнули в уменьшить');
        // console.log(this.state.value)
        
    }




    render() {
        return (
            <div className='Counter'>
                <Value value={this.state.value} />
                
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
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