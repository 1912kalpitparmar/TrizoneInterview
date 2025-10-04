import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between py-3.5">
          <div>
            <img src="/Logo.svg" alt="Logo" className="w-[112px]" />
          </div>

          <div className="hidden lg:flex">
            <div className="flex items-center gap-12">
              <div className="flex gap-8">
                <NavLink 
                  to="/ourProduct" 
                  className={({ isActive }) => (
                    isActive 
                      ? "primary-font-regular font-semibold nav-bar nav-shadow underline underline-offset-4 decoration-[#0055D2]" 
                      : "primary-font-regular font-semibold nav-bar hover:text-[#0055D2] transition-colors"
                  )}
                >
                  Our Product
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (
                    isActive 
                      ? "primary-font-regular font-semibold nav-bar nav-shadow underline underline-offset-4 decoration-[#0055D2]" 
                      : "primary-font-regular font-semibold nav-bar hover:text-[#0055D2] transition-colors"
                  )}
                >
                  About us
                </NavLink>
                <NavLink 
                  to="/Resource" 
                  className={({ isActive }) => (
                    isActive 
                      ? "primary-font-regular font-semibold nav-bar nav-shadow underline underline-offset-4 decoration-[#0055D2]" 
                      : "primary-font-regular font-semibold nav-bar hover:text-[#0055D2] transition-colors"
                  )}
                >
                  Resource
                </NavLink>
                <NavLink 
                  to="/career" 
                  className={({ isActive }) => (
                    isActive 
                      ? "primary-font-regular font-semibold nav-bar nav-shadow underline underline-offset-4 decoration-[#0055D2]" 
                      : "primary-font-regular font-semibold nav-bar hover:text-[#0055D2] transition-colors"
                  )}
                >
                  Career
                </NavLink>
              </div>
              <button className="px-6 lg:px-9 py-3 lg:py-[18px] bg-[#0055D2] cursor-pointer rounded-t-[24px] rounded-bl-[24px] uppercase primary-font-semibold text-white hover:bg-[#003fa6] transition-colors">
                schedule A demo
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t transform transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6">
              <NavLink 
                to="/ourProduct" 
                onClick={closeMobileMenu}
                className={({ isActive }) => (
                  isActive 
                    ? "primary-font-regular font-semibold text-[#0055D2] border-l-4 border-[#0055D2] pl-4 py-2" 
                    : "primary-font-regular font-semibold text-gray-800 hover:text-[#0055D2] hover:border-l-4 hover:border-[#0055D2] hover:pl-4 py-2 transition-all"
                )}
              >
                Our Product
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={closeMobileMenu}
                className={({ isActive }) => (
                  isActive 
                    ? "primary-font-regular font-semibold text-[#0055D2] border-l-4 border-[#0055D2] pl-4 py-2" 
                    : "primary-font-regular font-semibold text-gray-800 hover:text-[#0055D2] hover:border-l-4 hover:border-[#0055D2] hover:pl-4 py-2 transition-all"
                )}
              >
                About us
              </NavLink>
              <NavLink 
                to="/Resource" 
                onClick={closeMobileMenu}
                className={({ isActive }) => (
                  isActive 
                    ? "primary-font-regular font-semibold text-[#0055D2] border-l-4 border-[#0055D2] pl-4 py-2" 
                    : "primary-font-regular font-semibold text-gray-800 hover:text-[#0055D2] hover:border-l-4 hover:border-[#0055D2] hover:pl-4 py-2 transition-all"
                )}
              >
                Resource
              </NavLink>
              <NavLink 
                to="/career" 
                onClick={closeMobileMenu}
                className={({ isActive }) => (
                  isActive 
                    ? "primary-font-regular font-semibold text-[#0055D2] border-l-4 border-[#0055D2] pl-4 py-2" 
                    : "primary-font-regular font-semibold text-gray-800 hover:text-[#0055D2] hover:border-l-4 hover:border-[#0055D2] hover:pl-4 py-2 transition-all"
                )}
              >
                Career
              </NavLink>
              <button 
                onClick={closeMobileMenu}
                className="w-full px-6 py-4 bg-[#0055D2] cursor-pointer rounded-t-[28px] rounded-bl-[28px] uppercase primary-font-semibold text-white hover:bg-[#003fa6] transition-colors mt-4"
              >
                schedule A demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  )
}

export default Header
