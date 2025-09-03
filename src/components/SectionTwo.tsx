import Logo from './logo';

function SectionTwo() {
  return (
    <>
      <div className="rounded-sm w-[80%] h-[45%] bg-primary absolute left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg p-10">
        <Logo className="text-5xl p-4" />
        <br />
        <p className="text-light overflow-scroll h-[40%]">
          Results-oriented MERN Stack Developer with 4+ years of experience
          designing and developing scalable backend systems, RESTful APIs, and
          real-time applications. Experienced in working within agile teams,
          delivering clean, maintainable code, and collaborating closely with
          cross-functional teams. Spearheaded the design and implementation of a
          scalable microservices architecture using Node.js, reducing server
          response time by 60ms and improving application performance scores by
          15/100 points.
        </p>

        <div className="w-full text-center mt-10">
          <a href="/Resume.pdf" download={true}>
            <button className="text-light border-1 border-accent p-2 px-4 transition-colors duration-300 ease-in-out">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="w-full h-full bg-black backgroundImageTwo "></div>
      <div
        id="skills"
        className="w-[80%] md:h-[45%] h-[60%] sm:h-[75%] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <p className="text-primary text-2xl mb-2 font-bold tracking-widest">
          <span className="border-b-3">SK</span>ILLS
        </p>
        <div className="md:grid-rows-12 md:grid-cols-22 hidden md:grid w-full h-full truncate">
          <div className="md:row-span-4 md:col-span-3 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                MongoDB <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Imtermediate
                </span>
              </div>
            </div>
          </div>
          <div className="md:row-span-4 md:col-span-3 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                TypeScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="md:row-span-6 md:col-span-6 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                ExpressJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="md:row-span-12 md:col-span-10 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                JavaScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Advanced
                </span>
              </div>
            </div>
          </div>
          <div className="md:row-span-8 md:col-span-6 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                NextJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="md:row-span-6 md:col-span-6 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                ReactJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-rows-22 sm:grid-cols-12 md:hidden w-full h-full truncate">
          <div className="row-span-4 col-span-3 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                MongoDB <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Imtermediate
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-4 col-span-3 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                TypeScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-6 col-span-6 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                ExpressJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-8 col-span-6 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-black">
                NextJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-6 col-span-6 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                ReactJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-10 col-span-12 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                JavaScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Advanced
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-18 grid-cols-12 gap-1 sm:hidden w-full h-full truncate">
          <div className="row-span-3 col-span-12 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div>
                MongoDB <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Imtermediate
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-12 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-black">
                TypeScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-12 bg-white">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-black">
                ExpressJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-12 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                NextJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-12 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                ReactJS <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-12 bg-primary">
            <div className="w-full h-full justify-center items-center flex text-center text-[0.75rem]">
              <div className="text-light">
                JavaScript <br />
                <span className="text-red-400 font-bold text-[0.85rem]">
                  Advanced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
