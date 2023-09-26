import React from "react";
import './Myimage.css'
const imagefile={
  name:"person",
  imgurl:"../images/person.jpeg"
}

function Myimage() {
  return (
    <div className="main-div">
      <div className="image-div">
        <div>{imagefile.name}</div>
        <div><img src={imagefile.imgurl} width="300px" height="400px"/></div>
        <div>lorem ipsum amet lorem ipsum ametlorem ipsum amet</div>

      </div>
    </div>
  );
}

export default Myimage;
