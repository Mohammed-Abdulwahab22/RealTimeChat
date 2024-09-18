import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import { RegisterForm } from './components/RegisterForm';
import { Home } from './components/Home';
import NotFound from './components/NotFound';
import { ChatWindow } from './components/ChatWindow';

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<AuthForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path='/ChatWindow' element={<ChatWindow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
