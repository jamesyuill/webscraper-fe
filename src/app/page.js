'use client';
import { useState } from 'react';

import { getAllImages } from '../../utils/getImages';

import ImageList from './components/ImageList';

export default function Home() {
  const [searchUrl, setSearchUrl] = useState('');
  const [responseImages, setResponseImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllImages(searchUrl).then(({ images }) => {
      setResponseImages(images);
    });

    setSearchUrl('');
  };

  return (
    <main className="main">
      <form
        className="search-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="searchUrl">Search URL: </label>
        <input
          type="text"
          id="searchUrl"
          value={searchUrl}
          onChange={(e) => {
            setSearchUrl(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ImageList responseImages={responseImages} />
    </main>
  );
}
