import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, audio, title, img, desc, number } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <input id={number} type="checkbox" />
                <label for={number}>❤</label>
              </header>
              <hr />
              <br />
              <audio controls autoplay preload='none'>
                    <source src={audio} type="audio/ogg" />
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;