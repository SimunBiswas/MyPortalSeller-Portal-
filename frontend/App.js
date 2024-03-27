import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
  <div class="profile-section">
    <h2>Manage Profile</h2>
    <p>Your account is ACTIVE </p>
    <ul class="profile-menu">
      <li align="center">
        <a href="#">
          &#128100;
          <span class="bold-text">Account</span> <br/>
          <span class="detail"> View your display information, pickup address, logic detail and primary details</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          👤
          <span class="bold-text">Account Manager</span> <br/>
          <span class="detail">View your account manager details</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          💰
          <span class="bold-text">Bank Detail</span> <br/>
          <span class="detail">View your bank details</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          🏢
          <span class="bold-text">Business Detail</span> <br/>
          <span class="detail">View your business details and KYC documents</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          ⚙️
          <span class="bold-text">Settings</span> <br/>
          <span class="detail">Manage your working hours, Holiday list and FBF settings</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          📅
          <span class="bold-text">Calendar</span> <br/>
          <span class="detail">View your working hours, Holiday list and vacation plans</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          ⏳
          <span class="bold-text">Manage Sessions</span> <br/>
          <span class="detail">Manage your sessions, view IP Address and delete sessions.</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          👨‍💻
          <span class="bold-text">Developer Access</span> <br/>
          <span class="detail">Manage the Developer access to your seller portal</span>
        </a>
      </li>
      <li align="center">
        <a href="#">
          &#128273; 
          <br/>
          <span class="detail"> Privacy - Terms</span>
        </a>
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default App;
