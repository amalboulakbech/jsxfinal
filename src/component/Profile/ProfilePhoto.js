import React from 'react'
import image from "../../assets/272121052_1285088171978858_7154317731408115518_n.jpg";
import "./ProfilePhoto.css"
import FullName from './FullName';
import Address from './Address';

const ProfilePhoto = () => {
  return (
    <div classname="App">
     
      <img src={image}  style={{width:"650px" , height:"250px", paddingLeft:"30px"}} />
    </div>
  );
}

export default ProfilePhoto