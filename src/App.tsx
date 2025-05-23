import React, { useEffect, useState } from 'react';
import { fetchPhotos } from './Services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import SearchBar from './components/SearchBar/SearchBar'
import ImageModal from './components/ImageModal/ImageModal'
import { Photos } from './Services/api'

const App: React.FC = () => {

  const [photos, setPhotos] = useState < Photos[] > ([]);
  const [isLoading, setIsLoading] = useState < boolean > (false);
  const [isError, setIsError] = useState < boolean > (false);
  const [page, setPage] = useState < number > (1);
  const [query, setQuery] = useState < string > ('');



  const [selectedImage, setSelectedImage] = useState < string | null > (null);
  const [isModalOpen, setIsModalOpen] = useState < boolean > (false);

  useEffect(() => {

    if (!query) return;


    const getPhotodData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchPhotos(query, page);
        setPhotos(prev => [...prev, ...results]);
        console.log(results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotodData();

  }, [page, query]);


  const handleChangePage = (): void => {
    setPage(prev => prev + 1);
  };

  const handleChangeQuery = (newQuery: string): void => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  }


  const handleClickImage = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  }

  const handleClickImageClose = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }



  return (
    <div>

      <SearchBar onSubmit={handleChangeQuery} />
      {photos.length > 0 && <ImageGallery photos={photos} onImageClick={handleClickImage} />}
      {photos.length > 0 && <LoadMoreBtn onChangePage={handleChangePage} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      <ImageModal isOpen={isModalOpen} onClose={handleClickImageClose} image={selectedImage} />



    </div>
  )
}

export default App






