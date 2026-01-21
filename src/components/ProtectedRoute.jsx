import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { ACCESS_TOKEN } from "../constants/constants"
import { useEffect, useState } from "react"

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null)

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    if (!token) {
      setIsAuthorized(false)
      return
    }

    try {
      const decoded = jwtDecode(token)
      const tokenExpiration = decoded.exp
      const now = Date.now() / 1000

      if (tokenExpiration < now) {
        localStorage.removeItem(ACCESS_TOKEN);
        setIsAuthorized(false)
      } else {
        setIsAuthorized(true)
      }
    } catch (err) {
      console.log(err)
      localStorage.removeItem(ACCESS_TOKEN);
      setIsAuthorized(false)
    }
  }

  useEffect(() => {
    auth()
  }, [])

  if (isAuthorized === null) return <div>Loading...</div>

  return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute
