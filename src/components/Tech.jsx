import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const skills = [
    { emoji: '💼', name: 'Business Development' },
    { emoji: '🏢', name: 'Salesforce' },
    { emoji: '⚙️', name: 'Oracle NetSuite ERP' },
    { emoji: '🔷', name: 'SAP' },
    { emoji: '🪟', name: 'Microsoft D365' },
    { emoji: '📇', name: 'ZOHO CRM / HubSpot' },
    { emoji: '📞', name: 'Cold Calling' },
    { emoji: '📧', name: 'Email Campaigns' },
    { emoji: '🎯', name: 'Lead Generation' },
    { emoji: '🔍', name: 'Market Research' },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Core competencies</p>
        <h2 className={styles.sectionHeadTextLight}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-wrap justify-center items-center gap-4 mt-14 w-full"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{
              y: -7,
              scale: 1.06,
              boxShadow: '0 0 28px rgba(139, 92, 246, 0.45)',
            }}
            transition={{ duration: 0.25 }}
            className="px-6 py-3 bg-jet border border-jetGray rounded-lg hover:border-french cursor-default"
          >
            <p className="text-timberWolf text-[14px] sm:text-[16px] font-medium font-poppins whitespace-nowrap">
              <motion.span
                className="text-[18px] sm:text-[20px] mr-2 inline-block"
                whileHover={{
                  rotate: [0, -12, 12, -8, 8, 0],
                  scale: 1.2,
                }}
                transition={{ duration: 0.5 }}
              >
                {skill.emoji}
              </motion.span>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, '');
