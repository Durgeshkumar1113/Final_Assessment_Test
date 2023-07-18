import React, { useState } from 'react';

const PictureForm = () => {
  const [pictureLink, setPictureLink] = useState('');

  const handleInputChange = event => {
    setPictureLink(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Picture Link:', pictureLink);
  }

  return (
    <div className='pictureformbox'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter picture link"
          value={pictureLink}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PictureForm;
