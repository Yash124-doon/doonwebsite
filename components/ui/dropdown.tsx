import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center px-4 py-2 text-text-DEFAULT hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {title}
        <svg
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ href, children, onClick }) => {
  return (
    <Link href={href} passHref>
      <span
        onClick={onClick}
        className="block px-4 py-2 text-sm text-text-DEFAULT hover:bg-neutral-100 hover:text-primary cursor-pointer"
        role="menuitem"
      >
        {children}
      </span>
    </Link>
  );
};

export default Dropdown;
