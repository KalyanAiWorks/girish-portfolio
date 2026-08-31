import { useState } from 'react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
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
• Contact details

Try: "What are Girish’s skills?"`;
  };

  const sendMessage = (customText) => {
    const question = (customText || input).trim();
    if (!question) return;

    const answer = getAnswer(question);

    setMessages((prev) => [
      ...prev,
      { type: 'user', text: question },
      { type: 'bot', text: answer },
    ]);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="mb-4 w-[340px] sm:w-[390px] h-[540px] overflow-hidden rounded-[24px] border border-white/10 bg-black/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] flex flex-col">

          <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                  Premium Resume Assistant
                </p>
                <h3 className="mt-1 text-white text-[18px] font-semibold">
                  Ask Girish
                </h3>
                <p className="mt-1 text-[12px] text-white/55">
                  Business Development • ERP Sales • Client Relations
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          <div className="px-4 pt-3 pb-2 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-white/75 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                    message.type === 'user'
                      ? 'bg-white text-black shadow-md'
                      : 'border border-white/10 bg-white/[0.05] text-white/85'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Girish..."
                className="flex-1 bg-transparent px-3 py-2 text-[13px] text-white placeholder:text-white/35 outline-none"
              />
              <button
                onClick={() => sendMessage()}
                className="rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-black transition hover:scale-105"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/85 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:scale-110"
        aria-label="Ask Girish"
      >
        <span className="text-2xl">{open ? '×' : '💬'}</span>
      </button>
    </div>
  );
};

export default ChatBot;
