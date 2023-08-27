// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import MentorCard from "../mentorCard/MentorCard";

const Mentors = () => {
  const mentors = [
    {
      name: "Amit Patel",
      university: "Massachusetts Institute of Technology (MIT)",
    },
    {
      name: "Priya Sharma",
      university: "Stanford University",
    },
    {
      name: "Rahul Verma",
      university: "Harvard University",
    },
    {
      name: "Sneha Gupta",
      university: "California Institute of Technology (Caltech)",
    },
    {
      name: "Vikram Singh",
      university: "University of Cambridge",
    },
    {
      name: "Anjali Khanna",
      university: "University of Oxford",
    },
  ];

  return (
    <div className="my-10 mx-10">
      <h2 className="text-4xl  font-extrabold text-center text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-600">
        Meet Your Mentor
      </h2>
      <hr className="mb-10 mt-3 w-1/2 mx-auto" />

      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          //   loop={true}

          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 3,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
        >
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>
              <MentorCard mentor={mentor}></MentorCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Mentors;
