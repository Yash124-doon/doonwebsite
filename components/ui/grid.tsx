import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: number; // Number of columns for desktop
  smCols?: number; // Number of columns for small screens
  mdCols?: number; // Number of columns for medium screens
  lgCols?: number; // Number of columns for large screens
  gap?: string; // Tailwind gap utility class, e.g., "gap-4"
}

const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 3,
  smCols = 1,
  mdCols = 2,
  lgCols = 3,
  gap = 'gap-4',
  ...props
}) => {
  const gridClasses = `grid grid-cols-${smCols} sm:grid-cols-${mdCols} lg:grid-cols-${lgCols} ${gap} ${className}`;
  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  );
};

export default Grid;