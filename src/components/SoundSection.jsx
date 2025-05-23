import React from 'react';

const SoundSection = () => {
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h1 className="title">New Sound Stystem</h1>
          <p className="text">Feel the base</p>
          <span className="description">
            From $799 or $33.29/mo. for 34 mo. before trade-in.
          </span>
          <ul className="links">
            <li>
              <div className="button">Buy</div>
            </li>
            <li>
              <a className="link" href="#">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
