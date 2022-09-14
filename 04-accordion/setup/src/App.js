import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [ques, setQues] = useState(data);
  return(
    <main>
      <dev className="container">
        <h3 className='title'>Ques and Ans about Login</h3>
        <section className="info">
          {ques.map(q=>{
            return(
              <SingleQuestion key={q.id} {...q}/>
            )
          })}
        </section>

      </dev>
    </main>
  )
}

export default App;
