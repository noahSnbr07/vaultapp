import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// merge classnames of tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}