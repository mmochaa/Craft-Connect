import React, { useState } from 'react';
import SignIn from './components/signIn';    // Adjust path if needed
import Landing from './components/landing';  // This was Main.jsx

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
