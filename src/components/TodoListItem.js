import { PropTypes } from 'prop-types'
import { Button } from '@mui/material'
import '../styles/TodoListItem.css'

const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <div className='todo-item-container'>
            <li className='list-item'>{todo.title}</li>
            <Button variant='contained' size='small' className='remove-button' onClick={() => onRemoveTodo(todo.id)}>Remove</Button>
        </div>
    )
}

TodoListItem.prototype = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
}

export default TodoListItem