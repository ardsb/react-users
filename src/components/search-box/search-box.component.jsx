import React, { Component } from "react";
import './search-box.styles.css'


export const SearchBox = ({placeholder, handlechange}) =>(
    <input

    class="search"
    type="search"
    placeholder={placeholder}
    onChange={handlechange}
  />
)