import React from 'react';

function RemoveBtn(props) {
  return (
    <button
      onClick={(e) => {
        props.remove();
      }}
    >
      Remove
    </button>
  );
}

export default RemoveBtn;
