import { useNavigate } from 'react-router-dom';
import Logo from './logo';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (targetId: string) => {
    navigate('/', { state: { scrollToId: targetId } });
  };
  return (
    <div className="bg-primary w-full h-[4rem] flex gap-5 justify-between items-center px-20">
      <Logo className="text-3xl p-2" />

      <div className="h-full w-full">
        <ul className="flex gap-5 justify-center items-center w-full h-full">
          <li className="text-muted text-accent">
            <button
              className="hover:cursor-pointer"
              onClick={() => handleClick('home')}
            >
              Home
            </button>
          </li>
          <li className="text-muted hover-text-light">
            <button
              className="hover:cursor-pointer"
              onClick={() => handleClick('skills')}
            >
              Skills
            </button>
          </li>
          <li className="text-muted hover-text-light">
            <button
              className="hover:cursor-pointer"
              onClick={() => handleClick('projects')}
            >
              Projects
            </button>
          </li>
          <li className="text-muted hover-text-light">
            <button
              className="hover:cursor-pointer"
              onClick={() => handleClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
