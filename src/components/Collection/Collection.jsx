import React from 'react';
import './Collection.css';
import card1 from '../../assets/moto1.png';
import card2 from '../../assets/moto2.png';
import card3 from '../../assets/moto3.png';
import card4 from '../../assets/moto4.png';



const Collection = () => {
  return (
    <div className="collection2">
      <div className="cards2">
        <div className="card2">
          <img src={card1} alt="Card 1" />
          <h3>Honda SH 150i</h3>
          <button>Browse</button>
        </div>
        <div className="card2">
          <img src={card2} alt="Card 2" />
          <h3>Yamaha FZ16</h3>
          <button>Browse</button>
        </div>
        <div className="card2">
          <img src={card3} alt="Card 3" />
          <h3>Yamaha NMAX</h3>
          <button>Browse</button>
        </div>
        <div className="card2">
          <img src={card4} alt="Card 4" />
          <h3> Honda Dio Scooter</h3>
          <button>Browse</button>
        </div>
        <div className="card2">
          <img src={card4} alt="Card 4" />
          <h3> Honda Dio Scooter</h3>
          <button>Browse</button>
        </div>
        <div className="card2">
          <img src={card4} alt="Card 4" />
          <h3> Honda Dio Scooter</h3>
          <button>Browse</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;