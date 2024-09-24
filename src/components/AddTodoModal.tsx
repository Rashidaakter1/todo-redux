

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useAppDispatch } from "@/redux/hooks"
import { addTask } from "@/redux/features/TodoSlice"
import { useAddTodoMutation } from "@/redux/api/api"
const formSchema = z.object({
    task: z.string().min(2, {
        message: "Task must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Task must be at least 2 characters.",
    }),
    priority: z.enum(["high", "medium", "low"], {
        required_error: "You need to select a priority type.",
    }),

})


const AddTodoModal = () => {
    // const dispatch = useAppDispatch()
    const [addTask, { isLoading, data, isSuccess }] = useAddTodoMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            task: "",
            description: "",

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const id = Math.random().toString(36).substring(2, 7)
        const taskDetails = {
            ...values,
            id: id,
            isCompleted: false
        }
        // dispatch(addTask(taskDetails))
        form.reset()


        addTask(taskDetails)
        console.log(isLoading, isSuccess, data)

    }
    return (
        <Dialog>
            <DialogTrigger>  <Button className='bg-blue-700'> Add Todo</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="task"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Task</FormLabel>
                                            <FormControl>
                                                <Input  {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input  {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="priority"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Select task priority</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="high" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            High
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="medium" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Medium
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="low" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Low</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddTodoModal