import Mycontainer from "../components/Mycontainer";
import useData from "../hooks/useData";
import Skillcard from "../components/Skillcard";

const Home = () => {
  const { skill, loading } = useData();
  
  return (
    <div>
      <Mycontainer>
        <h1 className="text-4xl text-white bg-green-900 rounded-2xl text-center">
          Skills that you can use from here
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
         <div className="grid grid-cols-3  gap-4 rounded-2xl mt-11">
          {
            skill.map(skill=>(
              <Skillcard key={skill.skillId} skill={skill}></Skillcard>
            
             ))
          }
         </div>
        )}
      </Mycontainer>
    </div>
  );
};

export default Home;
