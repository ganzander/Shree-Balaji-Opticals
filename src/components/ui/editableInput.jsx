"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { IconEdit } from "@tabler/icons-react";

const EditableInput = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        var(--blue-500),
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input relative"
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full border-none bg-[#eee] dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-black dark:placeholder:text-white 
         dark:focus-visible:ring-neutral-600
         disabled:cursor-not-allowed disabled:opacity-60
         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         group-hover/input:shadow-none focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 transition duration-400`,
          className
        )}
        ref={ref}
        disabled={!isEditable}
        {...props}
      />

      {!isEditable && (
        <IconEdit
          className="text-black dark:text-white absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setIsEditable(!isEditable)}
          size={20}
        />
      )}
    </motion.div>
  );
});
EditableInput.displayName = "Input";

export { EditableInput };
