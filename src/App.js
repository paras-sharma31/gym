import "./App.css";
import Addlist from "./components/AddList/addlist.tsx";
import Navbar from "./components/Header/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/MultipleForm/form.tsx";
import Home from "./components/Home/Home.tsx";
import SignleExercises from "./components/Exercise/exercise.tsx";
import Login from "./components/auth/login.tsx";
import { Checkbox } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="exercise/:id" element={<SignleExercises />} />
          <Route path="form" element={<Form />} />
          <Route path="join-online" element={<Addlist />} />
          <Route path="checkbox" element={<Checkbox />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
