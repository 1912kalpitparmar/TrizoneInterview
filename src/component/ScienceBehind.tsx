import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const ScienceBehind = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      id: '01',
      title: 'Contactless Proprietary Ballistocardiography',
      content: [
        'Uses proprietary Ballistocardiography (BCG) technology to capture micro and macro vibrations from cardiac and respiratory activity.',
        'Sensor is placed under the mattress, no leads, cords, or wearables required.',
        'Tracks heartbeat, respiration, posture shifts, tremors, and potential seizures without physical contact.'
      ],
      image: '/Contactless.png'
    },
    {
      id: '02',
      title: 'Continuous Vitals Monitoring',
      content: [
        'Real-time tracking of heart rate, respiratory rate, and sleep patterns.',
        'Automatic detection of vital sign anomalies and irregular patterns.',
        'Historical data analysis for trend identification and health insights.'
      ],
      image: '/Continuous.jpg'
    },
    {
      id: '03',
      title: 'Early Warning System',
      content: [
        'Intelligent alerts for healthcare providers when critical changes are detected.',
        'Predictive analytics to identify potential health emergencies before they occur.',
        'Customizable threshold settings for different patient conditions.'
      ],
      image: '/Early.jpg'
    },
    {
      id: '04',
      title: 'Built for Interoperability and Security',
      content: [
        'HIPAA compliant data handling and storage protocols.',
        'Seamless integration with existing hospital management systems.',
        'Encrypted data transmission and secure cloud infrastructure.'
      ],
      image: '/Built.jpg'
    }
  ];

  const handleAccordionClick = (index:any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <section className="bg-[#F2F8FF] py-[110px] relative">
        
        
        <div className="container  mx-auto space-y-[42px] relative z-10">
          <div>
            <h2 className="text-[#0055D2] primary-font-semibold text-[64px] text-center max-md:text-[40px]">
              The Science Behind Dozee
            </h2>
          </div>
          
          <div className="flex items-center gap-16 max-lg:flex-col max-lg:gap-8">
            <div className="w-2/4 max-lg:w-full space-y-4 relative">
              {accordionData.map((item, index) => (
                <div 
                  key={index} 
                  className={`container-box z-50 lg:px-0 px-4 ${
                    activeIndex === index 
                      ? '' 
                      : ''
                  }`}
                >
                  <div 
                    className="flex items-center py-6 lg:p-6 cursor-pointer z-10"
                    onClick={() => handleAccordionClick(index)}
                  >
                    <div className="flex-shrink relative-0 w-12 h-12 bg-[#0055D2] text-white rounded-t-full rounded-bl-full  flex items-center justify-center font-bold text-lg mr-4 z-10">
                      {item.id}
                    </div>
                                        
                    <h3 className="flex-1 text-xl font-semibold text-gray-800 leading-6">
                      {item.title}
                    </h3>
                    
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown />
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 lg:w-[87%] ml-auto ${
                    activeIndex === index ? 'max-h-96 opacity-100 bg-white p-6 rounded-t-[28px] rounded-bl-[28px]' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-4">
                      {item.content.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <img src="/accordian-tick.svg" alt="accordian" className="w-[26px]" />
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${
                      activeIndex === index ? 'block mt-6' : 'hidden'
                    }`}>
                  <img 
                    src={accordionData[activeIndex]?.image || accordionData[0].image} 
                    alt={accordionData[activeIndex]?.title || accordionData[0].title}
                    className="w-full h-auto object-cover transition-opacity duration-500 sm:hidden block"
                  />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-2/4 max-lg:w-full flex justify-center items-center sm:block hidden">
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={accordionData[activeIndex]?.image || accordionData[0].image} 
                    alt={accordionData[activeIndex]?.title || accordionData[0].title}
                    className="w-full h-auto object-cover transition-opacity duration-500"
                  />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScienceBehind;
