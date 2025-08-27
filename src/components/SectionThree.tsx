import { FocusCards } from './ui/focus-cards';
import projectsData from '../data/projectData.json';

function SectionThree() {
  const cards = projectsData.map((project) => {
    return {
      title: project.projectTitle,
      src: project.projectMainPageImage,
      githublink: project.githubLink,
      projectLink: project.projectLink,
    };
  });

  return (
    <>
      <div className="backgroundImageThree w-full min-h-full flex justify-center items-center">
        <div id='projects' className="w-[80%] md:min-h-[35%] py-[30rem] md:py-[20rem]">
          <p className="text-primary text-2xl mb-2 font-bold tracking-widest mt-15">
            <span className="border-b-3">PR</span>OJECTS
          </p>

          <div className="flex flex-wrap w-full h-full items-center justify-between mt-5 ">
            <FocusCards cards={cards} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
