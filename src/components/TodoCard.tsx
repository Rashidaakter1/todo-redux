import { MdDelete } from "react-icons/md"
import { Button } from "./ui/button"
import {  TTodo } from "@/redux/features/TodoSlice"
import { useRemoveTodoMutation, useUpdateTodoMutation } from "@/redux/api/api"
import EditTodoModal from "./EditTodoModal"


const TodoCard = ({ task, description, isCompleted, id, priority }: TTodo) => {
    // const dispatch = useAppDispatch()

    const [updateTask, { isSuccess, isLoading }] = useUpdateTodoMutation()
    const [removeTask] = useRemoveTodoMutation()


    const handleClick = (id: string) => {
        // dispatch(toggleTask(id))

        const data = {
            id: id,
            body: {
                task,
                description,
                priority,
                isCompleted: !isCompleted
            }
        }
        updateTask(data)
        console.log({ data, isSuccess, isLoading })
        console.log(isCompleted)
    }

    return (
        <div className=" py-2 px-3 rounded-lg my-2 bg-white">
            <div className="flex justify-between items-center">
                <input type="checkbox" name="isCompleted" onClick={() => handleClick(id)} defaultChecked={isCompleted} />
                <p className="flex-1 ml-3">{task}</p>
                <p className="flex-[2]">{description}</p>
                <p className="flex-1 flex items-center">
                    <div className={`rounded-full border w-3 h-3 
                        ${priority === "high" ? "bg-red-700" : null}
                        ${priority === "medium" ? "bg-yellow-300" : null}
                        ${priority === "low" ? "bg-green-800" : null}
                         mr-2`}></div>
                    {priority}</p>
                {
                    isCompleted ? <p className="flex-1">Done</p> : <p className="flex-1">Pending</p>
                }
                <div className="flex
                ">
                    <Button onClick={() => removeTask(id)} className="bg-red-500 mx-3"><MdDelete /></Button>
                    <EditTodoModal id={id} isCompleted={isCompleted} task={task} description={description} priority={priority} />

                </div>

            </div>
        </div>
    )
}

export default TodoCard