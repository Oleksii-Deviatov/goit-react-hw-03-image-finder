import React from 'react';

function Button({ onClickBtn }) {
  function onClickHandler() {
    onClickBtn();
  }

  return (
    <button className="Button" onClick={onClickHandler}>
      Load more
    </button>
  );
}

export default Button;
