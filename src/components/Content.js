import React, { useEffect, useState } from "react";
import Flexible from "../assets/100Flexible.svg";
import convenienceFee from "../assets/convenienceFee.svg";
import creditPerMonth from "../assets/creditPerMonth.svg";
import discountOnFoodAndBeverages from "../assets/discountOnFoodAndBeverages.svg";
import MMRPerks from "../assets/MMRPerks.svg";
import "./Content.css";
import "./Fonts.css";
import Button from "react-bootstrap/Button";
import Follow from '../assets/rolloverOfUnusedCredits.svg';
const Content = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the value based on when you want the effect to kick in
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="text-description">
        <h1>Reel Deal Monthly Movies</h1>
        <p className="light-text text-center">
          Your flexible monthly membership to the latest movies
        </p>
        <div className="divider"></div>
        <div className="mvp-subscription-content">
        <h3>What is MVP Subscription?</h3>
        <ul className="text-description-list">
          <li className="light-text-list">
            MVP Subscription provides the member 1 movie credit per month
          </li>
          <li className="light-text-list">
            They can avail it at any Marcus theater or Movie Tavern
          </li>
          <li className="light-text-list">
            Members earn 100 points and get a $5 reward redeemable on food and
            beverages + many more benefits
          </li>
        </ul>
</div>
        <div className={`button-group ${isScrolled ? 'scrolled' : ''}`}>
          <Button variant="danger" className="btn-lg">
            Get Started
          </Button>
          <h4 className="light-text text-center">Learn More</h4>
        </div>
      </div>

      <div className="card-row">
        <div className="col-md-4">
          <div className="text-center card">
            <img
              src={creditPerMonth}
              alt="credit per month"
              className="card-img-top"
            />
            <h3 className="medium-text text-center">1 credit per month</h3>
            <h3 className="light-text text-center">
              One 2D standard Movie per month
            </h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center card">
            <img src={Follow} alt="MMR perks" className="card-img-top" />
            <h3 className="medium-text text-center">
              Follow rollover of unused Credits
            </h3>
            <h3 className="light-text text-center"> unused credits will be combined the followed month</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center card">
            <img src={MMRPerks} alt="MMR perks" className="card-img-top" />
            <h3 className="medium-text text-center">
              All MMR perks included
            </h3>
            <h3 className="light-text text-center"> + benefits</h3>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="text-center card">
            <img src={Flexible} alt="flexible" className="card-img-top" />
            <h3 className="medium-text text-center">100% flexible</h3>
            <h3 className="light-text text-center">Cancel anytime</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center card">
            <img
              src={discountOnFoodAndBeverages}
              alt="discount on food and beverages"
              className="card-img-top"
            />
            <h3 className="medium-text text-center">
              20% discount on all Food and Beverages
            </h3>
            <h3 className="light-text text-center">Excluding alcohol</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center card">
            <img
              src={convenienceFee}
              alt="convenience fee"
              className="card-img-top"
            />
            <h3 className="medium-text text-center">0 convenience fees</h3>
            <h3 className="light-text text-center">
              One 2D standard Movie per month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
