import React, { useState } from 'react';
import SignIn from './components/SignIn';    // Adjust path if needed
import Landing from './components/Landing';  // This was Main.jsx

function App() {
  const [currentForm, setCurrent] = useState('main'); // 'main' or 'login'

  return (
    <>
      {currentForm === 'login' ? (
        <SignIn onFormSwitch={() => setCurrent('main')} />
      ) : (
        <Landing onSignInClick={() => setCurrent('login')} />
      )}
    </>
  );
}

export default App;
