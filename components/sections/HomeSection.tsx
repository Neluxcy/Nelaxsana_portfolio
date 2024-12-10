import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentLearning from '../content/CurrentLearning';
// import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>

      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className='w-full flex flex-col items-start'>

        <AboutMe />

        {/* <CurrentTimeLineExp /> */}

        <FavProjects />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills</h2>

          <p className='text-base text-gray-400'>
          I possess strong communication skills, allowing me to collaborate effectively within teams and clearly articulate ideas. My time management abilities ensure I meet deadlines while maintaining high-quality work. I am self-motivated and dedicated to continuous learning, which helps me stay adaptable and flexible in dynamic environments.
           With a focus on problem-solving, I strive to find creative solutions to challenges and contribute to the success of every project through teamwork and collaboration.
          </p>

          <p className='text-base text-gray-400'>
            {/* Event though the scope of web development is wide, I was very interested and focused on Frontend development. */}
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <ContactMe />

      </div>

    </SectionContainer>
  )
}

export default HomeSection;