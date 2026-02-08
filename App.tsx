
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VehiclesPage from './pages/VehiclesPage';
import BrandsPage from './pages/BrandsPage';
import ReviewsPage from './pages/ReviewsPage';
import CalculatorPage from './pages/CalculatorPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

export type Page = 'home' | 'vehicles' | 'brands' | 'reviews' | 'calculator' | 'service' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'vehicles': return <VehiclesPage onNavigate={setCurrentPage} />;
      case 'brands': return <BrandsPage />;
      case 'reviews': return <ReviewsPage />;
      case 'calculator': return <CalculatorPage />;
      case 'service': return <ServicePage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-black text-slate-100 flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;