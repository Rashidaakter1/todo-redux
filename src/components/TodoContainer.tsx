
import { useState } from 'react'
import AddTodoModal from './AddTodoModal'
import TodoCard from './TodoCard'
import TodoDropdown from './TodoDropdown'
import { useGetTodoQuery } from '@/redux/api/api'
import { TTodo } from '@/redux/features/TodoSlice'


const TodoContainer = () => {
    const [filter, setFilter] = useState<string>("")
    const { data: tasks, isLoading } = useGetTodoQuery(filter)


    // THIS IS FOR THE LOCAL STATE
    // const { tasks } = useAppSelector(state => state.todo)
    return (
        <div className='h-screen   mx-24 '>

            <h1 className=' text-center text-2xl font-semibold
             my-10'>Todo Application</h1>
            <div className='flex justify-between items-center my-4 '>
                <AddTodoModal />
                <TodoDropdown setFilter={setFilter} />
            </div>
            {isLoading ? <p> loading </p> : <>
                <div className='border border-blue-300 bg-blue-300 px-2 rounded-lg'>
                    {
                        tasks?.data?.length > 0 ? tasks?.data?.map((task: TTodo) => <TodoCard {...task} />) : <h1 className='text-center text-xl font-semibold'>
                            There is no tasks in todo list
                        </h1>
                    }


                </div>
            </>}


        </div>
    )
}

export default TodoContainer