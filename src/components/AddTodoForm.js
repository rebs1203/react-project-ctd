import { PropTypes } from 'prop-types'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel.js'
import '../styles/AddTodoForm.css'
import { Button } from '@mui/material'


const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value)
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
        if (todoTitle) {
            onAddTodo(todoTitle)
            setTodoTitle("")
        } else {
            alert('Please enter task.')
        }
    } 

    return (
        <div style={{display: 'flex'}}>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel handleTitleChange={handleTitleChange} value={todoTitle}/>
                <Button variant='contained' className='add-button' type='submit'>Add</Button>
            </form>
        </div>
    )
}

AddTodoForm.prototype = {
    onAddTodo: PropTypes.func
}

export default AddTodoForm