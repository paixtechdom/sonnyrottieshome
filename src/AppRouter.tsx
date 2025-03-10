import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import AvailablePuppies from './pages/AvailablePuppies/page';

const Navbar = lazy(() => import('./assets/components/Navbar'))
const Footer = lazy(() => import('./assets/components/Footer'))
const HomePage = lazy(() => import("./pages/home/page"))
const ContactPage = lazy(() => import("./pages/contact/page"))



export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<FallbackComponent />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/available-puppies" element={<AvailablePuppies />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };


  const FallbackComponent = () => {
    return(
        <section className='center flex-col gap-2 h-screen w-full bg-bg'>
            <strong className='font-bold text-2xl text-center text-primary'>
            Sony Rotties Home
            </strong>
        </section>
    )
  }