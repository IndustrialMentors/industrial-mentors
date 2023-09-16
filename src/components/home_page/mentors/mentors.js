import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Trainer from "./trainer/trainer";

const Mentors = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container-fluid col-10">
      <Carousel responsive={responsive}>
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />

      </Carousel>
    </div>
  );
};
export default Mentors;
