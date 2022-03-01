import React from 'react';
import '../styles/Main.css';
import Tasks from './Tasks';

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="task-container">
          <Tasks />
        </div>
      </div>
    </main>
  );
};
export default Main;
