import Carousel from "react-bootstrap/Carousel";

function PhotoCarusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <PhotoCarusel text="First slide" />
        <Carousel.Caption>
          <img src="https://img.directbooking.ro/getimage.ashx?w=1024&h=663&file=a458b540-71c4-4b29-b20b-f0a875f02f52.jpg&_gl=1*38x4to*_gcl_au*MTczNDI0MDE5OS4xNzA3NzM3NjMy"></img>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PhotoCarusel text="Second slide" />
        <Carousel.Caption>
          <img src="https://img.directbooking.ro/getimage.ashx?w=1024&h=663&file=a458b540-71c4-4b29-b20b-f0a875f02f52.jpg&_gl=1*38x4to*_gcl_au*MTczNDI0MDE5OS4xNzA3NzM3NjMy"></img>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PhotoCarusel text="Third slide" />
        <Carousel.Caption>
          <img src="https://img.directbooking.ro/getimage.ashx?w=1024&h=663&file=a458b540-71c4-4b29-b20b-f0a875f02f52.jpg&_gl=1*38x4to*_gcl_au*MTczNDI0MDE5OS4xNzA3NzM3NjMy"></img>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoCarusel;
