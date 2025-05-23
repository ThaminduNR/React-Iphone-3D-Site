import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';

const Jumbotron = () => {
  const handleScroll = () => {
    const element = document.querySelector('.sound-section');
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h1 className="title">New</h1>
      <img src={Iphone} alt="iPhone 14" className="logo" />
      <p className="text">Big and Bigger.</p>
      <span className="description">
        From $799 or $33.29/mo. for 34 mo. before trade-in.
      </span>
      <ul className="links">
        <li>
          <div className="button">Buy</div>
        </li>
        <li>
          <a className="link" onClick={handleScroll}>
            Learn more
          </a>
        </li>
      </ul>
      <img
        src={HoldingIphone}
        alt="iPhone 14 hand image"
        className="iphone-img"
      />
    </div>
  );
};

export default Jumbotron;
