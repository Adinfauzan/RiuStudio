import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Image from '@components/UI/Image/Image';

import furnitureTwo from '@assets/image/furniture/furniture-2.webp';

const variants: Variants = {
  inView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 24 },
  exit: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className='flex flex-col items-start gap-y-4' id='about'>
      <motion.h1
        className='font-neutralBold text-4xl'
        variants={variants}
        whileInView={'inView'}
        initial={'initial'}
        exit={'exit'}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h1>
      <motion.div
        className={clsx(
          'flex flex-col gap-y-4',
          'md:flex-row md:items-center md:gap-x-8'
        )}
        variants={variants}
        whileInView={'inView'}
        initial={'initial'}
        exit={'exit'}
        transition={{ duration: 0.7 }}
      >
        <p className={clsx('text-justify text-sm', 'md:max-w-[50%]')}>
          <strog>RiuStudio</strog> adalah penyedia jasa pembuatan website yang fokus pada desain responsif, user-friendly, dan SEO-optimized.
          Kami membantu bisnis Anda untuk membangun kehadiran online yang kuat dan efektif.
        </p>
        <Image
          src={furnitureTwo}
          alt='furniture-two'
          figureClassName='overflow-hidden rounded-md overflow-hidden w-full h-full rounded-xl'
        />
      </motion.div>
    </section>
  );
}
