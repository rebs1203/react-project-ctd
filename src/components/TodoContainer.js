import { useState, useEffect } from 'react'
import TodoList from './TodoList.js'
import AddTodoForm from './AddTodoForm.js'
import '../styles/TodoContainer.css'

const TodoContainer = () => {
    
    const [ todoList, setTodoList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_TABLE_NAME}`
    
            const options = {
                method: 'GET',
                headers: {
                    Authorization:`Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
    
            try {
                const response = await fetch(url, options)
    
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
    
                const data = await response.json()
    
                data.records?.sort((objectA, objectB) => {
                    return objectA.fields?.title?.toUpperCase().localeCompare(objectB.fields?.title?.toUpperCase())
                });
    
                const todos = data.records.map((todo) => todo = {title: todo.fields.title, id: todo.id})

                setTodoList(todos)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const addTodo = async (title) => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_TABLE_NAME}`
    
            const options = {
                method: 'POST',
                headers: {
                    Authorization:`Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fields: { 'title': title } })
            }

            try {
                const response = await fetch(url, options)

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                const data = await response.json()

                setTodoList(prevTodoList => [{ title: title, id: data.id }, ...prevTodoList]);
            } catch (error) {
                console.log(error)
            }
    }

    const removeTodo = async (id) => {

        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_TABLE_NAME}/${id}`
    
            const options = {
                method: 'DELETE',
                headers: {
                    Authorization:`Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
                }
            }

            try {
                const response = await fetch(url, options)

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id))
            } catch (error) {
                console.log(error)
            }
    }


    return (
        <>
        {
            isLoading ? (
                <p>Loading...</p>
                ) : (
                <>
                    <h1 className='title-todo-list'>Todo List</h1>
                    <AddTodoForm onAddTodo={addTodo}/>
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
                </>
            )
        } 
        </>
    )
}


export default TodoContainer 