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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Core competencies</p>
        <h2 className={styles.sectionHeadTextLight}>Skills.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-14 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="px-6 py-3 bg-jet border border-jetGray rounded-lg hover:border-french hover:bg-jetLight transition-all duration-300 hover:scale-105"
          >
            <p className="text-timberWolf text-[14px] sm:text-[16px] font-medium font-poppins whitespace-nowrap">
              <span className="text-[18px] sm:text-[20px] mr-2">{skill.emoji}</span>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
