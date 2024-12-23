'use client';

import { useTransitionRouter } from 'next-view-transitions';

import Hero from '@/components/ui/hero';
import Button from '@/components/ui/button';

const NotFound = () => {
  const router = useTransitionRouter();

  const handleGoToHomepage = () => {
    router.push('/');
  };

  return (
    <Hero>
      <Hero.Title>Not Found Page</Hero.Title>
      <Hero.Text>
        The page you are looking for could not be found. It may have been removed, moved to a
        different location, or you may have entered an incorrect URL. Please double-check the
        address or return to the homepage to continue browsing.
      </Hero.Text>

      <Button onClick={handleGoToHomepage} className="mt-4">
        Go to Homepage
      </Button>
    </Hero>
  );
};

export default NotFound;
