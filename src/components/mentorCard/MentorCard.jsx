/* eslint-disable react/prop-types */
const MentorCard = ({ mentor }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center h-64">
        <div className="w-32 px-4">
          <img
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
            alt="..."
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
          <h2 className="text-center my-4">{mentor?.name}</h2>
          <p className="text-center">
            <small>{mentor?.university}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
