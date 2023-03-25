import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Authentication from './Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch((error) => console.error('Authentication failed', error));
    }
  }, []);

  return isLoggedIn ? (
    <Dashboard userUsername={userUsername} />
  ) : (
    <Authentication onLogin={() => setIsLoggedIn(true)} />
  );
};

export default App;
