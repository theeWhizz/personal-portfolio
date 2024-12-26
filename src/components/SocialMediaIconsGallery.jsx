import PropTypes from 'prop-types';

const SocialMediaIconsGallery = ({ images }) => {
  return (
    <div className="absolute flex justify-around top-full">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="size-13 mx-2"
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