import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Header } from './components/header-3';
import LandingPage from './components/public/LandingPage';
import PricingPage from './components/public/PricingPage';
import Sidebar from './components/device/Sidebar';
import HomePage from './components/device/HomePage';
import AnalyticsPage from './components/device/AnalyticsPage';
import Scedule from './components/Extreme/Scedule';
import Extreme from './components/Extreme/Extrem';
import DeviceAnalytics from './components/device/DeviceAnalytics';
import { ExcludedDevicesProvider } from './context/ExcludedDevicesContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './firebase-config';

// The Public Layout including the new Shadcn Header
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
}

// The Internal Protected Layout
function DashboardLayout() {
  return (
    <ExcludedDevicesProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-10 text-2xl font-bold bg-gray-100">
          <Outlet />
        </main>
      </div>
    </ExcludedDevicesProvider>
  );
}

function AppRouter() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-blue-700 text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes with Header */}
      {!user && (
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      )}

      {/* Protected Internal Routes Without Header */}
      {user && (
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          <Route path="/extreme" element={<ProtectedRoute><Extreme /></ProtectedRoute>} />
          <Route path="/scedule" element={<ProtectedRoute><Scedule /></ProtectedRoute>} />
          <Route path="/device/:deviceId" element={<ProtectedRoute><DeviceAnalytics /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute adminOnly><RegisterPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
