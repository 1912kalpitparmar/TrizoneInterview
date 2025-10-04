import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      id: '1.',
      title: 'Sensor Mat',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Contactless.png'
    },
    {
      id: '2.',
      title: 'SRPM Dashboard',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Continuous.jpg'
    },
    {
      id: '3.',
      title: 'Non-invasive Blood Pressure (NiBP)',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Early.jpg'
    },
    {
      id: '4.',
      title: 'Pulse Oximeter Watch',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Built.jpg'
    },
    {
      id: '5.',
      title: 'ECG Monitor Patch',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Built.jpg'
    },
    {
      id: '6.',
      title: 'Digital Thermometer',
      content: "Placed discreetly under the mattress, the sensor mat captures micro and macro vibrations from the body, tracking heartbeats, respiration cycles, and movements with clinical-grade precision. It enables contactless monitoring without disrupting patient comfort.",
      image: '/Built.jpg'
    },
  ];

  const handleAccordionClick = (index:any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <section className="bg-[#F2F8FF] py-[110px] relative">
        
        
        <div className="container  mx-auto space-y-[42px] relative z-10">
          <div className="flex items-center gap-16 max-lg:flex-col max-lg:gap-8">
            <div className="w-2/4 max-lg:w-full space-y-4 relative">
            <div>
                <h2 className="text-[#0055D2] primary-font-semibold text-[64px] text-center sm:text-center max-md:text-[40px]">
                Features
                </h2>
            </div>
              {accordionData.map((item, index) => (
                <div 
                  key={index} 
                  className={`z-50 lg:px-0 px-4`}
                >
                  <div 
                    className="flex items-center py-6 lg:p-6 cursor-pointer z-10"
                    onClick={() => handleAccordionClick(index)}
                  >
                   
                    <div className="flex-shrink rlex-1 text-xl font-semibold text-gray-800 leading-6 mr-4 ">
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
                  
                  <div className={`overflow-hidden transition-all duration-300 lg:w-[82%] mr-12 ml-auto ${
                    activeIndex === index ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
                  }`}>
                      {item.content}
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

export default Feature;
