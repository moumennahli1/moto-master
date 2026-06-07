import React from 'react';
import './Collection.css';
import card1 from '../../assets/moto1.png';
import card2 from '../../assets/moto2.png';
import card3 from '../../assets/moto3.png';
import card4 from '../../assets/moto4.png';

const collectionCards = [
  { id: 1, name: 'Honda SH 150i', tag: 'City Elite', blurb: 'Elegant city comfort with premium finish.', price: 'From 45,999 DH', image: card1 },
  { id: 2, name: 'Yamaha FZ16', tag: 'Sport Line', blurb: 'Aggressive stance and refined power.', price: 'From 52,500 DH', image: card2 },
  { id: 3, name: 'Yamaha NMAX', tag: 'Urban Luxe', blurb: 'Smooth, stylish, and built for modern rides.', price: 'From 49,900 DH', image: card3 },
  { id: 4, name: 'Honda Dio Scooter', tag: 'Premium Pick', blurb: 'Compact design with an upscale appeal.', price: 'From 29,800 DH', image: card4 },
  { id: 5, name: 'Honda Dio Scooter', tag: 'Trending', blurb: 'A bold option for city cruising.', price: 'From 30,200 DH', image: card4 },
  { id: 6, name: 'Honda Dio Scooter', tag: 'Collector', blurb: 'Luxury finish and standout presence.', price: 'From 31,500 DH', image: card4 },
];

const Collection = () => {
  return (
    <div className="collection2">
      <div className="collection2-heading">
        <p className="collection2-eyebrow">Curated collection</p>
        <h2 className="collection2-title">Luxury rides, redesigned</h2>
      </div>
      <div className="cards2">
        {collectionCards.map((item) => (
          <article className="card2" key={item.id}>
            <div className="card2-top">
              <span className="card2-badge">{item.tag}</span>
              <span className="card2-price">{item.price}</span>
            </div>
            <img src={item.image} alt={item.name} />
            <div className="card2-body">
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
            </div>
            <button>Explore</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Collection;
