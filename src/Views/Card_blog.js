import React from 'react';
import '../Sheets/Card_blog.scss';
import Blog1_img from '../images/blog1.jpg';
import Blog2_img from '../images/blog2.jpg';
import Blog3_img from '../images/blog3.jpg';

import { Link } from 'react-router-dom';

export default function Card_blog() {
  return (
    <div className='card_blog'>
      <div className="card_blog-container">
        <div className="card_blog-card">
          <figure className="card_blog-card__thumb">
            <img
              src={Blog1_img}
              alt="Picture by Kyle Cottrell"
              className="card_blog-card__image"
            />
            <figcaption className="card_blog-card__caption">
              <h2 className="card_blog-card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
              <p className="card_blog-card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
              <nav><Link to="/page1" className="card_blog-card__button">Read more</Link></nav>
            </figcaption>
          </figure>
        </div>

        <div className="card_blog-card">
          <figure className="card_blog-card__thumb">
            <img
              src={Blog2_img}
              alt="Picture by Nathan Dumlao"
              className="card_blog-card__image"
            />
            <figcaption className="card_blog-card__caption">
              <h2 className="card_blog-card__title">Nyanda Artwork Popped Up in Glasgow</h2>
              <p className="card_blog-card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
              <nav><Link to="/page2" className="card_blog-card__button">Read more</Link></nav>
            </figcaption>
          </figure>
        </div>

        <div className="card_blog-card">
          <figure className="card_blog-card__thumb">
            <img
              src={Blog3_img}
              alt="Picture by Daniel Lincoln"
              className="card_blog-card__image"
            />
            <figcaption className="card_blog-card__caption">
              <h2 className="card_blog-card__title">Banksy-Inspired Artwork Popped Up in Glasgow</h2>
              <p className="card_blog-card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
              <nav><Link to="/page3" className="card_blog-card__button">Read more</Link></nav>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
