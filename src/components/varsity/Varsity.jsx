import VarsityCard from "../varsitycard/VarsityCard";

const Varsity = () => {
  const varsity = [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      img_link: "https://example.com/mit_image.jpg",
      rank: 1,
    },
    {
      name: "Stanford University",
      img_link: "https://example.com/stanford_image.jpg",
      rank: 2,
    },
    {
      name: "Harvard University",
      img_link: "https://example.com/harvard_image.jpg",
      rank: 3,
    },
    {
      name: "California Institute of Technology (Caltech)",
      img_link: "https://example.com/caltech_image.jpg",
      rank: 4,
    },
    {
      name: "University of Cambridge",
      img_link: "https://example.com/cambridge_image.jpg",
      rank: 5,
    },
    {
      name: "University of Oxford",
      img_link: "https://example.com/oxford_image.jpg",
      rank: 6,
    },
  ];
  const randomColor = [
    "#00204a",
    "#065471",
    "#5733FF",
    "#FF33E8",
    "#ffc045",
    "#00bbf0",
  ];
  return (
    <div className="py-12 mx-10">
      <h2 className="text-4xl font-extrabold text-center text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-600">
        Our Team
      </h2>
      <hr className="mb-10 mt-3 md:w-1/2 mx-auto" />
      <p className="my-5 text-md text-[#234EB0] text-center">
        Learn From Scientists, research scholars from the top institutes in the
        world
      </p>
      <div className=" grid md:grid-cols-3  grid-cols-1 justify-center  items-center">
        {varsity.map((singleV, index) => (
          <VarsityCard
            singleV={singleV}
            index={index}
            randomColor={randomColor[index % randomColor.length]}
            key={index}
          ></VarsityCard>
        ))}
      </div>
    </div>
  );
};

export default Varsity;
