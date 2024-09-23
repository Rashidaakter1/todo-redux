import { useAppSelector } from '@/redux/hooks'
import AddTodoModal from './AddTodoModal'
import TodoCard from './TodoCard'
import TodoDropdown from './TodoDropdown'

const TodoContainer = () => {

    const { tasks } = useAppSelector(state => state.todo)
    return (
        <div className='h-screen w-full max-w-[724px] mx-auto '>

            <h1 className=' text-center text-2xl font-semibold
             my-10'>Todo Application</h1>
            <div className='flex justify-between items-center my-4'>
                <AddTodoModal />                
                <TodoDropdown />
            </div>
            <div className='border border-blue-300 bg-blue-300 px-2 rounded-lg'>
                {
                    tasks.length > 0 ? tasks.map(task => <TodoCard {...task} />) : <h1 className='text-center text-xl font-semibold'>
                        There is no tasks in todo list
                    </h1>
                }


            </div>

        </div>
    )
}

export default TodoContainer