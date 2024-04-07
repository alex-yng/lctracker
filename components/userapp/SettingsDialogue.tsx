"useClient";

import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

export function SettingsDialogue({ setUsername }: { setUsername?: any }) {
  const [input, setInput] = useState("alicks111");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSave = () => {
    setUsername(input);
  };

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Settings size={24}></Settings>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Set Leetcode Username</DialogTitle>
            <DialogDescription>
              Set Leetcode username to gather stats for. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <Input />
          <DialogClose asChild>
            <Button variant="outline" onClick={handleSave}>
              Save
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Settings size={24}></Settings>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </DrawerDescription>
        </DrawerHeader>
        <Input />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
