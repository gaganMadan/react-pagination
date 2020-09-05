import React from 'react';


const Images = ({images, loading}) => {
    if(loading){
      return <h1>Loading...</h1>
    } 

    return (
      <ul className="list-items">
         {
            images.map( (image) => (
                <li key={image.id} className="list-group-item">
                {image.title}
                </li>
            ))
         }
          <li></li>
      </ul>
    )
}

export default Images