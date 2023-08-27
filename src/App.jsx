import MentorAndAdvisor from "./components/mentorandadvisor/MentorAndAdvisor";
import Mentors from "./components/mentors/Mentors";
import Varsity from "./components/varsity/Varsity";

const App = () => {
  return (
    <div className="font-custom">
      <Varsity></Varsity>

      <Mentors></Mentors>

      <MentorAndAdvisor></MentorAndAdvisor>
    </div>
  );
};

export default App;
