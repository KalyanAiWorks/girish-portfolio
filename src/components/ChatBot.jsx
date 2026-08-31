import { useState } from 'react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Girish's portfolio assistant. Ask me about his experience, skills, ERP expertise, companies, education, or contact details.",
    },
  ]);

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
• Product Demonstrations
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
      return "Girish has business development experience with Oracle, Oracle NetSuite ERP, SAP, Microsoft Dynamics 365 and related enterprise solutions.";
    }

    if (
      q.includes('salesforce') ||
      q.includes('crm') ||
      q.includes('hubspot') ||
      q.includes('zoho')
    ) {
      return "Girish has experience managing prospect databases and sales activities using Salesforce, ZOHO CRM and HubSpot, along with ERP and CRM-driven customer analysis.";
    }

    if (
      q.includes('lead') ||
      q.includes('prospect') ||
      q.includes('cold call') ||
      q.includes('email campaign')
    ) {
      return "Girish has strong inside-sales and lead-generation experience using cold calling, email campaigns, social media marketing, account research, prospecting and market intelligence to build sales pipelines.";
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
      return "At Forsys, Inc., Girish worked as Business Development Manager for Salesforce, Oracle and Oracle NetSuite ERP solutions from December 2023 to March 2025.";
    }

    if (q.includes('prospecta')) {
      return "At Prospecta Software, Girish worked as Business Development Manager for SAP, Oracle and Oracle NetSuite ERP from August 2022 to December 2023.";
    }

    if (q.includes('valuelabs')) {
      return "At ValueLabs, Girish managed business development across SAP, Microsoft D365, Oracle and Oracle NetSuite ERP from April 2021 to March 2022.";
    }

    return `I can answer questions about Girish's:

• Experience
• Companies
• Skills
• Oracle NetSuite / SAP / D365
• Salesforce / CRM
• Lead Generation
• Education
• Contact details

Try asking: "What are Girish's skills?"`;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const question = input.trim();
    const answer = getAnswer(question);

    setMessages((prev) => [
      ...prev,
      { type: 'user', text: question },
      { type: 'bot', text: answer },
    ]);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="mb-4 w-[340px] sm:w-[380px] h-[500px] bg-[#111111] border border-[#6c63ff]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

          <div className="px-5 py-4 bg-[#171717] border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold text-[17px]">
                Ask Girish
              </h3>
              <p className="text-gray-400 text-[11px]">
                Resume Assistant
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-xl text-[13px] leading-relaxed whitespace-pre-line ${
                    message.type === 'user'
                      ? 'bg-[#6c63ff] text-white'
                      : 'bg-[#202020] text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/10 bg-[#171717]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Girish..."
                className="flex-1 bg-[#252525] text-white text-[13px] px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-[#6c63ff]"
              />

              <button
                onClick={sendMessage}
                className="bg-[#6c63ff] hover:scale-105 transition-transform text-white px-4 rounded-xl font-semibold"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-[#6c63ff] text-white shadow-[0_0_30px_rgba(108,99,255,0.5)] hover:scale-110 transition-transform flex items-center justify-center text-2xl"
        aria-label="Ask Girish"
      >
        {open ? '×' : '💬'}
      </button>
    </div>
  );
};

export default ChatBot;
