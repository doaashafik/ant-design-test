import { Carousel } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './Slider.scss'
export const Slider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightCircleOutlined />,
    prevArrow: <LeftCircleOutlined />,
  };
  return (
    <Carousel {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
    </Carousel>
  );
};
