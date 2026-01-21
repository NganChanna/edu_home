import AppLayout from "./apps/AppLayout"
import { Routes, Route } from "react-router-dom"
import{ Bacii, Home, ContactUs, MyLibrary, Settings} from "./pages"
function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-library" element={<MyLibrary/>}/>
        <Route path="/bacii" element={<Bacii/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </AppLayout>

  )
}

export default App