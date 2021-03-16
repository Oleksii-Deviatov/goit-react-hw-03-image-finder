import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Api from './Api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import './index.css';

function App() {
  const [mounted, setMounted] = useState(false); // что бы useEffect не срабатывал при первом рендере

  const [imgs, setImgs] = useState([]); // массив картинок

  const [q, setQ] = useState(''); //поисковый запрос

  const [page, setPage] = useState(1); //номер страници

  const [isLoading, setIsLoading] = useState(false); // лодырь

  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (!mounted) return setMounted(true);
    setIsLoading(true);
    Api({ q, page })
      .then(data => {
        setImgs(prevImgs => [...prevImgs, ...data]);
      })
      .finally(() => {
        setIsLoading(false);
        scroll();
      });
  }, [q, page]);

  //чистим стейты при изменении поискового запроса
  useEffect(() => {
    setImgs([]);
    setPage(1);
  }, [q]);

  function onSubmit(input) {
    setQ(input);
  }

  function onClickBtn() {
    setPage(prevPage => (prevPage += 1));
  }

  function onClickImg(e) {
    const alt = e.target.alt;
    const largeurl = e.target.dataset.largeurl;
    ReactDOM.render(
      <Modal
        largeurl={largeurl}
        alt={alt}
        onOverlay={closeModalOverlay}
        escFunctionModal={escFunctionModal}
      />,
      modalRoot,
    );
  }

  function closeModalOverlay(e) {
    if (e.target === e.currentTarget) {
      ReactDOM.unmountComponentAtNode(modalRoot);
    }
  }

  function escFunctionModal(e) {
    if (e.keyCode === 27) {
      ReactDOM.unmountComponentAtNode(modalRoot);
    }
  }

  function scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <ImageGallery>
        {imgs.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            onClickImg={onClickImg}
          />
        ))}
      </ImageGallery>
      {!!imgs.length && <Button onClickBtn={onClickBtn} />}
    </>
  );
}

export default App;
