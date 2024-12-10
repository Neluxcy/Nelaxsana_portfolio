import AnimationContainer from '../utils/AnimationContainer';
// import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      Motivated Computer Science and Technology undergraduate with a strong foundation in software development, problem-solving, and innovative thinking. Passionate about using modern technologies to create efficient, user-focused solutions in 
      areas like AI and Robotics, Quality Assurance, Business Analytics, Software Engineering, Digital Marketing, Web Development, Mobile App Development, and UI/UX Design. Skilled in coding, data analysis, and creative design, with hands-on experience in full-stack projects. Eager to join innovative teams, solve challenging problems, and grow in a dynamic, collaborative environment.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;