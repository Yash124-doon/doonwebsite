/**
 * @fileoverview Utility functions for Doon International School website
 * @description Common utility functions for styling, data manipulation, and general helpers
 * @author Doon International School Development Team
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines and merges Tailwind CSS classes with proper conflict resolution
 *
 * This utility function combines the functionality of clsx (for conditional classes)
 * and tailwind-merge (for resolving Tailwind CSS class conflicts). It allows you
 * to conditionally apply classes while ensuring proper precedence rules.
 *
 * @param {...ClassValue[]} inputs - Variable number of class values (strings, arrays, objects, etc.)
 * @returns {string} Merged and deduplicated class string
 *
 * @example
 * ```typescript
 * // Basic usage
 * cn('bg-red-500', 'text-white') // 'bg-red-500 text-white'
 *
 * // Conditional classes
 * cn('bg-blue-500', isActive && 'bg-red-500') // 'bg-red-500' (if isActive is true)
 *
 * // Object syntax
 * cn({ 'bg-blue-500': isPrimary, 'bg-gray-500': !isPrimary }) // 'bg-blue-500' or 'bg-gray-500'
 *
 * // Array syntax
 * cn(['bg-blue-500', 'text-white'], ['rounded', 'p-4']) // 'bg-blue-500 text-white rounded p-4'
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
