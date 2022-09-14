import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

function App() {
  const filterCategories  = ['all', ... new Set(items.map(item=>item.category))]
  const [menuItems, setItems] = useState(items)
  const [catagories, setCatagories]= useState([filterCategories])

  

  const filterItems = (category)=>{
    if (category==='all'){
      setItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category ===category);
    setItems(newItems);
  };  
  return  (
    <main>
      <section className='menu section'>
           <div  className='title'>
                      <h2> Our Menu</h2>
                      <div className='underline'></div> 
           </div>
           <Categories filterCategories={filterCategories}  filterItems={filterItems} />
           <Menu items={menuItems}/>
      </section>
    </main>
  )
  }
export default App;
