import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface LogoComponentProps {
  className: string;
}

function Logo({ className }: LogoComponentProps) {
  return (
    <div className={clsx('w-full text-center flex justify-center')}>
      <Link to={'/'}>
        <p
          className={clsx(
            'text-accent font-light rounded-full border-r-2',
            className
          )}
        >
          A
        </p>
      </Link>
    </div>
  );
}

export default Logo;
