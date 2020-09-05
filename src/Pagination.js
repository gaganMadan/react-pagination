import React from 'react';

const Pagination = ({imagePerPage, totalImages, paginate}) => {

    const pageNumber = [];
    for(let i=1; i < Math.ceil(totalImages / imagePerPage); i++){
      pageNumber.push(i);
    }
    //console.log(pageNumber);

    return (
      <nav>
        <ul style={{"list-style":"none"}} className="pagination">
          {   pageNumber.map( (number) => (
              <li style={{float:"left", width: "30px"}} key={number} className="page-item"> 
                <a onClick={()=> paginate(number)} href="!#" className="page-link">
                    {number}
                </a>
              </li>)
            )
          
          
          }
        </ul>
      </nav>
    )
}

export default Pagination;