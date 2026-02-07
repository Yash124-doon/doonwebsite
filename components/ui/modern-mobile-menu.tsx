'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Building, FileText, Users, ImageIcon, Newspaper, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import siteData from '../../data/site.json';

interface ModernMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  color: string;
  description: string;
  dropdown: any[] | null;
}

// Custom Social Media Icon Components
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.048 1.79.217 2.428.465a4.9 4.9 0 011.77 1.153 4.9 4.9 0 011.153 1.77c.247.637.416 1.363.465 2.427.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.048 1.065-.217 1.79-.465 2.428a4.9 4.9 0 01-1.153 1.77 4.9 4.9 0 01-1.77 1.153c-.637.247-1.363.416-2.427.465C15.056 21.99 14.717 22 12 22s-3.056-.01-4.122-.06c-1.065-.048-1.79-.217-2.428-.465a4.9 4.9 0 01-1.77-1.153 4.9 4.9 0 01-1.153-1.77c-.247-.637-.416-1.363-.465-2.427C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.048-1.065.217-1.79.465-2.428a4.9 4.9 0 011.153-1.77A4.9 4.9 0 015.23 2.525c.637-.247 1.363-.416 2.427-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);

const socialIconComponents: Record<string, React.ComponentType<any>> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
};



const getNavigationItems = (): NavigationItem[] => {
  const items: NavigationItem[] = [];

  // Add Home first
  items.push({
    name: 'Home',
    href: '/',
    icon: Home,
    color: '#10b981',
    description: 'Welcome to our school',
    dropdown: null
  });

  siteData.navigation.forEach((navItem) => {
    if (navItem.name !== 'HOME' && navItem.name !== 'ENQUIRY') {
      let displayName, icon, color, description;

      switch (navItem.name) {
        case 'ABOUT':
          displayName = 'About';
          icon = Building;
          color = '#1f4f8b';
          description = 'Learn more about our school';
          break;
        case 'MANDATORY DISCLOSURE':
        case 'MANDATORY DISCLOSURES':
          displayName = 'Mandatory Disclosure';
          icon = FileText;
          color = '#6b7280';
          description = 'Official school disclosure information';
          break;
        case 'ADMISSION':
        case 'ADMISSIONS':
          displayName = 'Admissions';
          icon = Users;
          color = '#3b82f6';
          description = 'Join our community';
          break;
        case 'GALLERY':
          displayName = 'Gallery';
          icon = ImageIcon;
          color = '#f59e0b';
          description = 'View our photo gallery';
          break;
        case 'UPDATES':
          displayName = 'Updates';
          icon = Newspaper;
          color = '#8b5cf6';
          description = 'Latest news and updates';
          break;
        case 'CONTACT':
          displayName = 'Contact';
          icon = Phone;
          color = '#60a5fa';
          description = 'Get in touch with us';
          break;
        case 'DISCOVER DOON':
          displayName = 'Discover Doon';
          icon = Building;
          color = '#10b981';
          description = 'Explore our facilities';
          break;
        case 'PARENT PORTAL':
          displayName = 'Parent Portal';
          icon = Users;
          color = '#1f4f8b';
          description = 'Access parent resources';
          break;
        default:
          displayName = navItem.name;
          icon = Building;
          color = '#1f4f8b';
          description = `Visit our ${displayName.toLowerCase()}`;
      }

      items.push({
        name: displayName,
        href: navItem.href,
        icon,
        color,
        description,
        dropdown: navItem.dropdown || null
      });
    }
  });

  return items;
};

export const ModernMobileMenu: React.FC<ModernMobileMenuProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (sectionName: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionName)) {
      newExpanded.delete(sectionName);
    } else {
      newExpanded.add(sectionName);
    }
    setExpandedSections(newExpanded);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-black/5 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-3 inset-y-6 z-[60] flex items-start justify-center pt-6"
            style={{ filter: 'blur(0px)' }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0A2A5C] text-white rounded-3xl p-6 w-full max-w-sm mx-auto shadow-2xl border border-white/10"
              style={{ filter: 'blur(0px)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-xl font-heading font-bold text-primary">Navigate</h2>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={onClose}
                  className="group p-3 rounded-full bg-white/20 hover:bg-red-500 hover:text-white text-white transition-all duration-200"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Enquiry Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-4"
              >
                <Link
                  href={siteData.navigation.find(item => item.name === 'ENQUIRY')?.href || '/enquiry'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group block w-full bg-[#F2B33D] text-[#002B6B] px-6 py-3 rounded-xl font-medium hover:bg-[#F2B33D]/90 transition-colors text-center shadow-sm hover:shadow-md"
                >
                  Enquiry
                </Link>
              </motion.div>

              {/* Navigation Cards */}
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[calc(100vh-16rem)]">
                {getNavigationItems().map((item, index) => {
                  const IconComponent = item.icon;
                  const isExpanded = expandedSections.has(item.name);
                  const hasDropdown = item.dropdown && Array.isArray(item.dropdown) && item.dropdown.length > 0;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Main Navigation Item */}
                      <Link
                        href={item.href}
                        onClick={hasDropdown ? () => toggleSection(item.name) : onClose}
                        className={`group block relative overflow-hidden rounded-xl bg-white/10 p-4 border border-white/20 hover:border-white/30 shadow-sm hover:shadow-lg transition-all duration-300 ${hasDropdown ? 'cursor-pointer' : ''}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`
                          }}
                        />

                        <div className="relative flex items-center space-x-3">
                          <motion.div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}15` }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconComponent
                              className="h-5 w-5"
                              style={{ color: item.color }}
                            />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-white group-hover:text-white transition-colors text-base">
                              {item.name}
                            </h3>
                            <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors">
                              {item.description}
                            </p>
                          </div>

                          {/* Expand/Collapse Icon */}
                          {hasDropdown && (
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="h-4 w-4 text-white/70" />
                            </motion.div>
                          )}
                        </div>

                        <motion.div
                          className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </Link>

                      {/* Dropdown Items */}
                      {hasDropdown && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 mt-2 space-y-2">
                                {item.dropdown!.map((submenu, subIndex) => (
                                  <motion.div
                                    key={submenu.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                  >
                                    <Link
                                      href={submenu.href}
                                      onClick={onClose}
                                      className="group flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white/70 transition-colors" />
                                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                        {submenu.name}
                                      </span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-8 pt-6 border-t border-white/20"
              >
                <div className="flex items-center justify-between text-sm text-white/70">
                  <div className="flex space-x-3">
                    {siteData.socialMedia.map((social) => {
                      const IconComponent = socialIconComponents[social.name];
                      // Define brand colors for each social media
                      const getBrandColor = () => {
                        switch (social.name) {
                          case 'Facebook': return '#1877F2'; // Facebook blue
                          case 'Twitter': return '#000000'; // X (Twitter) black
                          case 'Instagram': return 'transparent'; // Instagram uses gradient background
                          default: return '#1877F2';
                        }
                      };

                      const getBgClass = () => {
                        if (social.name === 'Instagram') {
                          return 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] via-[#FCB045] to-[#FFDC80]'; // Instagram gradient
                        }
                        return 'bg-gray-100 hover:bg-gray-200';
                      };

                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          onClick={onClose}
                          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center justify-center border border-white/20"
                        >
                          {IconComponent && <IconComponent className="h-8 w-8 flex-shrink-0 text-white" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModernMobileMenu;
