import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Match from '@/pages/Match';
import Profile from '@/pages/Profile';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from '@/pages/Dashboard';
import Community from '@/pages/Community';
import FAQ from '@/pages/FAQ';

const noChromeRoutes = ['/login', '/signup'];

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const hideChrome = noChromeRoutes.includes(pathname);

  useEffect(() => {
    document.body.style.overflow = hideChrome ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [hideChrome]);

  if (hideChrome) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/match" element={<Match />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
