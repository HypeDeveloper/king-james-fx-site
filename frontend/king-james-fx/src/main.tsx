import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import './style/App.css'
import './style/Form.css'
import "./style/Dashboard.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index path="/" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
  );
}