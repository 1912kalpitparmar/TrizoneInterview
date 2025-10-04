import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const accordionData = [
    {
      id: '1',
      title: 'What is Remote Patient Monitoring?',
      content: "Remote Patient Monitoring (RPM) is a healthcare method that allows clinicians to track patients' vital health data outside traditional clinical settings. With platforms like Dozee's automated remote patient monitoring platform, patients can be monitored through a vital signs monitor placed beneath the mattress, without any wires or discomfort. This enables proactive, non-intrusive care, even in long-term or step-down care setups.",
    },
    {
      id: '2',
      title: 'Is remote patient monitoring FDA-approved?',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
    },
    {
      id: '3',
      title: 'How does a patient monitoring system work?',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
    },
    {
      id: '4',
      title: 'What are the benefits of remote monitoring?',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
    },
    {
      id: '5',
      title: 'How accurate is the monitoring technology?',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="pt-[60px] lg:pt-[112px]">
      <div className="container mx-auto px-4 space-y-[60px] lg:space-y-[95px] pt-[40px] lg:pt-[75px]">
        
        <div>
          <h2 className="text-[#0055D2] primary-font-semibold text-[32px] sm:text-[40px] lg:text-[64px] text-center leading-tight">
            FAQ's
          </h2>
        </div>

        <div className="space-y-[16px] sm:space-y-[24px] lg:space-y-[32px] max-w-6xl mx-auto">
          {accordionData.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-[#E4F0FF] rounded-t-[20px] sm:rounded-t-[24px] lg:rounded-t-[28px] rounded-bl-[20px] sm:rounded-bl-[24px] lg:rounded-bl-[28px] overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div 
                className="flex items-center justify-between cursor-pointer py-[24px] sm:py-[35px] lg:py-[53px] px-[20px] sm:px-[40px] lg:px-[65px] group"
                onClick={() => handleAccordionClick(index)}
              >
                <h3 className="flex-1 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] primary-font-semibold text-[#053689] leading-tight pr-4 group-hover:text-[#0055D2] transition-colors">
                  {item.title}
                </h3>
                
                <div className={`flex-shrink-0 transition-all duration-300 text-[#053689] group-hover:text-[#0055D2] ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index 
                  ? 'max-h-[500px] opacity-100 pb-[24px] sm:pb-[35px] lg:pb-[53px]' 
                  : 'max-h-0 opacity-0 pb-0'
              }`}>
                <div className="px-[20px] sm:px-[40px] lg:px-[65px]">
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] primary-font-regular text-[#495566] leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
