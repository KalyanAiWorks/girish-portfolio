import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  const skills = [
    { emoji: '💰', name: 'Sales & BD' },
    { emoji: '📞', name: 'Voice Process' },
    { emoji: '🤝', name: 'Customer Service' },
    { emoji: '👥', name: 'Team Leadership' },
    { emoji: '🚨', name: 'Escalation Handling' },
    { emoji: '📊', name: 'Sales Reporting' },
    { emoji: '📑', name: 'Microsoft Excel' },
    { emoji: '📽️', name: 'PowerPoint' },
    { emoji: '🗣️', name: 'English / Hindi / Telugu' },
    { emoji: '🌐', name: 'B2B Outreach' },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Core competencies</p>
        <h2 className={styles.sectionHeadTextLight}>Skills.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-14">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeIn('up', 'spring', 0.1 * index, 0.5)}
            className="px-6 py-3 bg-jet border border-jetGray rounded-lg hover:border-french hover:bg-jetLight transition-all duration-300 ease-in-out transform hover:scale-105">
            <p className="text-timberWolf text-[14px] sm:text-[16px] font-medium font-poppins whitespace-nowrap">
              <span className="text-[18px] sm:text-[20px] mr-2">{skill.emoji}</span>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
