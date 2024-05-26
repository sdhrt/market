import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Package } from "lucide-react";

function UserTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Package />
        </TooltipTrigger>
        <TooltipContent>
          <p>Your packages and ideas</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default UserTooltip;
