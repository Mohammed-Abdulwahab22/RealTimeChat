import { Routes, Route } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import { RegisterForm } from './components/RegisterForm';
import { Home } from './components/Home';
import NotFound from './components/NotFound';
import { ChatWindow } from './components/ChatWindow';
import { ProfilePage } from './components/ProfilePage';
import { Settings } from './components/Settings';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<AuthForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/ChatWindow" element={
          <ProtectedRoute>
            <ChatWindow />
          </ProtectedRoute>
        } />
        <Route path="/ProfilePage" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/Settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
