import React, { useEffect, useState } from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
const API_KEY = '33232271-64f59833765980c2919249219'
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`);
        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getImages();
  }, [term])

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={setTerm} term={term} />
      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32 '>No Images Found</h1>}
      {isLoading ? <h1>Loading</h1> : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} setTerm={setTerm} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App