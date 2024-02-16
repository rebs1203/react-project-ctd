import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'
import { TextField } from '@mui/material'
import '../styles/InputWithLabel.css'


const InputWithLabel = ({children, value, handleTitleChange}) => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <div className='input-container'>
        <label htmlFor='fullWidth'>{children}</label>
        <TextField fullWidth label="Add your task" id="fullWidth" name='title' value={value} onChange={handleTitleChange} ref={inputRef}></TextField>
        </div>
    )
}

InputWithLabel.prototype = {
    handleTitleChange: PropTypes.func,
    children: PropTypes.node,
    value: PropTypes.string
}

export default InputWithLabel