import { useState } from 'react'
import Login from "./login.jsx"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Form from "./form.jsx";
import SignIn from "./signIn";




function App() {

  return (
    <BrowserRouter>
    <h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Form" element={<Form/>} />
          <Route path="SignIn" element={<SignIn/>} />
        </Route>
      </Routes>
      </h1>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
