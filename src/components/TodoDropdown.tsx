

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { filterTask } from "@/redux/features/TodoSlice"
type Checked = DropdownMenuCheckboxItemProps["checked"]

const TodoDropdown = () => {
    const [high, setHigh] = useState<Checked>(false)
    const [medium, setMedium] = useState<Checked>(false)
    const [low, setLow] = useState<Checked>(false)
    const dispatch = useAppDispatch()
    const handleChecked = (id: string) => {
        dispatch(filterTask(id))
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='bg-amber-700'>Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select by priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={high}
                    onCheckedChange={setHigh}
                    onClick={() => handleChecked("high")}
                >
                    High
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={medium}
                    onCheckedChange={setMedium}
                    onClick={() => handleChecked("medium")}
                >
                    Medium
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={low}
                    onCheckedChange={setLow}
                    onClick={() => handleChecked("low")}
                >
                    Low
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TodoDropdown