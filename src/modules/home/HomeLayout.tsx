'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeLayout = () => {
  const controls = useAnimation();
  const iconControls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconHoverAnimation = async () => {
    await iconControls.start({
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, -10, 10, -5, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="scroll-smooth bg-gradient-to-br from-purple-50 via-purple-100 to-white min-h-screen"
    >
      <motion.nav
        className="sticky top-0 z-20 h-20 w-full bg-gradient-to-r from-purple-600 to-indigo-600 flex py-2.5 px-4 xl:px-60 items-center shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={iconHoverAnimation}
            animate={iconControls}
          >
            <Image
              src={'/icons/resume-icon.png'}
              alt="logo"
              height="50"
              width="50"
              className="rounded-full bg-white p-1"
            />
          </motion.div>
        </Link>
        <motion.div
          className="flex-auto flex justify-between items-center ml-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <Link href="/builder" passHref>
            <motion.button
              className="text-white hover:bg-purple-500 px-6 py-2 rounded-full transition-all duration-300 text-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              Editor
            </motion.button>
          </Link>
          <Link href="#about-us" passHref>
            <motion.button
              className="text-white hover:bg-indigo-500 px-6 py-2 rounded-full transition-all duration-300 text-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              About us
            </motion.button>
          </Link>
        </motion.div>
      </motion.nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h3 className="text-2xl font-semibold mb-3 text-purple-600" variants={fadeInUp}>
              SIMPLEST WAY TO BUILD A
            </motion.h3>
            <motion.h1
              className="text-6xl font-bold mb-8 text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              Professional Resume
            </motion.h1>

            <motion.div className="mb-10" variants={fadeInUp}>
              <motion.div
                className="bg-white shadow-xl rounded-2xl p-8"
                whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl text-gray-700 italic">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  <span className="text-sm text-gray-500 mt-2 block">—Mark Twain</span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/builder" passHref>
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUILD YOUR RESUME
                </motion.button>
              </Link>
              <motion.p
                className="text-sm text-gray-600 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Desktop screen recommended for best experience
              </motion.p>
            </motion.div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/resume.webp"
                alt="Resume 3D"
                width={300}
                height={300}
                className="rounded-2xl shadow-5xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>
          <FeatureSection />
        </div>
      </motion.div>

      <motion.div
        id="about-us"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold mb-6 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About us
          </motion.h2>
          <motion.div
            className="text-2xl mb-16 text-center text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              We are a team of passionate developers dedicated to creating innovative solutions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {[
              {
                name: 'Madhav Sharma',
                image: '/team/madhav.jpg',
                github: 'https://github.com/MadhavSharma07',
                linkedin: 'https://www.linkedin.com/in/madhav-sharma-785a2527a/',
              },
              {
                name: 'Gaurav Verma',
                image: '/team/Gaurav.jpg',
                github: 'https://github.com/VermaGaur/',
                linkedin: 'https://www.linkedin.com/in/gaurav-verma-6058002a7/',
              },
              {
                name: 'Kartik Varshney',
                image: '/team/kartik.jpg',
                github: 'https://github.com/KartikVarshney01',
                linkedin:
                  'https://www.linkedin.com/in/kartik-varshney-b7b862254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
              },
              {
                name: 'Surya Pratap Singh',
                image: '/team/Surya.jpg',
                github: 'https://github.com/suryasingh999',
                linkedin: 'https://www.linkedin.com/in/surya-pratap-singh-66404233a/',
              },
              {
                name: 'Suraj Sharma',
                image: '/team/Suraj.jpg',
                github: 'https://github.com/SharmaSuraj01',
                linkedin: 'http://www.linkedin.com/in/surajsharma15',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.1)' }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-xl flex flex-col items-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-6 border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{member.name}</h3>
                <div className="flex space-x-6">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeLayout;
