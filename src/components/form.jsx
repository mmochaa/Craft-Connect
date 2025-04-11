import { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [location, setLocation] = useState('');
  const [memberSince, setMemberSince] = useState('');
  const [interests, setInterests] = useState('');
  

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleAboutMeChange(e) {
    setAboutMe(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleMemberSinceChange(e) {
    setMemberSince(e.target.value);
  }
  function handleInterestsChange(e) {
    setInterests(e.target.value);
  }

  return (
    <>
      <h2>Welcome!</h2>
      <label>
        Username:{' '}
        <input
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        About Me:{' '}
        <input
          value={aboutMe}
          onChange={handleAboutMeChange}
        />
      </label>
      <label>
        Location:{' '}
        <input
          value={location}
          onChange={handleLocationChange}
        />
      </label>
      <label>
        Member Since:{' '}
        <input
          value={memberSince}
          onChange={handleMemberSinceChange}
        />
      </label>
      <label>
       Interests:{' '}
        <input
          value={interests}
          onChange={handleInterestsChange}
        />
      </label>

      <h4>Username:</h4>
      <p>{username}</p>
      <h4>About Me:</h4>
        <p>{aboutMe}</p>
        <h4>Location:</h4>
        <p>{location}</p>
        <h4>Member Since:</h4>
        <p>{memberSince}</p>
        <h4>Interests:</h4>
        <p>{interests}</p>


    </>
  );
}
