import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[600px]  my-8 rounded-xl w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing0</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
                <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing 1</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
              <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3  " className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing 2</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
              <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing 3</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
              <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing 4</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
              <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <div
          className="hero "
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing 5</h1>
              <p className="mb-5">
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-5 items-center justify-center">
              <button className="btn btn-outline">discover more</button>
                <button className="btn btn-full">latest project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
