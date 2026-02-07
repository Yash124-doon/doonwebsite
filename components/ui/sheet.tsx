"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Sheet: React.FC<SheetProps> = ({ open: externalOpen, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        />
      )}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SheetContent) {
          return React.cloneElement(child as React.ReactElement<any>, {
            open: isOpen,
            onOpenChange: setOpen,
          });
        } else if (React.isValidElement(child) && child.type === SheetTrigger) {
          return React.cloneElement(child as React.ReactElement<any>, {
            onClick: (e: any) => {
              setOpen(true);
              (child as React.ReactElement<any>).props.onClick?.(e);
            },
          });
        }
        return child;
      })}
    </>
  );
}

interface SheetContentProps {
  className?: string
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, open, onOpenChange, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed z-[51] bg-gradient-to-b from-white to-slate-50 shadow-2xl border-l border-slate-200/80",
        "top-20 right-0 bottom-0 w-4/5 max-w-sm",
        "transition-all duration-400 ease-out transform-gpu",
        open ? "translate-x-0 opacity-100 scale-100 backdrop-blur-xl" : "translate-x-full opacity-0 scale-95",
        className
      )}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-200/60">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">DS</span>
            </div>
            <div>
              <div className="font-heading font-semibold text-foreground text-sm">Doon International</div>
              <div className="text-xs text-muted-foreground">School, Jabalpur</div>
            </div>
          </div>
          <button
            className="group relative w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-600 transition-all duration-200 flex items-center justify-center"
            onClick={() => onOpenChange?.(false)}
          >
            <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-slate-200/60 space-y-3">
          <div className="text-xs text-muted-foreground">
            <div className="font-medium">Contact Us</div>
            <div className="mt-1">📞 +91 9201591900 / +91 9201591892</div>
            <div>✉️ info@dooninternationalschool.com</div>
          </div>
        </div>
      </div>
    </div>
  )
)
SheetContent.displayName = "SheetContent"

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10",
      className
    )}
    {...props}
  />
))
SheetTrigger.displayName = "SheetTrigger"

export { Sheet, SheetContent, SheetTrigger }
