import React, { Component } from "react";
import './card-list.styles.css'
import { Card } from "./card/card.component";

export const CardList = (props) => {
  
  return<div class = 'card-list'> 
  
  {props.Monsters.map((mon) => (
          <Card key={mon.id} mon = {mon}/> 
        ))} 

   </div>;
};
