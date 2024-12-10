'use client';

import { Carousel } from '@mantine/carousel'; // Uncomment this import
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';

const useStyles = createStyles((theme) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },
  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  repo: string;
  link: string;
}

const Card = ({ image, title, category, repo, link }: CardProps) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <div className="flex items-center justify-end gap-3">
        <ExternalLink
          href={repo}
          customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 ... (trimmed for brevity)" />
          </svg>
        </ExternalLink>
        <ExternalLink
          href={link}
          customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          {/* Globe Icon */}
          <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12 0c6.623 0 12 5.377 12 ... (trimmed for brevity)" />
          </svg>
        </ExternalLink>
      </div>
    </Paper>
  );
};

const favProjects = [
  {
    image: 'Blood.png',
    title: 'Blood Donation Management System',
    category: 'PHP- CSS- javaScript- HTML- mysql',
    repo: 'https://github.com/Neluxcy/BloodLife',
    // link: 'https://mapsapp.vercel.app',
  
  },
  {
  image: 'Bid.png',
  title: 'ElectroBidhub Reverce auction Platform',
  category: 'Next JS- node js- Mongodb',
  repo: 'https://github.com/Neluxcy/BloodLife',
  // link: 'https://mapsapp.vercel.app',
  },
  {
    image: 'Blood.png',
    title: 'Blood Donation Management System',
    category: 'PHP- CSS- javaScript- HTML- mysql',
    repo: 'https://github.com/Neluxcy/BloodLife',
    // link: 'https://mapsapp.vercel.app',
  
  },
  {
    image: 'Blood.png',
    title: 'Blood Donation Management System',
    category: 'PHP- CSS- javaScript- HTML- mysql',
    repo: 'https://github.com/Neluxcy/BloodLife',
    // link: 'https://mapsapp.vercel.app',
  
  
// image: 'Blood.png',
// title: 'Blood Donation Management',
// category: 'PHP- CSS- javaScript- HTML- mysql',
// repo: 'https://github.com/Neluxcy/BloodLife',
// // link: 'https://mapsapp.vercel.app',

// image: 'Blood.png',
// title: 'Blood Donation Management',
// category: 'PHP- CSS- javaScript- HTML- mysql',
// repo: 'https://github.com/Neluxcy/BloodLife',
// // link: 'https://mapsapp.vercel.app',
},
];

const FavProjects = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = favProjects.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <AnimationContainer customClassName="w-full flex flex-col justify-center text-center lg:items-start mb-16">
      <h2 className="font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        Projects
      </h2>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 1 }]}
        slideGap="xs"
        align="center"
        slidesToScroll={mobile ? 1 : 2}
        withControls={false}
        style={{ width: '100%', cursor: 'grab' }}
        loop
      >
        {slides}
      </Carousel>
    </AnimationContainer>
  );
};

export default FavProjects;
