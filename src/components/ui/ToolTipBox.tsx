import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

export default function ToolTipBox({text} :{text : string}) {
  return (
    <div className="flex justify-end mr-4">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><InfoIcon size={20}/></TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}