import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import './style/App.css'
import './style/Form.css'
import "./style/Dashboard.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Index } from './pages/Home'
import { About, Support} from './pages/Others'
import PageNotFound from './pages/404'
import './style/Home.css'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} >
                  <Route index element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/support" element={<Support/>}/>
              </Route>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
  );
}