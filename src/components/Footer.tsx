import Logo from './logo';

function Footer() {
  return (
    <div className="bg-primary w-full h-[4rem] flex items-center px-20">
      <Logo className="text-3xl p-2" />

      <div className="text-muted w-full text-sm sm:text-base">
        &copy;Get Feedback All rights reserved
      </div>
    </div>
  );
}

export default Footer;
