import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JobInfo = ({ job }) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(true);
  const [isJobDescOpen, setJobDescOpen] = useState(true);
  const [isResponsabilitiesOpen, setResponsabilitiesOpen] = useState(true);
  const [isAdditionalInfoOpen, setAdditionalInfoOpen] = useState(true);
  const [isSkillsOpen, setSkillsOpen] = useState(true);

  const toggleSection = (section) => {
    switch (section) {
      case 'description':
        setDescriptionOpen(!isDescriptionOpen);
        break;
      case 'job':
        setJobDescOpen(!isJobDescOpen);
        break;
      case 'responsabilities':
        setResponsabilitiesOpen(!isResponsabilitiesOpen);
        break;
      case 'additional':
        setAdditionalInfoOpen(!isAdditionalInfoOpen);
        break;
      case 'skills':
        setSkillsOpen(!isSkillsOpen);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div      initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="space-y-8 pt-8">
      {job?.offer_description && (
        <motion.div className="space-y-2 text-left">
          <h2
            className="text-md md:text-lg font-semibold mb-7 pb-7 cursor-pointer flex items-center justify-between group border-b"
            onClick={() => toggleSection('description')}
          >
            Description de l'offre
            <span className="ml-2 group-hover:dark:text-amber-500">
              {isDescriptionOpen ? '-' : '+'}
            </span>
          </h2>
          <AnimatePresence>
            {isDescriptionOpen && (
              <motion.div
                className="text-xs sm:text-sm lg:text-md whitespace-pre-line"
                initial="hidden"
                animate="visible"
                exit="hidden"
                dangerouslySetInnerHTML={{
                  __html: job.offer_description.replace(/<p>/g, '<p class="mb-4">'),
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {job?.job_description && (
        <motion.div className="space-y-2 text-left">
          <h2
            className="text-md md:text-lg font-semibold mb-7 pb-7 cursor-pointer flex items-center justify-between group border-b"
            onClick={() => toggleSection('job')}
          >
            Description du poste
            <span className="ml-2 group-hover:dark:text-amber-500">
              {isJobDescOpen ? '-' : '+'}
            </span>
          </h2>
          <AnimatePresence>
            {isJobDescOpen && (
              <motion.div
                className="text-xs sm:text-sm lg:text-md whitespace-pre-line"
                initial="hidden"
                animate="visible"
                exit="hidden"
                dangerouslySetInnerHTML={{
                  __html: job.job_description.replace(/<p>/g, '<p class="mb-4">'),
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {job?.responsability_description && (
        <motion.div className="space-y-2 text-left">
          <h2
            className="text-md md:text-lg font-semibold mb-7 pb-7 cursor-pointer flex items-center justify-between group border-b"
            onClick={() => toggleSection('responsabilities')}
          >
            Responsabilités
            <span className="ml-2 group-hover:dark:text-amber-500">
              {isResponsabilitiesOpen ? '-' : '+'}
            </span>
          </h2>
          <AnimatePresence>
            {isResponsabilitiesOpen && (
              <motion.div
                className="text-xs sm:text-sm lg:text-md whitespace-pre-line"
                initial="hidden"
                animate="visible"
                exit="hidden"
                dangerouslySetInnerHTML={{
                  __html: job.responsability_description.replace(/<p>/g, '<p class="mb-4">'),
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {job?.miscellaneous && (
        <motion.div className="space-y-2 text-left">
          <h2
            className="text-md md:text-lg font-semibold mb-7 pb-7 cursor-pointer flex items-center justify-between group border-b"
            onClick={() => toggleSection('additional')}
          >
            Informations complémentaires
            <span className="ml-2 group-hover:dark:text-amber-500">
              {isAdditionalInfoOpen ? '-' : '+'}
            </span>
          </h2>
          <AnimatePresence>
            {isAdditionalInfoOpen && (
              <motion.div
                className="text-xs sm:text-sm lg:text-md whitespace-pre-line"
                initial="hidden"
                animate="visible"
                exit="hidden"
                dangerouslySetInnerHTML={{
                  __html: job.miscellaneous.replace(/<p>/g, '<p class="mb-4">'),
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobInfo;
