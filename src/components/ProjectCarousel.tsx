import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import project images
import project1 from '../assets/Manianaa.png';
import project2 from '../assets/Joanna Adamek.png';
import project3 from '../assets/Dashboard.png';
import project4 from '../assets/Koparki.png';

import './styles/ProjectCarousel.css';

interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

const ArrowBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20px"
    height="20px"
    fill="currentColor"
  >
    <path
      d="M328 112L184 256l144 144"
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '28px',
        color: 'var(--text-primary)',
      }}
    />
  </svg>
);

const ArrowForwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20px"
    height="20px"
    fill="currentColor"
  >
    <path
      d="M184 112l144 144-144 144"
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '28px',
        color: 'var(--text-primary)',
      }}
    />
  </svg>
);

const ProjectCarousel = () => {

  const projects: Project[] = [
    {
      id: 1,
      title: 'https://manianaa.com/',
      image: project1,
    },
    {
      id: 2,
      title: 'https://joannaadamek.com.pl/',
      image: project2,
    },
    {
      id: 3,
      title: 'https://salazabawdiggers.pl',
      image: project4,
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        className="swiper_container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                    <h3><a href={project.title} target="_blank" rel="noreferrer">{project.title}</a></h3>
                    <p>{project.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIcon />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIcon />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
