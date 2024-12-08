import React ,{useState} from "react";
import "./Third.css";

import Gummies from "../../assests/Jellybee_Gummies.jpg";
import Pills from "../../assests/pills.jpg";

const Third = () => {

  const [animate, setAnimate] = useState(false);

  return (
    <div
      className={`blog-container ${animate ? "animate" : ""}`}
      onMouseEnter={() => setAnimate(true)}
    >
      <div className="blog-header">
        <h2>OUR BLOG</h2>
        <h1>Latest News</h1>
      </div>
      <div className="blog-grid">
        <div className="blog-card-1">
          <div className="blog-date">20 APR</div>
          <img src={Gummies} alt={Gummies} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-2">
          <div className="blog-date">20 APR</div>
          <img src={Gummies} alt={Gummies} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-3">
          <div className="blog-date">20 APR</div>
          <img src={Gummies} alt={Gummies} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-4">
          <div className="blog-date">20 APR</div>
          <img src={Gummies} alt={Gummies} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-5">
          <div className="blog-date">20 APR</div>
          <img src={Pills} alt={Pills} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-6">
          <div className="blog-date">20 APR</div>
          <img src={Pills} alt={Pills} className="blog-image" />
          <div className="blog-title">
            Hac hendrerit mus nons semper suspendisse
          </div>
        </div>
        <div className="blog-card-7">
          <div className="blog-date">20 APR</div>
          <img src={Pills} alt={Pills} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
        <div className="blog-card-8">
          <div className="blog-date">20 APR</div>
          <img src={Pills} alt={Pills} className="blog-image" />
          <div className="blog-title">
            The Covid-19 Epidemic In 2022 Is Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
