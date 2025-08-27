import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import projectDatas from '../../data/projectData.json';
import type { ProjectDataType } from '../../types/types';

function Projects() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const project: number = parseInt(queryParams.get('project') || '1');

  const projectData: ProjectDataType | undefined = projectDatas.find(
    (data) => data.projectId == project
  );

  return (
    <>
      <Navbar />
      <div className="block md:flex justify-center items-center w-full min-h-[86.6vh] bg-[#303548]">
        {projectData && (
          <div className="w-full p-15 md:w-[50%]">
            <div className="flex flex-wrap gap-2 justify-between">
              <h1 className="text-light p-4 text-4xl font-bold tracking-tight">
                Project 0{projectData?.projectId}
              </h1>
              <p className="text-light p-4 text-balance w-[20rem] md:[23rem]">
                {projectData?.projectDescription}
              </p>
            </div>

            {projectData?.githubLink && (
              <div className="px-4 text-light">
                Github Link:{' '}
                <a
                  className="text-blue-500 underline active:text-blue-400 w-full break-all"
                  href={projectData.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projectData?.githubLink}
                </a>
              </div>
            )}

            {projectData?.projectLink && (
              <div className="px-4 text-light">
                Project Link:{' '}
                <a
                  className="text-blue-500 underline active:text-blue-400 break-all"
                  href={projectData.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projectData?.projectLink}
                </a>
              </div>
            )}

            <div className="mt-5 flex flex-wrap p-4 w-full gap-2">
              <div className="border-1 w-[16.2rem] h-[20rem] md:w-[23rem]">
                <img
                  src={projectData?.screenShot1}
                  alt="Project Image"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="border-1 w-[16.2rem] h-[20rem] md:w-[23rem]">
                <img
                  src={projectData?.screenShot2}
                  alt="Project Image"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="border-1 w-[16.2rem] h-[20rem] md:w-[23rem]">
                <img
                  src={projectData?.screenShot3}
                  alt="Project Image"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="border-1 w-[16.2rem] h-[20rem] md:w-[23rem]">
                <img
                  src={projectData?.screenShot3}
                  alt="Project Image"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="flex mt-15">
              {project > 1 && (
                <Link
                  to={`/projects?project=${project - 1}`}
                  className="text-light hover-text-muted justify-start"
                >
                  &lt;&lt;Previous
                </Link>
              )}
              <div className="flex-1"></div>
              {projectDatas.length - 1 >= project && (
                <Link
                  to={`/projects?project=${project + 1}`}
                  className="text-light hover-text-muted items-end"
                >
                  Next&gt;&gt;
                </Link>
              )}
            </div>
          </div>
        )}

        {projectData == undefined && (
          <p className="w-full p-15 text-center text-light text-2xl">
            Something went wrong, please try later.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Projects;
