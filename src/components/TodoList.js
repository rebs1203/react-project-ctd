import { PropTypes } from 'prop-types'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <>
        <ul>
            {todoList.map((item) => {
                return <TodoListItem key={item.id} todo={item} onRemoveTodo={() => onRemoveTodo(item.id)}/>
            })}
        </ul>
        </>
    )
}

TodoList.prototype = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
}

export default TodoList