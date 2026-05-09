import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import IndustriesPage from "./pages/Industries";
import AboutPage from "./pages/AboutUs";
import ScrollToTopButton from "./components/Common/ScrollToTopButton";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.35 },
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={pageTransition.initial}
    animate={pageTransition.animate}
    exit={pageTransition.exit}
    transition={pageTransition.transition}
  >
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <ServicesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/industries"
          element={
            <PageWrapper>
              <IndustriesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppShell = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      {!isAdminRoute ? <Navbar /> : null}
      <AnimatedRoutes />
      {!isAdminRoute ? <Footer /> : null}
      {!isAdminRoute ? <ScrollToTopButton /> : null}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
