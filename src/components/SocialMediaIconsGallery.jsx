import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SocialMediaIconsGallery = ({ images }) => {
  const [isShortViewport, setIsShortViewport] = useState(false);

  useEffect(() => {
    const setDynamicHeight = () => {
      setIsShortViewport(window.innerHeight < 600);
    };

    setDynamicHeight();
  }, []);

  return (
    <div className={`flex justify-around min-[480px]:justify-start top-full w-full px-10 min-[480px]:px-0 ${isShortViewport ? 'pt-4' : 'absolute'}`}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="size-10 mx-2 ml-0"
        />
      ))}
    </div>
  );
};

SocialMediaIconsGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  )
};

export default SocialMediaIconsGallery