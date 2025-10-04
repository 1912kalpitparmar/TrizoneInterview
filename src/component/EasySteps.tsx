const EasySteps = () => {
  return (
    <section className="py-[60px] lg:py-[80px]">
      <div className="container mx-auto px-4 space-y-[40px] lg:space-y-[70px]">        
        <div>
          <h2 className="text-[#0055D2] primary-font-semibold text-[32px] sm:text-[40px] lg:text-[64px] text-center leading-tight">
            Easy Set-up in 3 Simple Steps
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[20px]">
          
          <div className="w-full lg:w-[25%] space-y-4 lg:space-y-6 text-center lg:text-right">
            <div className="flex justify-center lg:justify-end">
              <img src="step1.png" alt="step1" className="max-w-full h-auto" />
            </div>
            <div className="space-y-1">
              <h2 className="primary-font-semibold text-lg lg:text-xl text-[#0055D2]">Step 1</h2>
              <p className="primary-font-regular text-sm lg:text-base text-[#495566] leading-relaxed">
                Place the Dozee sensor sheet under any existing mattress, no wires, no adhesives
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[25%] space-y-4 lg:space-y-6 text-center lg:text-right">
            <div className="flex justify-center lg:justify-end">
              <img src="step2.png" alt="step1" className="max-w-full h-auto" />
            </div>
            <div className="space-y-1">
              <h2 className="primary-font-semibold text-lg lg:text-xl text-[#0055D2]">Step 2</h2>
              <p className="primary-font-regular text-sm lg:text-base text-[#495566] leading-relaxed">
                View vitals live on the bedside monitor or centralized nurse dashboard
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[25%] space-y-4 lg:space-y-6 text-center lg:text-right">
            <div className="flex justify-center lg:justify-end">
              <img src="step3.png" alt="step1" className="max-w-full h-auto" />
            </div>
            <div className="space-y-1">
              <h2 className="primary-font-semibold text-lg lg:text-xl text-[#0055D2]">Step 3</h2>
              <p className="primary-font-regular text-sm lg:text-base text-[#495566] leading-relaxed">
                Get proactive notifications and documentation synced to your EMR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasySteps;
