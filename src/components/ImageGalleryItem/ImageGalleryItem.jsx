import React from 'react';

function ImageGalleryItem({ imgs, onClickImg }) {
  return (
    <>
      {imgs.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            onClick={onClickImg}
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            data-largeurl={largeImageURL}
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
