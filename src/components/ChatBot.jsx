import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello — I’m Girish’s portfolio assistant. Ask me about his experience, skills, ERP expertise, companies, education, or contact details.",
    },
  ]);

  const suggestions = [
    'What are Girish’s skills?',
    'How much experience does Girish have?',
    'Which companies did he work at?',
    'How can I contact Girish?',
  ];

  const getAnswer = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes('experience') ||
      q.includes('years') ||
      q.includes('about girish') ||
      q.includes('profile')
    ) {
      return "Girish Kumar is a Sales & Business Development professional with 10 years of experience in Sales & Marketing, Business Development, Client Relationship Management, ERP sales, lead generation, and enterprise client acquisition.";
    }

    if (
      q.includes('company') ||
      q.includes('companies') ||
      q.includes('worked') ||
      q.includes('work history') ||
      q.includes('employment')
    ) {
      return `Girish has worked with:

• Forsys, Inc. — Business Development Manager
• Prospecta Software — Business Development Manager
• Speridian Technologies — Business Development Manager
• ValueLabs — Business Development Manager
• Idexcel Technologies — Sr. Business Development Executive
• The Global Associates — Business Development Executive`;
    }

    if (
      q.includes('skill') ||
      q.includes('competenc') ||
      q.includes('expertise')
    ) {
      return `Girish's core skills include:

• Business Development
• Sales & Marketing
• Lead Generation
• Client Relationship Management
• Account Management
• Cold Calling
• Email Campaigns
• Market Research & Analysis
• Pre-Sales & Post-Sales
• B2B Marketing Strategy
• Product Demonstration
• Industry Mapping`;
    }

    if (
      q.includes('erp') ||
      q.includes('oracle') ||
      q.includes('netsuite') ||
      q.includes('sap') ||
      q.includes('d365') ||
      q.includes('microsoft')
    ) {
      return "Girish has business development experience with Oracle, Oracle NetSuite ERP, SAP, Microsoft Dynamics 365, and enterprise solution sales.";
    }

    if (
      q.includes('salesforce') ||
      q.includes('crm') ||
      q.includes('hubspot') ||
      q.includes('zoho')
    ) {
      return "Girish has experience using Salesforce, ZOHO CRM, and HubSpot, along with ERP and CRM-driven customer analysis and pipeline management.";
    }

    if (
      q.includes('lead') ||
      q.includes('prospect') ||
      q.includes('cold call') ||
      q.includes('email campaign')
    ) {
      return "Girish has strong inside-sales and lead-generation experience using cold calling, email campaigns, prospect research, social media outreach, and market intelligence to build qualified pipelines.";
    }

    if (
      q.includes('education') ||
      q.includes('degree') ||
      q.includes('college') ||
      q.includes('study')
    ) {
      return "Girish completed a Bachelor of Technology in Computer Science Engineering from JNTUA.";
    }

    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('mobile')
    ) {
      return `You can contact Girish at:

Email: gireesh.kumar007@outlook.com
Phone: +91 7675062526`;
    }

    if (q.includes('forsys')) {
      return "At Forsys, Inc., Girish worked as Business Development Manager for Salesforce, Oracle, and Oracle NetSuite ERP solutions from December 2023 to March 2025.";
    }

    if (q.includes('prospecta')) {
      return "At Prospecta Software, Girish worked as Business Development Manager for SAP, Oracle, and Oracle NetSuite ERP from August 2022 to December 2023.";
    }

    if (q.includes('valuelabs')) {
      return "At ValueLabs, Girish managed business development across SAP, Microsoft D365, Oracle, and Oracle NetSuite ERP from April 2021 to March 2022.";
    }

    return `I can help with:

• Experience
• Skills
• Companies
• ERP expertise
• Salesforce / CRM
• Lead generation
• Education
• Contact details`;
  };

  const sendMessage = (customText) => {
    const question = (customText || input).trim();
    if (!question || typing) return;

    setMessages((prev) => [
      ...prev,
      { type: 'user', text: question },
    ]);

    setInput('');
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: getAnswer(question) },
      ]);

      setTyping(false);
    }, 850);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 80,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
            }}
            className="mb-4 w-[340px] sm:w-[390px] h-[540px] overflow-hidden rounded-[24px] border border-white/10 bg-black/90 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.65)] flex flex-col"
          >

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="border-b border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Portfolio Intelligence
                  </p>

                  <h3 className="mt-1 text-white text-[19px] font-semibold">
                    Ask Girish
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <motion.span
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-2 h-2 bg-white rounded-full"
                    />

                    <p className="text-[11px] text-white/50">
                      Resume Assistant • Online
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                >
                  ×
                </motion.button>
              </div>
            </motion.div>

            <div className="px-4 pt-3 pb-2 border-b border-white/10">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.07,
                    }}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => sendMessage(item)}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-white/70 hover:bg-white/[0.09] hover:text-white"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={`${index}-${message.text}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex ${
                      message.type === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                        message.type === 'user'
                          ? 'bg-white text-black shadow-lg'
                          : 'border border-white/10 bg-white/[0.05] text-white/85'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4">

                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 0.65,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                      />
                    ))}

                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="border-t border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2">

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Girish..."
                  className="flex-1 bg-transparent px-3 py-2 text-[13px] text-white placeholder:text-white/30 outline-none"
                />

                <motion.button
                  whileHover={{
                    scale: 1.06,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  onClick={() => sendMessage()}
                  className="rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-black"
                >
                  Send
                </motion.button>

              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <motion.div
          className="absolute inset-0 rounded-full border border-white/30"
          animate={{
            scale: [1, 1.6],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}

      <motion.button
        animate={
          open
            ? {}
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.12,
          rotate: -4,
        }}
        whileTap={{
          scale: 0.88,
        }}
        onClick={() => setOpen(!open)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/90 text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        aria-label="Ask Girish"
      >
        <motion.span
          animate={
            open
              ? { rotate: 180 }
              : {
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 1.8,
            repeat: open ? 0 : Infinity,
          }}
          className="text-2xl"
        >
          {open ? '×' : '💬'}
        </motion.span>
      </motion.button>

    </div>
  );
};

export default ChatBot;
