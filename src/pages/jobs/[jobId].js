"use client";

import { JobsContext } from '@/app/context/JobContext';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import SimilarJobs from "@/app/components/Job/SimilarJobs";
import Breadcrumb from "@/app/components/Job/Breadcrumb";
import { useRouter } from 'next/router';
import Head from "next/head";
import JobMap from '@/app/components/Job/JobMap';
import JobInfo from '@/app/components/Job/JobInfo';
import JobActions from '@/app/components/Job/JobActions';
import JobDetails from '@/app/components/Job/JobDetails';
import JobAgency from '@/app/components/Job/JobAgency';
import { CallToActionInfo } from '@/app/components/Home/CallToActionInfo';
import { formatSalary } from '@/app/utils/utils';
import JobTitle from '@/app/components/Job/JobTitle';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Job = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [jobNotFound, setJobNotFound] = useState(false);
  const { filteredJobs } = useContext(JobsContext);

  const [job, setJobDetails] = useState(null);

  const router = useRouter();
  const { jobId } = router.query;

  const capitalizeTitle = (str) => {
    if (!str) return "En cours de chargement...";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    if (!jobId || !filteredJobs.length) {
      setIsLoading(false);
      return;
    }

    const foundJob = filteredJobs.find(job => job.offer_id === jobId);
    if (foundJob) {
      setJobNotFound(false);
      setJobDetails(foundJob);
    } else {
      setJobNotFound(true);
    }
    setIsLoading(false);
  }, [jobId, filteredJobs]);

  if (isLoading) {
    return (
      <motion.div
        className="bg-gray-50 flex flex-col justify-center items-center min-h-[50vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Votre page est en cours de chargement ...
      </motion.div>
    );
  }

  if (jobNotFound) {
    return (
      <motion.div
        className="bg-gray-50 flex flex-col justify-center items-center min-h-[50vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-lg md:text-xl font-bold text-gray-700 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Désolé, cette offre n'est plus disponible.
        </motion.h2>
        <motion.p
          className="max-w-sm md:max-w-xl mx-auto text-xs text-gray-500 mb-6 text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Il semble que l'offre que vous recherchez n'existe plus ou n'est pas disponible pour le moment.
          Nous vous encourageons à revenir à la page des offres d'emploi et à explorer d'autres opportunités.
        </motion.p>
        <motion.button
          onClick={() => router.push('/jobs')}
          className="py-3 px-6 bg-yellow-500 hover:bg-black text-sm text-white rounded-lg shadow-lg transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>
    );
  }

  if (!jobNotFound || !isLoading) {
    return (
      <>
        <Head>
          <title>
            {capitalizeTitle(job?.job_title)} | Keys - Intérim & Recrutement | Agence Intérimaire et Solutions RH
          </title>
        </Head>
        <motion.div className="dark:bg-gray-900 bg-gray-100 pb-10" initial="initial" animate="animate">
          <motion.section initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="container py-8">
            <div>
              {(jobId || job?.job_title || job?.offer_id) && (
                <motion.div
                  className="flex flex-col lg:flex-row justify-center sm:justify-between items-center mb-6 gap-3 "
                  variants={fadeIn}
                >
                  <span className='hidden lg:block'>
                    {(jobId || job?.job_title) && (
                      <Breadcrumb jobId={jobId} jobTitle={job?.job_title}/>
                    )}
                  </span>
                  {job?.offer_id && (
                    <small className="text-xxs  text-black dark:text-gray-200">
                      Référence : {job.offer_id}
                    </small>
                  )}
                </motion.div>
              )}
            </div>
            <motion.div
              className="flex flex-col xl:flex-row gap-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="w-full xl:w-[65%] dark: bg-white border p-8 md:p-12 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <JobTitle job={job}/> 
                <JobDetails job={job}/> 
                <JobActions job={job}/>    
                <JobInfo job={job} fadeIn={fadeIn} />
              </motion.div>

              <motion.div
                className="w-full xl:w-[35%] flex flex-col  gap-8"
                variants={fadeIn}
              >
                <div className='flex flex-col md:flex-row xl:flex-col items-end gap-8'>
                  <div className='w-full md:w-[40%] xl:w-full'>
                    <JobAgency job={job} />
                  </div>
                  <div className='w-full md:w-[60%] xl:w-full'>
                    <JobMap job={job} />
                  </div>
                </div>
                <SimilarJobs jobId={jobId} />
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div></>
    );
  }
};

export default Job;
