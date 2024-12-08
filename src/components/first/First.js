import React , { useEffect } from "react";
import "./First.css";

import Logo from "../../assests/Logo.jpeg";
import Probiotics from "../../assests/Probiotics.png";
import Vitamins from "../../assests/vitamin.png";
import WeightScale from "../../assests/scale.png";
import Foods from "../../assests/functional-foods.png";

import Flask from "../../assests/flask.png";
import Leaf from "../../assests/leaves.png";
import Flag from "../../assests/united-kingdom.png";
import Cart from "../../assests/push-cart.png";
import Box from "../../assests/commercial.png";
import CircleLeaf from "../../assests/biodegradable.png";

import Splitting from 'splitting';
import 'splitting/dist/splitting.css'; 

const First = () =>{

  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className="first_container">
      <div className="logo">
        <img src={Logo} alt="ELBRIT" />
      </div>
      <div className="card_1">
        <h1 className="card_1_title" data-splitting>Essential <span className="whitespace"></span>Vitamins</h1>
        <div className="card_1_content">
          <div className="text">
            <h2>Online Medical Supplies</h2>
            <h3>
              Get Your Vitamins <span>&</span> Minerals
            </h3>
            <button className="explore-button">EXPLORE</button>
          </div>
          <div className="card_1_image" >
            <img src={Probiotics} alt="Probiotics" />
          </div>
          <div className="card_1_aside">
            <div className="card_1_aside_item">
              <div className="card_1_aside_icon">
                <img src={Vitamins} alt="Vitamins" className="card_1_Icons" />
              </div>
              <div className="card_1_aside_text">
                <h4>Vitamins</h4>
                <p>Increased Vitamins and minerals in your diet</p>
              </div>
            </div>
            <div className="card_1_aside_item">
              <div className="card_1_aside_icon">
                <img
                  src={WeightScale}
                  alt="WeightScale"
                  className="card_1_Icons"
                />
              </div>
              <div className="card_1_aside_text">
                <h4>Weight Loss</h4>
                <p>Find scientifically proven solutions</p>
              </div>
            </div>
            <div className="card_1_aside_item">
              <div className="card_1_aside_icon">
                <img src={Foods} alt="Foods" className="card_1_Icons" />
              </div>
              <div className="card_1_aside_text">
                <h4>Functional Foods</h4>
                <p>From protein powers to baby formula</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_2">
        <div className="card_2_content_first_1">
          <div className="card_2_content_icon">
            <img src={Flask} alt="Leaves" className="card_2_Icons" />
          </div>
          <h3>Clinically Studied</h3>
          <p>All products that we offer have undergone lab and safety tests</p>
        </div>
        <div className="card_2_content_first">
          <div className="card_2_content_icon">
            <img src={Leaf} alt="Leaves" className="card_2_Icons"/>
          </div>
          <h3>Vegetarian Friendly</h3>
          <p>
            We have a wide selection of vegetarian products to meet your needs
          </p>
        </div>
        <div className="card_2_content_first">
          <div className="card_2_content_icon">
            <img src={Flag} alt="Leaves" className="card_2_Icons"/>
          </div>
          <h3>Made In India</h3>
          <p>Shop local and explore health products made right here in India</p>
        </div>
        <div className="card_2_content">
          <div className="card_2_content_icon">
            <img src={Cart} alt="Leaves" className="card_2_Icons" />
          </div>
          <h3>Free Shipping</h3>
          <p>We deliver to your door with no shipping costs on your orders</p>
        </div>
        <div className="card_2_content">
          <div className="card_2_content_icon">
            <img src={Box} alt="Leaves" className="card_2_Icons"/>
          </div>
          <h3>No Risk</h3>
          <p>
            We ensure that all products are safe and within their use-by date
          </p>
        </div>
        <div className="card_2_content">
          <div className="card_2_content_icon">
            <img src={CircleLeaf} alt="Leaves" className="card_2_Icons" />
          </div>
          <h3>GMO Free</h3>
          <p>
            Natural, no modified products and derivatives for those who need it
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
