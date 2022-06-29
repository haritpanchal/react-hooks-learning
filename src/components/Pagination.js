import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let pages = 1; pages <= Math.ceil(totalPosts/postsPerPage); pages++) {
      pageNumbers.push(pages);
      
  }
  return (
    <>
        <ul className='pagination'>
            {pageNumbers.map((number) => {
                return(
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="#" className='page-link'>{number}</a>
                    </li>
                )
            })} 
        </ul>
    </>
  )
}

export default Pagination