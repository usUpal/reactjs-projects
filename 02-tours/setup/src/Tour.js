import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  const readMoreHandler = () => {
    setReadMore(!readMore)
  }
  
  return(
    <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p onClick={readMoreHandler}> {readMore ? `${info} [read less]`: `${info.substring(0, 200)}... [read more]`} </p>
        
        <button className='delete-btn' onClick={()=> removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
