import React from 'react';
import './app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">

        <deckgo-qrcode content="https://reactjs.org">
        </deckgo-qrcode>

      </header>
    </div>
  );
}

export default App;