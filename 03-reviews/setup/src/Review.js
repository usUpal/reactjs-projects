import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {id, name, job, image, text} = people[index]
  const checkNumber = (num) =>{
    if(num > people.length - 1){
      return 0
    }
    if(num < 0)
    { 
      return people.length -1 
    }
    return num;

  }
  const prevPerson = ()=>{
      setIndex(index=>{
        let newIndex = index -1;
        return checkNumber(newIndex);
      })
  }
  const nextPerson = ()=>{
    setIndex(index=>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  const randomPerson = ()=>{
    setIndex(index=>{
      let newIndex = Math.floor(Math.random()*people.length);
      return newIndex;
    })
    console.log(Math.floor(Math.random()*people.length));
  }

  return(
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon"> 
          <FaQuoteRight/> 
          </span>
        </div>
        <h4 className="author"> {name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
            Surprise Me
          </button>

      </article>
    );
};

export default Review;
