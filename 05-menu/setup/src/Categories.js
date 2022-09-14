import React from 'react';

const Categories = ({filterCategories,  filterItems})=>{
  return(
    <div className='btn-container'>
      
        {filterCategories.map((category, idx)=>{
          return(
            <button 
                className='filter-btn'
                type='button'
                key={idx}
                onClick={()=>filterItems(category)}
            >
              {category}
            </button>
          )
        })
      }

    </div>
  )
}

export default Categories;
