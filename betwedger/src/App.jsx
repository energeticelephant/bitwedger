import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import ResponsiveAppBar from './components/AppBar.jsx'

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <section id="home">
        <h1>Home Section</h1>
        <p>Welcome to the home section.</p>
      </section>
      <section id="games">
        <h1>Check Out Our Upcoming Games</h1>
        <p>Here are some games.</p>
      </section>
      <section id="aboutus">
        <h1>About Us Section</h1>
        <p>Learn more about us here.</p>
      </section>
    </div>
  );
}

export default App;
