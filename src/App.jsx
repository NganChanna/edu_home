import AppLayout from "./apps/AppLayout"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Login, Register, NotFound, Bacii, Home, ContactUs, MyLibrary, Settings } from "./pages"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="/logout" element={<Logout />} />
      
      {/* Protected Routes with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/my-library" element={<MyLibrary />} />
        <Route path="/bacii" element={<Bacii />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App