import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  userType: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isLoggedIn, onLogout, userType }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = userType === 'admin' 
    ? [
        { name: 'Admin Panel', page: 'admin' },
      ]
    : [
        { name: 'Home', page: 'home' },
        { name: 'Lessons', page: 'lessons' },
        { name: 'Quizzes', page: 'quizzes' },
        { name: 'Dashboard', page: 'dashboard' },
      ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">EduConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button 
                onClick={onLogout}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button 
                  onClick={() => handleNavClick('login')}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => handleNavClick('signup')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="border-t border-gray-200 pt-3 mt-3">
                {isLoggedIn ? (
                  <Button 
                    onClick={onLogout}
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Logout
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      onClick={() => handleNavClick('login')}
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Login
                    </Button>
                    <Button 
                      onClick={() => handleNavClick('signup')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};