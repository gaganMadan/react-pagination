import React,{useEffect, useState} from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Images from './Images'

import "./style.css";

const App =() => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(10); 


  const API = 'https://jsonplaceholder.typicode.com/photos';

  useEffect(() => {

    const fetchImage = async () => {
        setLoading(true);
        const res = await axios.get(API);
        setImages(res.data);
        setLoading(false);
    }
    fetchImage();
  }, []);

  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentPage = images.slice(indexOfFirstImage, indexOfLastImage);

 return (

    <div className="container">
        <h1 className="text-primary">My Images</h1>  
        <Images images={currentPage} loading={loading}/>
    </div>
  );
}

export default App
