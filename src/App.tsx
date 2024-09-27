import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (pwd: string) => {
    let strengthLevel = 'Weak';
    if (pwd.length >= 8) {
      if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd) && /\W/.test(pwd)) {
        strengthLevel = 'Strong';
      } else if ((/[A-Z]/.test(pwd) || /[a-z]/.test(pwd)) && /\d/.test(pwd)) {
        strengthLevel = 'Moderate';
      }
    }
    return strengthLevel;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = event.target.value;
    setPassword(pwd);
    setStrength(checkPasswordStrength(pwd));
  };

  return (
    <>
      <div className="container">
        <h1>Password Complexity Checker</h1>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <div className={`strength-indicator ${strength}`}>
          Password Strength: {strength || 'Not Entered'}
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: strength === 'Strong' ? '100%' : strength === 'Moderate' ? '60%' : strength === 'Weak' ? '30%' : '0%',
              backgroundColor: strength === 'Strong' ? 'green' : strength === 'Moderate' ? 'orange' : 'red',
            }}
          />
        </div>
      </div>
      <footer>© All rights reserved - Dimakatso Matlaila - 2024</footer>
    </>
  );
};
export default App;
