import React from 'react';

function ImageGalleryItem({ webformatURL, tags, largeImageURL, onClickImg }) {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          onClick={onClickImg}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          data-largeurl={largeImageURL}
        />
      </li>
    </>
  );
}

export default ImageGalleryItem;
