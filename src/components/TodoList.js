import { PropTypes } from 'prop-types'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <>
        <div>
        <ul style={{height: '100%'}}>
            {todoList.map((item) => {
                return <TodoListItem key={item.id} todo={item} onRemoveTodo={() => onRemoveTodo(item.id)}/>
            })}
        </ul>
        </div>
        </>
    )
}

TodoList.prototype = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
}

export default TodoList