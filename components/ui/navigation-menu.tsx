"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const NavigationMenu = React.forwardRef<
  React.ElementRef<"nav">,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  />
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<
  React.ElementRef<"ul">,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("relative", className)} {...props} />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const navigationMenuTriggerStyle = () =>
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & {
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </button>
))
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    open?: boolean
  }
>(({ className, open, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-full left-0 z-50 mt-1 w-auto min-w-[200px] rounded-md border bg-white p-2 shadow-lg transition-all duration-200",
      open ? "opacity-100 visible" : "opacity-0 invisible",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    className?: string
  }
>(({ className, href, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  />
))
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
}