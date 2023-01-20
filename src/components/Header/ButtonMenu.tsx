import type { ComponentProps } from "react";
import { fn } from "../../utils";

type ButtonMenuProps = {
  isOpen: boolean;
} & ComponentProps<"button">;

export const ButtonMenu = ({ isOpen, ...props }: ButtonMenuProps) => {
  return (
    <button
      {...props}
      className={fn("relative flex w-6 flex-col gap-1", props.className)}
    >
      <span
        className={fn(
          "h-[3px] w-full bg-white transition duration-150",
          isOpen && " absolute -rotate-45"
        )}
      ></span>
      <span
        className={fn(
          "h-[3px] w-full bg-white transition duration-300",
          isOpen && "w-0 opacity-0"
        )}
      ></span>
      <span
        className={fn(
          "h-[3px] w-full bg-white transition duration-150",
          isOpen && "absolute   rotate-45"
        )}
      ></span>
    </button>
  );
};
