/* eslint-disable react/prop-types */
const MentorAndAdvisorCard = ({ ma }) => {
  const { name, role } = ma;
  return (
    <div className="flex flex-wrap justify-center h-64">
      <div className="w-32 px-4 mx-auto">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
          alt="..."
          className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
        />
        <h2 className="text-center mt-2">{name}</h2>

        <p className="text-center">
          <small>Role: {role}</small>
        </p>
        <div className="flex justify-center my-3">
          <button
            type="button"
            className="inline-block whitespace-nowrap text-center rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Message Him/Her Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorAndAdvisorCard;
