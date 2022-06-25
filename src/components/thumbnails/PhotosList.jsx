import React from 'react'
import PropTypes from 'prop-types'

export const PhotosList = (props) => {
    const { title, thumbnailUrl } = props.thumbnaildata

  return (
    <div className='thumbnail__card'>
         <div className='thumbnail__card__image'>
            <figure>
               <img src={thumbnailUrl} alt={title} />
            </figure>
        </div>
        <div className='thumbnail__card__title'>
            <h3>
                {title}
            </h3>
        </div>
    </div>
  )
}

PhotosList.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string
}