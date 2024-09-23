import { MdDelete } from "react-icons/md"
import { Button } from "./ui/button"
import { FaEdit } from "react-icons/fa"
import { removeTask, toggleTask, TTodo } from "@/redux/features/TodoSlice"
import { useAppDispatch } from "@/redux/hooks"


const TodoCard = ({ task, description, isCompleted, id, priority }: TTodo) => {
    const dispatch = useAppDispatch()
    const handleClick = (id: string) => {
        dispatch(toggleTask(id))
        console.log("first click")
    }
    return (
        <div className=" py-2 px-3 rounded-lg my-2 bg-white">
            <div className="flex justify-between items-center">
                <input type="checkbox" name="isCompleted" onClick={() => handleClick(id)} />
                <p>{task}</p>
                <p>{description}</p>
                <p>{priority}</p>
                {
                    isCompleted ? <p>Done</p> : <p>Pending</p>
                }
                <div className="flex
                ">
                    <Button onClick={() => dispatch(removeTask(id))} className="bg-red-500 mx-3"><MdDelete /></Button>
                    <Button className="bg-green-800 mx-3"><FaEdit /></Button>
                </div>

            </div>
        </div>
    )
}

export default TodoCard