import { MapPin, PhoneCall, Send } from "lucide-react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[url(/footer-pattern.svg)] bg-cover w-full h-[300px] sm:h-[400px] lg:h-[488px] bg-no-repeat"></div>
      <div className="bg-[url(/footer-bg.svg)] bg-cover w-full bg-no-repeat mt-[-100px] sm:mt-[-140px] lg:mt-[-170px] pb-[60px] lg:pb-[112px]">
        <div className="container mx-auto px-4 space-y-[60px] lg:space-y-[112px]">
          
          <div className="py-[30px] lg:py-[50px] text-center space-y-[24px] lg:space-y-[34px] mx-auto">
            <button 
              className="px-4 sm:px-6 py-3 sm:py-4 bg-[#35EFC1] cursor-pointer rounded-t-[28px] rounded-bl-[28px] uppercase primary-font-semibold text-[#053689] transition-colors hover:bg-[#2dd4aa]"
            >
              schedule A demo
            </button>
            <p className="text-lg sm:text-xl primary-font-regular text-white max-w-[999px] mx-auto px-4">
              Experience how Dozee transforms Skilled Nursing beds into smart, contactless monitoring units. Get a personalized demo tailored to your facility's needs and explore the impact.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[125px]">
            
            <div className="lg:w-[614px] w-full space-y-[40px] lg:space-y-[65px]">
              
              <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[60px] lg:gap-[113px] items-start sm:items-center">
                <img src="/Logo-white.svg" alt="logo" className=" sm:h-20" />
                <div className="space-y-[14px]">
                  <h2 className="text-white primary-font-light text-sm sm:text-base">Follow us on</h2>
                  <div className="flex gap-[15px] sm:gap-[16px] items-center">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src="/facebook.svg" alt="Facebook" className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src="/x.svg" alt="X (Twitter)" className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src="/youtube.svg" alt="YouTube" className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src="/instagram.svg" alt="Instagram" className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email Address" 
                    className="rounded-t-[28px] rounded-bl-[28px] px-[20px] sm:px-[30px] py-[16px] sm:py-[16px] primary-font-light text-[16px] sm:text-[20px] bg-white  w-full" 
                  />
                  <button 
                    className="sm:absolute sm:right-1 sm:top-1 px-4 sm:px-6 py-3 sm:py-4 bg-[#0055D2] cursor-pointer rounded-t-[28px] rounded-bl-[28px] uppercase primary-font-semibold text-white hover:bg-[#003fa6] transition-colors text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Subscribe NewsLetter</span>
                    <span className="sm:hidden">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
              
              <div className="space-y-[20px] lg:space-y-[30px]">
                <h2 className="text-[#94BEF1] text-[20px] primary-font-regular">Quick Links</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4 lg:gap-6 w-full sm:w-[210px]">
                    <NavLink to="/" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Home Page</NavLink>
                    <NavLink to="/about" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">About Us</NavLink>
                    <NavLink to="/solution" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Our Solution</NavLink>
                    <NavLink to="/dozen" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Dozee for Home</NavLink>
                    <NavLink to="/download" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Downloads</NavLink>
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-6 w-full sm:w-[210px]">
                    <NavLink to="/blog" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Blogs</NavLink>
                    <NavLink to="/publication" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Publication</NavLink>
                    <NavLink to="/media" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Media</NavLink>
                    <NavLink to="/career" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Career</NavLink>
                    <NavLink to="/contact" className="primary-font-regular text-white text-lg hover:text-[#94BEF1] transition-colors">Contact Us</NavLink>
                  </div>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6 min-w-0">
                <div className="space-y-2">
                  <h2 className="text-[#94BEF1] text-xl primary-font-regular">Give us a ring</h2>
                  <div className="flex items-center gap-2 text-white text-[18px] lg:text-[20px] primary-font-semibold">
                    <PhoneCall className="text-white flex-shrink-0" size={20} /> 
                    <span className="break-all">+91 8884436933</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-[#94BEF1] text-xl primary-font-regular">For Queries</h2>
                  <div className="flex items-center gap-2 text-white text-[18px] lg:text-[20px] primary-font-semibold">
                    <Send className="text-white flex-shrink-0" size={20} /> 
                    <span className="break-all">contact@dozee.io</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-[#94BEF1] text-xl primary-font-regular">Address</h2>
                  <div className="flex gap-2 text-white text-[18px] lg:text-[20px] primary-font-semibold">
                    <MapPin className="text-white flex-shrink-0 mt-0.5" size={20} /> 
                    <span>10795 Hammerly Blvd, Houston, TX 77043</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#053689] py-[11px]">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="primary-font-regular text-[16px] text-[#94BEF1] text-center sm:text-left">
            ©Dozee Inc. 2025. All Rights Reserved.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[54px]">
            <NavLink to="/terms" className="primary-font-regular text-[16px] text-[#94BEF1] hover:text-white transition-colors">
              Terms & Conditions
            </NavLink>
            <NavLink to="/privacy" className="primary-font-regular text-[16px] text-[#94BEF1] hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/termsofuse" className="primary-font-regular text-[16px] text-[#94BEF1] hover:text-white transition-colors">
              Terms of Use
            </NavLink>
          </div>
        </div>
      </div>

      <div className="py-3.5 text-center px-4">
        <h2 className="primary-font-regular text-sm  text-[#495566] leading-relaxed">
          Dozee requires trained medical professionals to interpret reports and act on alerts. Both healthcare providers and patients are bound by the Terms and Conditions and Privacy Policy of Dozee.
        </h2>
      </div>
    </footer>
  )
}

export default Footer
