import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="cyber-grid fixed inset-0 opacity-30" />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;