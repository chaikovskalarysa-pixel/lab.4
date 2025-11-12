import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };
  return (
    <header style={{padding:'8px 0'}}>
      <div className="container nav">
        <h2 style={{marginRight:20}}> React</h2>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/profile">Profile</Link>
        <div style={{marginLeft:'auto'}}>
          {isAuth ? <button onClick={logout}>Exit</button> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </header>
  );
}
