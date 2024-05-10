import React, { useEffect, useState } from 'react';

export const PlaceCard = ({ image, name, location, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {    
    document.title = isFavorite ? `★ ${name}` : name;
  }, [isFavorite])

  return (
    <li className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={image}
              alt={`${name} in ${location}`}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="is-size-1 has-text-warning" onClick={() => setIsFavorite((prevState) => !prevState)}>
                {isFavorite ? '★' : '☆'}
              </div>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{location}</p>
            </div>
          </div>
          <div className="content">
            {description}
          </div>
        </div>
      </div>
    </li>
  );
}
