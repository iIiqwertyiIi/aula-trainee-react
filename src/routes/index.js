import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import StudentsPage from "../pages/Students"
import DisciplinesPage from "../pages/Disciplines"
import LoginPage from "../pages/Login"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/estudantes" element={<StudentsPage/>}/>
            <Route path="/turmas" element={<DisciplinesPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}

export default MyRoutes