import React from "react";
import "./Companys.css";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";


const Companys = () => {
  return (
    <div className="companys">
      <div class="cards">
        <div class="cardtwo red">
          <img src={company1} alt="" />
        </div>
        <div class="cardtwo blue">
          <img src={company2} alt="" />
        </div>
        <div class="cardtwo green">
          <img src={company3} alt="" />
        </div>
        <div class="cardtwo green">
          <img src={company4} alt="" />
        </div>
      </div>
      <div aria-hidden className="cards">
        <div class="cardtwo red">
          <img src={company1} alt="" />
        </div>
        <div class="cardtwo blue">
          <img src={company2} alt="" />
        </div>
        <div class="cardtwo green">
          <img src={company3} alt="" />
        </div>
        <div class="cardtwo green">
          <img src={company4} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Companys;
