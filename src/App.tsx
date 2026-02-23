import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Homepage } from './components/Homepage';
import { StudentDashboard } from './components/StudentDashboard';
import { LessonPage } from './components/LessonPage';
import { QuizPage } from './components/QuizPage';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { ForgotPasswordPage } from './components/auth/ForgotPasswordPage';
import { AdminPanel } from './components/admin/AdminPanel';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('student'); // student or admin

  const handleLogin = (type: string = 'student') => {
    console.log('Login attempted with type:', type); // Debug log
    setIsLoggedIn(true);
    setUserType(type);
    const targetPage = type === 'admin' ? 'admin' : 'dashboard';
    console.log('Setting current page to:', targetPage); // Debug log
    setCurrentPage(targetPage);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('student');
    setCurrentPage('home');
  };

  const renderPage = () => {
    console.log('Rendering page:', currentPage, 'UserType:', userType); // Debug log
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <StudentDashboard onNavigate={setCurrentPage} />;
      case 'lessons':
        return <LessonPage onNavigate={setCurrentPage} />;
      case 'quizzes':
        return <QuizPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminPanel onNavigate={setCurrentPage} onLogout={handleLogout} />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Only show Navbar for students or non-logged in users */}
      {userType !== 'admin' && (
        <Navbar 
          onNavigate={setCurrentPage} 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout}
          userType={userType}
        />
      )}
      {renderPage()}
      <Toaster />
    </div>
  );
}