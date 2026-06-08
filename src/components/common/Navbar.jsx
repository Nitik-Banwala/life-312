import { useState } from "react";
import Icons from "./Icons";
import { NAV_LINKS } from "../../../utils/helper";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
  };


  return (
    <div>
      <div className="max-w-[1612.1px] pt-7 w-full relative z-30 justify-between flex flex-row mx-auto px-4 lg:px-0">
        <div className="max-w-26">
          <a href="/">
            <Icons icon={"logo"} />
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col justify-center gap-1.5 z-100 relative w-6 h-6">
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
        </button>

        <div className="hidden lg:flex w-[973.1px] justify-between pr-3 mt-1 h-[60.1px] rounded-[90px] bg-white/1 border items-center flex-row pl-8.5 border-white/5 backdrop-blur-md">
          <div className="flex flex-row max-w-[520.1px] w-full justify-between">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                <a
                  href="#"
                  className="text-white hover:text-white/50 hover:underline duration-500 text-base font-medium leading-none"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
          <div className="w-fit">
            <Icons icon={"line"} />
          </div>
          <div className="flex flex-row gap-4">
            <div className="relative inline-block">
              <div onClick={() => setLanguageOpen(!languageOpen)}>
                <Button variant="primary">
                  <Icons icon="earth" />
                  <p className="ml-2 mr-3 font-semibold text-base leading-none">
                    {selectedLanguage}
                  </p>
                  <div
                    className={`transition-transform duration-300 ${languageOpen ? "rotate-180" : ""
                      }`}
                  >
                    <Icons icon="down" />
                  </div>
                </Button>
              </div>

              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 min-w-[100px] rounded-lg bg-white shadow-lg overflow-hidden z-50">
                  <button
                    className="w-full px-4 cursor-pointer py-2 text-left hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("TR")}
                  >
                    TR
                  </button>

                  <button
                    className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("EN")}
                  >
                    EN
                  </button>

                  <button
                    className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("DE")}
                  >
                    DE
                  </button>
                </div>
              )}
            </div>

            <Button variant="secondary">
              <Icons icon={"phone"} />
              <p className="font-bold leading-none text-base ml-2.5">
                0 (312) 911 30 60
              </p>
            </Button>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(false)} className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-[320px] bg-dark z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`} >
          <div className="pt-24 px-6">
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <Button variant="primary">
                <Icons icon={"earth"} />
                <p className="ml-2 mr-3 font-semibold text-base">TR</p>
                <Icons icon={"down"} />
              </Button>

              <Button variant="secondary">
                <Icons icon={"phone"} />
                <p className="font-bold text-base ml-2.5">
                  0 (312) 911 30 60
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;