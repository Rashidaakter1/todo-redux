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

import { useUpdateTodoMutation } from "@/redux/api/api"
import { FaEdit } from "react-icons/fa"
import { TTodo } from "@/redux/features/TodoSlice"
import { useState } from "react"
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

const EditTodoModal = ({ id, isCompleted, task, description, priority }: TTodo) => {
    const [open, setOpen] = useState(false);
    const [updateTask, { isLoading, isSuccess }] = useUpdateTodoMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            task: task,
            description: description,
            priority: priority,

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const data = {
            id: id,
            body: {
                ...values,
                isCompleted
            }
        }

        form.reset()
        updateTask(data)
        setOpen(false)
        console.log({ isLoading, data, isSuccess })
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(true)}>
                <Button className="bg-green-800 mx-3"><FaEdit /></Button></DialogTrigger>
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

export default EditTodoModal