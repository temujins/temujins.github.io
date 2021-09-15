import React, { lazy, Suspense } from 'react';
import './scss/App.scss';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const ProjectSection = lazy(() => import('./components/ProjectSection/ProjectSection'));
const BottomBar = lazy(() => import('./components/BottomBar/BottomBar'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const MyServices = lazy(() => import('./components/MyServices/MyServices'));
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
    return (
        <div className="app">
            <Suspense fallback={<div>loading...</div>}>
                <Navbar />
                <Hero />
                <BottomBar />
                <ProjectSection />
                <AboutMe />
                <MyServices />
                <ContactSection />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
