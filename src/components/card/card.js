import React from 'react';

// import classNames from 'classnames';
import Link from '@mui/material/Link';
import './card.css'

export function Card({ children, image, href }) {
  const card = (
    <div className={"card"}>
      {image && (
        <div className={"card-image"}>
          <img src={image.src} alt={image.alt} />
        </div>
      )}
      <div>{children}</div>
    </div>
  );

  if (!href) {
    return card;
  }

  return (
    <Link to={href} className="card-link">
      {card}
    </Link>
  );
}
