import React from 'react'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './pagination.css';

export const Pagination = ({paginationClicked, pagecount}) => {

    const changePage = ({selected}) => {
        paginationClicked(selected) // destructing selected value which defines current page selected and returns a number
    }
    
  return (
   <>
     <ReactPaginate
            previousAriaLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pagecount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
   </>
  )
}

Pagination.propTypes = {
  paginationClicked: PropTypes.func,
  pagecount: PropTypes.number
}