/* eslint-disable react/prop-types */
const VarsityCard = ({ randomColor, index, singleV }) => {
  return (
    <div className="md:flex justify-center pt-10   lg:w-1/4 lg:mx-6 lg:my-8">
      <div className="relative  h-32">
        <div className="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
          <div className="w-1/3 h-40"></div>
          <div className="w-2/3 h-32 pr-4">
            <h3 className="pt-1 text-xl font-semibold text-gray-700">
              {singleV.name}
            </h3>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
          <span className="text-4xl">🎓</span>
        </div>
        <div
          style={{ backgroundColor: randomColor }}
          className="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white rounded-lg"
        >
          {index + 1}
        </div>
        <div
          style={{ backgroundColor: randomColor }}
          className="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48"
        ></div>
      </div>
    </div>
  );
};

export default VarsityCard;
