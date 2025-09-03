import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandGmail } from 'react-icons/tb';

function SectionFour() {
  return (
    <>
      <div className="backgroundImageFour h-[60%] w-full">
        <div
          id="contact"
          className="w-[80%] h-[45%] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-sm p-15"
        >
          <h1 className="text-2xl font-bold text-light md:text-center">
            Contact
          </h1>

          <table className="mt-10 text-muted  md:m-auto md:mt-10">
            <tbody>
              <tr>
                <td>Name:</td>
                <td className="break-all">Anand Tagatghar</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="break-all">anandtagatghar@gmail.com</td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td className="break-all">8978610810</td>
              </tr>
            </tbody>
          </table>

          <div className="flex gap-5 justify-center  items-center w-full py-2 text-light text-3xl mt-15">
            <a
              href="https://www.linkedin.com/in/tagatghar-anand-kumar-958b46206"
              target="_blank"
            >
              <SlSocialLinkedin className="hover-text-muted transform hover:scale-125 transition duration-300m" />
            </a>
            <a href="https://github.com/AnandTagatghar" target="_blank">
              <SlSocialGithub className="hover-text-muted transform hover:scale-125 transition duration-300m" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anandtagtghar@gmail.comm"
              target="_blank"
            >
              <TbBrandGmail className="hover-text-muted transform hover:scale-125 transition duration-300m" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;
