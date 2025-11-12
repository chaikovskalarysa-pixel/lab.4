import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/news' element={<News />} />
          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='*' element={
            <div>
              <h2>Page not found</h2>
              <p><Link to="/">Back to Home</Link></p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
