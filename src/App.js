import React,{useEffect, useState} from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate'

import "./style.css";

const App =() => {

  let [responseData, setResponseData] = useState({
      offset: 0,
      data: [],
      elements: [],
      perPage: 10,
      currentPage: 0
  })
  
  const API = 'https://jsonplaceholder.typicode.com/photos';

  
   function getData() {
      try {
        axios.get(API)
              .then((response) => {
                // setResponseData({
                //   data: response.data,
                //   pageCount: Math.ceil(response.data.length / this.state.perPage)
                // })
                  console.log(response.data.length)
              })
        
      } catch (error) {
        console.error(error);
      }
    }
   getData();
   // console.log(responseData);


  return (

    <div>
        <span>Hello</span>    
    </div>
  );
}

export default App
