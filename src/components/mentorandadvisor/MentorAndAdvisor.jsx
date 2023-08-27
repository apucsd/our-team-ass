import MentorAndAdvisorCard from "../mentorandadvisorCard/MentorAndAdvisorCard";

const MentorAndAdvisor = () => {
  const mentorsAndAdvisors = [
    {
      name: "Amit Patel",
      university: "Massachusetts Institute of Technology (MIT)",
      role: "Mentor",
    },
    {
      name: "Priya Sharma",
      university: "Stanford University",
      role: "Mentor",
    },
    {
      name: "Rahul Verma",
      university: "Harvard University",
      role: "Mentor",
    },
    {
      name: "Sneha Gupta",
      university: "California Institute of Technology (Caltech)",
      role: "Advisor",
    },
    {
      name: "Vikram Singh",
      university: "University of Cambridge",
      role: "Advisor",
    },
    {
      name: "Anjali Khanna",
      university: "University of Oxford",
      role: "Advisor",
    },
  ];

  return (
    <div className="mx-10 my-10">
      <h2 className="text-4xl  font-extrabold text-center text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-600">
        Mentor & Advisor
      </h2>
      <hr className="mb-10 mt-3 md:w-1/2 mx-auto" />
      <div className="grid md:grid-cols-5 grid-cols-1">
        {mentorsAndAdvisors.map((ma, index) => (
          <MentorAndAdvisorCard ma={ma} key={index}></MentorAndAdvisorCard>
        ))}
      </div>
    </div>
  );
};

export default MentorAndAdvisor;
