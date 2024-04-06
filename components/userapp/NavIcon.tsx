import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const NavIcon = ({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger {asChild ? 'asChild' : ''} className="rounded-full transition-colors duration-300 hover:bg-primary/30">
          {children}
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={15}>
          <p>Profile</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavIcon;
