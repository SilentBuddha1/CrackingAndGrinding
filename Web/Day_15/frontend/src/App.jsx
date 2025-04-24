import React from 'react';
import NoticeForm from './components/NoticeForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Notice Management System</h1>
      </header>
      <main>
        <NoticeForm />
      </main>
    </div>
  );
}

export default App;
