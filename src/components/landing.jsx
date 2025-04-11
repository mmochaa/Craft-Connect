import React, { useEffect, useState } from 'react';
import '../styles/landing_styles.css';

const sheetUrl = 'https://docs.google.com/spreadsheets/d/1vs_d03-jsPByOhuX0f6AilppK1pTfztTvTlFWcoRbn0/gviz/tq?tqx=out:csv';

const Main = ({ onSignInClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(sheetUrl)
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.split('\n').slice(1); // Skip header row
        const newCards = rows.map(row => {
          const columns = row.split(',');
          return {
            imageUrl: columns[0]?.trim().replace(/\"/g, ''),
            title: columns[1]?.trim().replace(/\"/g, ''),
            size: columns[4]?.trim().replace(/\"/g, '').toLowerCase()
          };
        }).filter(card => card.imageUrl && card.imageUrl.startsWith('http'));

        setCards(newCards);
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
          <div className="login-btn" onClick={onSignInClick}>
            <p>Login/Create Account</p>
          </div>
        </div>
        <img className="accountimg" src="https://i.postimg.cc/PJYz112n/account.png" alt="Account Icon" />
      </div>

      <div className="pin_container">
        {cards.map((card, idx) => (
          <div key={idx} className={`card card_${card.size}`}>
            <a href="#">
              <img src={card.imageUrl} alt={card.title} />
            </a>
          </div>
        ))}
      </div>

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

export default Main;
