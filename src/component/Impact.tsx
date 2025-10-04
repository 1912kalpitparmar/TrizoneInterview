const Impact = () => {
  return (
    <section className="py-[60px] lg:py-[112px]">
        <div className="container mx-auto px-4 space-y-[60px] lg:space-y-[95px] py-[40px]">
            <div>
                <h2 className="text-[#0055D2] primary-font-semibold text-[32px] sm:text-[40px] lg:text-[64px] text-center leading-tight">
                Our Impact
                </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                <div className="flex items-center gap-3 sm:gap-4 p-4 lg:p-0 ">
                    <div className="flex-shrink-0">
                        <img src="/hospital.svg" alt="hospital" className="w-12 h-12 lg:w-auto lg:h-auto" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="primary-font-semibold text-[28px] lg:text-[35px] text-[#0055D2] leading-tight">300+</h3>
                        <p className="primary-font-regular text-[16px] lg:text-[18px] text-[#495566] leading-tight">Hospital Trust Us</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-4 lg:p-0">
                    <div className="flex-shrink-0">
                        <img src="/bed.svg" alt="bed" className="w-12 h-12 lg:w-auto lg:h-auto" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="primary-font-semibold text-[28px] lg:text-[35px] text-[#0055D2] leading-tight">18k+</h3>
                        <p className="primary-font-regular text-[16px] lg:text-[18px] text-[#495566] leading-tight">Dozee Beds</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-4 lg:p-0">
                    <div className="flex-shrink-0">
                        <img src="/hours.svg" alt="hours" className="w-12 h-12 lg:w-auto lg:h-auto" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="primary-font-semibold text-[28px] lg:text-[35px] text-[#0055D2] leading-tight">255k+</h3>
                        <p className="primary-font-regular text-[16px] lg:text-[18px] text-[#495566] leading-tight">Nursing Hours Saved</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-4 lg:p-0">
                    <div className="flex-shrink-0">
                        <img src="/lives.svg" alt="lives" className="w-12 h-12 lg:w-auto lg:h-auto" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="primary-font-semibold text-[28px] lg:text-[35px] text-[#0055D2] leading-tight">20M+</h3>
                        <p className="primary-font-regular text-[16px] lg:text-[18px] text-[#495566] leading-tight">Lives Improved</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-4 lg:p-0">
                    <div className="flex-shrink-0">
                        <img src="/lives.svg" alt="notification" className="w-12 h-12 lg:w-auto lg:h-auto" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="primary-font-semibold text-[28px] lg:text-[35px] text-[#0055D2] leading-tight">50k+</h3>
                        <p className="primary-font-regular text-[16px] lg:text-[18px] text-[#495566] leading-tight">Life-saving Notifications</p>
                    </div>
                </div>
            </div>
        </div> 
    </section>   
  )
}

export default Impact
