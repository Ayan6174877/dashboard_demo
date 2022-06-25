import React, { useEffect, useState } from 'react'
import { PhotosList } from './PhotosList';
import { Pagination } from '../pagination/Pagination';
import errorImage from '../../assets/images/error.png';
import './thumbnails.css';

export const Photos = ({photodata, status}) => {
 const [thumbnails, setThumbnails] = useState([])
const [pageNumber, setPageNumber] = useState(0);
 
useEffect(() => {
    setThumbnails([ ...photodata]) // updating the state coming from the props
    return () => {}
}, [photodata])

const imagePerPage = 10; 
// rounding the pagecount incase its not divisible like 53 / 10 , Math.ceil will make pagecount to 6
const pageCount = Math.ceil(thumbnails.length / imagePerPage) 
const pagesVisited = pageNumber * imagePerPage;
const displayThumbnails = thumbnails.slice(pagesVisited, pagesVisited + imagePerPage).map((items) => {
    return (
        <PhotosList key={items.id} thumbnaildata={items} />
    )
})

const changePage = (pageValue) => {
    setPageNumber(pageValue)
}

if(status === 'loading' || status === null){
    return <div className='loader'></div>
}
else if(status === 'failed'){
    return (
         <div className='failed__message'>
             <div className='error__image'>
                 <img src={errorImage} alt="Error" />
             </div>
             There was an error while fetching the data
             </div>
    )
}
else{
  return (
    <div className='thumbnail__container'>
        <div className='thumbnails__panel'>
          {displayThumbnails}
        </div>
        <div className='thumbnail__pagination'>
            <Pagination pagecount={pageCount} paginationClicked={changePage} />
        </div>
   </div>
  )
}
}
