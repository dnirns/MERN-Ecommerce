import Carousel from 're-carousel'
import images from './carouselImages'

const HomeCarousel = () => {
  console.log(images[0].image)

  return (
    <div className='carousel-container'>
      <Carousel axis='x' auto loop >
        {images.map((image) => (
          <div
            className='gallery-img'
            style={{ backgroundImage: `url(${image.image})` }}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousel
