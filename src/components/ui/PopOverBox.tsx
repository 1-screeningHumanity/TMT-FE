import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export default function PopOverBox({text} :{text : string}) {
  return (
    <div className="flex justify-end mr-4">
    <Popover>
      <PopoverTrigger><InfoIcon size={20}/></PopoverTrigger>
      <PopoverContent><p>{text}</p></PopoverContent>
    </Popover>
  </div>
  )
}