import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === 'Admin' && password === '12345'){
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/profile');
    } else {
      setError("The username or password is incorrect");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:8}}>
            <label>Username</label><br/>
            <input className="input-text" value={username} onChange={e=>setUsername(e.target.value)} />
          </div>
          <div style={{marginBottom:8}}>
            <label>Password</label><br/>
            <input className="input-text" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          <div>
            <input className="input-submit" type="submit" value="Login" />
          </div>
          {error && <p style={{color:'red', marginTop:8}}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
