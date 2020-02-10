import React from 'react'
import Text from '../home/text.json'
import "./spin.css"

const Spinner = () => {
    return (
        <>
        {Text.loading}
        <i className='loader'>
        </i>
        </>
        
    )
}

export default Spinner;