import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'
import { TextField } from '@mui/material'
import '../styles/InputWithLabel.css'


const InputWithLabel = (props) => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <div className='input-container'>
        <label htmlFor='fullWidth'>{props.children}</label>
        <TextField fullWidth label="Add your task" id="fullWidth" name='title' value={props.value} onChange={props.handleTitleChange} ref={inputRef}></TextField>
        </div>
    )
}

InputWithLabel.prototype = {
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
    children: PropTypes.node 
}

export default InputWithLabel