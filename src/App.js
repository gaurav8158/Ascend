import React from 'react';
import TaskBoard from './TaskBoard';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className='main-nav'>
        <h3 className='welcome'>Welcome User</h3>
        <p>Logout</p>
      </nav>
      <TaskBoard />
    </div>
  );
};

export default App;
