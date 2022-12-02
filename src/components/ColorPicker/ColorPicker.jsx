import React from 'react';
import './ColorPicker.css'

class ColorPicker extends React.Component {
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }) => (
                        <span
                            key={label}
                            className='ColorPicker__option'
                            style={{ backgroundColor: color }}
                            //   onClick={() => this.setActiveIdx(index)}
                        ></span>
                    ))}                    
                </div>
            </div>
        )
    }
}

export default ColorPicker;


