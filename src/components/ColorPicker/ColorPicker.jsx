import React from 'react';
import './ColorPicker.css'

class ColorPicker extends React.Component {
    state = {
        activeOptionIdx: 0,
    };
    
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }) => (
                        <button
                            key={label}
                            className='ColorPicker__option'
                            style={{ backgroundColor: color }}
                            //   onClick={() => this.setActiveIdx(index)}
                        ></button>
                    ))}                    
                </div>
            </div>
        )
    }
}

export default ColorPicker;


