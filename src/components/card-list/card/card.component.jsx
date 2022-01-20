import React from "react";
import './card.styles.css'

export const Card = (props) => 

<div class = "card-container">
<img alt = 'monster' src={`https://robohash.org/${props.mon.id}?set=set5&size=200x200`}/>
<h2 >{props.mon.name} </h2>
<p >{props.mon.email} </p>
</div>;
