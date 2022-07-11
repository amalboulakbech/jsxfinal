import React from 'react'
import "./Address.css";


const Address = () => {
    let infos = {
      Adress: "SOMETHING AMAZING IS HAPPENING ",
    };


  return (
      <div>
          <h2 className='adrs'>{infos.Adress}</h2> 
    </div>
  )
}
export default Address