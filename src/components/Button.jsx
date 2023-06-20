import React from 'react'

const Button = ({ data, onclick }) => {
    return (
        <button className='button' onClick={onclick}>{data}</button>

    )
}
Button.defaultProps = {
    data: 'Button',
    onclick: () => { }
}

export default Button