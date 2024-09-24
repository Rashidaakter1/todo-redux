

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const TodoDropdown = ({ setFilter }: any) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='bg-amber-700'>Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select by priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => setFilter("high")}
                >
                    High
                </DropdownMenuItem>
                <DropdownMenuItem

                    onClick={() => setFilter("medium")}
                >
                    Medium
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setFilter("low")}
                >
                    Low
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TodoDropdown