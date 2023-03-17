import React from "react";
import user from '../images/user.png'

const CardContact = (props) =>{
    const { id, name, email } = props.contact;
   return(
    <div className="item " key={id}>
    
       <div className="ui tiny image">
        <img src={ user } alt="user" className="ui avatar image" />
        </div>
        <div className="middle aligned content">
      <div className="header">{ name }</div>
      <div className="emailcontact">{ email}</div>
      
      </div>
      <div class="extra rem_item"> 
        <div class="ui right floated">
                <i className="alternate outline icon trash" style={{color:"red", MarginTop: "10px" }}
            onClick={ ()=> props.clickHandler(id)}
            ></i>
        </div>
      </div>
  </div> 

   );

}

export default CardContact; 