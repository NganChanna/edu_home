import AppLayout from "./apps/AppLayout"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Login, Register, NotFound, Bacii, Home, ContactUs, MyLibrary, Settings } from "./pages"
import ProtectedRoute from "./components/ProtectedRoute"

/**
 * Clear all browser localStorage entries and redirect the user to the login page.
 *
 * This function removes stored client-side data (localStorage) as part of logging out
 * and returns a React Router element that navigates to "/login".
 * @returns {JSX.Element} A React Router Navigate element that redirects to "/login".
 */
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

/**
 * Clear all browser localStorage entries and render the registration page.
 *
 * This component removes any stored client-side data (localStorage) and then
 * returns the Register page component so the user can create a new account.
 *
 * @returns {JSX.Element} The Register component element.
 */
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

/**
 * Render the application's routing configuration with public, protected, and catch-all routes.
 *
 * Renders public routes for login, register, and logout; nests protected routes inside a ProtectedRoute with AppLayout and Outlet; and provides a catch-all NotFound route.
 * @returns {JSX.Element} The React element tree for the application's routes.
 */
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