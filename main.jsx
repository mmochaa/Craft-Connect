import React, { useEffect } from 'react';
import './main_styles.css';

const sheetUrl = 'https://docs.google.com/spreadsheets/d/1vs_d03-jsPByOhuX0f6AilppK1pTfztTvTlFWcoRbn0/gviz/tq?tqx=out:csv';

const App = () => {
  useEffect(() => {
    console.log('Script is running'); // Check if the script is running
    fetch(sheetUrl)
      .then(response => response.text())
      .then(csvText => {
        console.log(csvText); // Check the fetched data
        const rows = csvText.split('\n').slice(1); // Skip header row
        const pinContainer = document.querySelector('.pin_container');
        rows.forEach(row => {
          const columns = row.split(',');
          const imageUrl = columns[0]?.trim().replace(/\"/g, '');
          const title = columns[1]?.trim().replace(/\"/g, '');
          const size = columns[4]?.trim().replace(/\"/g, '').toLowerCase(); // Get the size and convert to lowercase
          if (imageUrl && imageUrl.startsWith('http')) {
            const card = document.createElement('div');
            card.className = `card card_${size}`; // Apply size class dynamically
            card.innerHTML = `
              <a href="#">
                <img src="${imageUrl}" alt="${title}">
              </a>
            `;
            pinContainer.appendChild(card);
          }
        });
      })
      .catch(error => {
        console.error('Error loading Google Sheet data:', error);
      });
  }, []);

  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-content">
          <form className="filter-container">
            <div className="filter">
              <span className="filter-icon material-symbols-outlined">menu</span>
              <input className="filter-input" type="search" placeholder="Filter Tags" />
            </div>
          </form>
          <div className="login-btn">
            <p>Login/Create Account</p>
          </div>
        </div>
        <img className="accountimg" src="https://i.postimg.cc/PJYz112n/account.png" alt="Account Icon" />
      </div>
      <div className="pin_container"></div>
      <nav>
        <div className="nav-icons">
          <span className="material-symbols-outlined">home</span>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">upload_2</span>
          <span className="material-symbols-outlined">handshake</span>
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
