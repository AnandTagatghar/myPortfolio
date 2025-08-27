import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-sm relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out',
        hovered !== null && hovered !== index && 'scale-[1]'
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
          hovered === index ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
          {/* <br />
          {card.githublink && (
            <button
              className="text-light text-sm tracking-tight font-bold border-1 border-accent p-1 w-full transition-colors duration-300 ease-in-out mt-2"
              onClick={() => {
                console.log('github button clicked');
              }}
            >
              View GitHub
            </button>
          )}
          <br />
          {card.projectLink && (
            <button
              className="text-light text-sm tracking-tight font-bold border-1 border-accent p-1 w-full transition-colors duration-300 ease-in-out mt-2"
              onClick={() => {
                console.log('project button clicked');
              }}
            >
              View Project
            </button>
          )} */}
        </div>
      </div>
    </div>
  )
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
  githubLink?: string;
  projectLink?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Link to={`/projects?project=${index+1}`} key={index}>
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Link>
      ))}
    </div>
  );
}
