import React from 'react';
import Link from '@mui/material/Link';
import './header.css'


export function Header() {

  return (
    <header className="header">
      <h1>
        <Link className="link" underline="none" href="/">Podcaster</Link>
      </h1>
      {/* {loadingIcon} */}
    </header>
  );
}
