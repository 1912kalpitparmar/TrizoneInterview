
const CTA = () => {
  return (
    <section className="bg-[url(cta-bg.svg)] bg-cover bg-no-repeat text-center py-[78px]">
        <h2 className="text-[#ffffff] primary-font-semibold text-[64px] mb-[20px] text-center max-md:text-[40px]">
          Download Brochure
        </h2>
        <p className="text-lg sm:text-xl primary-font-regular text-white max-w-[999px] mx-auto px-4 mb-[42px]">
          Want to know more? Access the Dozee brochure here.
        </p>
        <button 
          className="px-4 sm:px-6 py-3 sm:py-4 bg-[#35EFC1] cursor-pointer rounded-t-[28px] rounded-bl-[28px] uppercase primary-font-semibold text-[#053689] transition-colors hover:bg-[#2dd4aa]"
        >
          Download
        </button>
    </section>
  )
}

export default CTA