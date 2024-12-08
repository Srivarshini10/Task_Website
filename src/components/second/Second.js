import React ,{useState} from "react";
import "./Second.css";

import Image1 from "../../assests/second-img1.jpg";
import Image2 from "../../assests/second-img2.jpg";
import Image3 from "../../assests/second-img3.jpg";
import Image4 from "../../assests/second-img4.jpg";
import Image5 from "../../assests/second-img5.jpg";
import Image6 from "../../assests/second-img6.jpg";

const Second = () => {

  const [animate, setAnimate] = useState(false);

  return (
    <div
      className={`second_container ${animate ? "animate" : ""}`}
      onMouseEnter={() => setAnimate(true)}
    >
      <div className="second_container_grid">
        <div className="second_container_grid_content">
          <h4 className="second_container_head">Ingredients</h4>
          <h2 className="second_container_heading">Better Ingredients</h2>
          <p className="second_container_subheading">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>

        <div className="second_container_grid_card_1">
          <img
            src={Image1}
            alt="Image1"
            className="second_container_grid_card_img"
          />
          <div className="second_container_grid_card_h">Vitamin C</div>
          <div className="second_container_grid_card_p">
            Vitamin C as ascorbic acid
          </div>
          <div className="second_container_grid_card_btn">SEE MORE</div>
        </div>

        <div className="second_container_grid_card_2">
          <img
            src={Image2}
            alt="Image2"
            className="second_container_grid_card_img"
          />
          <div className="second_container_grid_card_h">Vitamin B3</div>
          <div className="second_container_grid_card_p">
            Niacin for healthy gut and skin
          </div>
          <div className="second_container_grid_card_btn">SEE MORE</div>
        </div>

        <div className="second_container_grid_card_3">
          <img
            src={Image3}
            alt="Image3"
            className="second_container_grid_card_img"
          />
          <div className="second_container_grid_card_h">Magnesium</div>
          <div className="second_container_grid_card_p">
            Boost energy and support muscle function
          </div>
          <div className="second_container_grid_card_btn">SEE MORE</div>
        </div>

        <div className="second_container_grid_card_4">
          <img
            src={Image4}
            alt="Image4"
            className="second_container_grid_card_img"
          />
          <div className="second_container_grid_card_h">Hyaluronic Acid</div>
          <div className="second_container_grid_card_p">
            For smooth, supple and soft skin!
          </div>
          <div className="second_container_grid_card_btn">SEE MORE</div>
        </div>

        <div className="second_container_grid_card_5">
          <img
            src={Image5}
            alt="Image5"
            className="second_container_grid_card_img"
          />
          <div className="second_container_grid_card_h">Lactobacillus</div>
          <div className="second_container_grid_card_p">
            Invigorate your gut microbiome
          </div>
          <div className="second_container_grid_card_btn">SEE MORE</div>
        </div>

        <div className="second_container_grid_card_6">
          <img
            src={Image6}
            alt="Image6"
            className="second_container_grid_card_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
