import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
<header style={headerStyle}>
    <h1>To Do List</h1>    
    <Link to="/">Home</Link> | <Link to="/about"about>About</Link>
</header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
