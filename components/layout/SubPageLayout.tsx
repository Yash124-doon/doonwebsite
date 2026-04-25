'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
}

interface SubPageLayoutProps {
  children: React.ReactNode;
  sidebarItems?: SidebarItem[];
  sectionTitle?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ 
  children, 
  sidebarItems = [], 
  sectionTitle = "In This Section" 
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar - Traditional Desktop Sidebar */}
      {sidebarItems.length > 0 && (
        <aside className="lg:w-1/4">
          <div className="sticky top-24">
            <div className="bg-muted rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider border-b border-primary/10 pb-4">
                {sectionTitle}
              </h3>
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm'
                      }`}
                    >
                      <span className="font-semibold text-[15px]">{item.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Help/Call-to-Action Card in Sidebar */}
            <div className="mt-8 bg-primary rounded-2xl p-6 text-white shadow-lg overflow-hidden relative group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500" />
              <h4 className="text-lg font-bold mb-2">Need Assistance?</h4>
              <p className="text-white/80 text-sm mb-4">Our admissions team is here to help you every step of the way.</p>
              <Link 
                href="/enquiry" 
                className="inline-block bg-accent text-primary font-bold px-6 py-2 rounded-full text-sm hover:bg-white transition-colors duration-300"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className={`${sidebarItems.length > 0 ? 'lg:w-3/4' : 'w-full'}`}>
        <div className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-primary">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SubPageLayout;
