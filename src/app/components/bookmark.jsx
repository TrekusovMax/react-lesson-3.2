import React from 'react'

const Bookmark = ({ status, ...rest }) => {
  return (
    <button
      className={
        'btn border border-1 border-secondary btn-sm bi ' +
        (status === true ? 'bi-bookmark-fill' : 'bi-bookmark')
      }
      onClick={() => rest.handleToggleBookMark()}
    ></button>
  )
}

export default Bookmark
