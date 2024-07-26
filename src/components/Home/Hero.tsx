import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Image from '@components/UI/Image/Image';

import furnitureOne from '@assets/image/furniture/furniture-1.webp';

const variants: Variants = {
  inView: { opacity: 1, x: 0, y: 0 },
  initialLeft: { opacity: 0, x: -24 },
  initialRight: { opacity: 0, x: 24 },
  initialBottom: { opacity: 0, y: 24 },
  exit: { opacity: 1, x: 0, y: 0 },
};

export default function Hero() {
  return (
    <section
      className={clsx('mt-24 flex flex-col items-start gap-y-6', 'md:mt-32')}
    >
      <div className='flex w-full flex-col gap-y-2'>
        <motion.h1
          className={clsx(
            'font-neutralBold text-5xl',
            'md:whitespace-nowrap md:text-[3.25rem]',
            'lg:text-7xl'
          )}
          variants={variants}
          whileInView={'inView'}
          initial={'initialLeft'}
          exit={'exit'}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          RiuStudio
        </motion.h1>
        <div
          className={clsx(
            'flex w-full flex-row items-center justify-between',
            'md:flex-row'
          )}
        >
          <motion.p
            className={clsx(
              'w-1/2 text-xs',
              'md:w-1/4 md:text-sm',
              'lg:text-base'
            )}
            variants={variants}
            whileInView={'inView'}
            initial={'initialBottom'}
            exit={'exit'}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
          </motion.p>
          <motion.h1
            className={clsx(
              'text-right font-neutraLight text-5xl',
              'md:text-[1rem]',
              'lg:text-7xl'
            )}
            variants={variants}
            whileInView={'inView'}
            initial={'initialRight'}
            exit={'exit'}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Build A Website For Your Needs
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
