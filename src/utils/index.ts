import type { ClassArray } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function fn(...classes: ClassArray) {
  return twMerge(clsx(...classes));
}
