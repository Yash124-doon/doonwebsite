import React from 'react';
import Link from 'next/link';
import Card from '../ui/card';

interface EventCardProps {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, excerpt, href }) => {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-heading font-bold text-text-dark mb-2">{title}</h3>
        <p className="text-sm text-text-light mb-4">{date}</p>
        <p className="font-body text-text-DEFAULT mb-4">{excerpt}</p>
      </div>
      <Link href={href} className="text-primary hover:underline font-body font-medium mt-auto">
        Read More
      </Link>
    </Card>
  );
};

export default EventCard;