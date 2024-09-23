import './App.css'
import AddServiceForm from './Components/AddServiceForm.jsx';
import ServiceList from "./Components/ServiceList.jsx";
import EditServiceForm from './Components/EditServiceForm.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<ServiceList />} />
      <Route path="/new-service" element={<AddServiceForm />} />
      <Route path="/edit-service/:id" element={<EditServiceForm />} />
    </Routes>
    </>
  )
}

export default App
