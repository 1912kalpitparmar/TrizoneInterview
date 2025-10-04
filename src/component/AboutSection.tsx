
const AboutSection = () => {
  return (
    <>
        <section className="bg-[url(/about-bg.png)]  bg-no-repeat pt-[144px] pb-[236px]">
            <div className="container mx-auto lg:px-0 px-4 flex lg:flex-row flex-col">
                <div className="lg:w-2/4 w-full">
                    <img src="about-image.png" alt="image" />
                </div>
                <div className="lg:w-2/4 w-full lg:text-left text-center">
                    <h2 className="text-[#0055D2] text-[64px] primary-font-semibold">Dozee VS</h2>
                    <p className="text-[#495566] primar-font-regular">Dozee VS transforms beds into intelligent monitoring systems that deliver proactive, contactless, and clinically validated care. With its remote monitoring platform and a suite of smart devices, Dozee VS provides continuous, non-intrusive insights into heart rate, respiratory rate, oxygen saturation, temperature, and blood pressure. Designed for ease, precision, and adaptability, it reduces workload, enhances patient safety, and enables timely clinical decisions, bringing critical care monitoring beyond the ICU.</p>
                </div>
            </div>
        </section>
    </>
 )
}

export default AboutSection