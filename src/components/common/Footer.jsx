
import { FOOTER_LIST, SOCIAL_LINKS, PAGE_URLS }
    from "../../../utils/helper";
import Icons from "./Icons";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
const [selectedLanguage, setSelectedLanguage] = useState("Türkçe");

const languages = ["Türkçe", "English", "Deutsch"];

const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
};
    const currentYear = new Date().getFullYear();

    return (
        <footer className='px-5 manrope relative z-1 overflow-x-clip bg-dark'>
            <div className="2xl:max-w-331.25 xl:max-w-285 max-w-285 mx-auto pt-7 2xl:pt-8.75 pb-5 2xl:pb-6.5">
                <div className="flex max-sm:flex-col gap-5 justify-between sm:items-center">
                    <ul className="flex items-center gap-3.75">
                        {SOCIAL_LINKS.map((obj, i) => (
                            <li key={i}>
                                <a aria-label="social-icons" href={obj.link} target="_blank" className="size-14 flex items-center justify-center rounded-full hover:border-dark-yellow hover:bg-dark-yellow duration-300 border border-white/25 bg-white/10 backdrop-blur-[25px] min-w-14">
                                    <Icons icon={obj.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="relative">
    <div className="flex flex-row items-center gap-2">
        <Icons icon="yelloearth" />

        <p className="text-white manrope text-base font-semibold leading-150">
            {selectedLanguage}
        </p>

        <button onClick={() => setIsOpen(!isOpen)}>
            <div
                className={`transition-transform cursor-pointer duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                }`}
            >
                <Icons icon="down" />
            </div>
        </button>
    </div>

    {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[120px] rounded-lg bg-white shadow-lg overflow-hidden z-50">
            {languages.map((lang, index) => (
                <button
                    key={index}
                    className="w-full px-4 cursor-pointer py-2 text-left text-black hover:bg-gray-100 transition-colors"
                    onClick={() => handleLanguageSelect(lang)}
                >
                    {lang}
                </button>
            ))}
        </div>
    )}
</div>
                </div>

                <div className="flex items-start gap-y-10 gap-5 flex-wrap justify-between mt-10 sm:mt-20">
                    {FOOTER_LIST.map((obj, i) => (
                        <div key={i} className="flex max-sm:w-full max-lg:w-[47%] flex-col gap-6">
                            <h4 className={`font-manrope text-xl leading-140 font-semibold ${i !== 3 ? "text-white/80" : "text-white"}`}>{obj.label}</h4>
                            <ul className="flex flex-col gap-4">
                                {obj.links.map((linkObj, j) => (
                                    <li key={j}>
                                        <a
                                            smooth
                                            to={linkObj.url}
                                            target={linkObj.icon === "location" ? "_blank" : "_self"}
                                            className={`flex w-fit capitalize items-top gap-2.5 duration-300 font-manrope text-sm md:text-base leading-150 font-medium ${obj.label === "İletişim"
                                                ? "text-white hover:text-white/65 lowercase"
                                                : "text-gray hover:text-white"
                                                }`}
                                        >
                                           <a href="/"> {linkObj.icon && <Icons icon={linkObj.icon} />}</a>
                                            <a href="/" className="max-w-61.25 block ">  {linkObj.name}</a>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <a aria-label="footer-logo" href="/" className="w-fit md:-mt-10 mt-10 h-27.5 ml-auto block">
                    <Icons icon={'logo'} /> </a>
                <div className="border-t flex max-sm:flex-col gap-5 items-center justify-between border-gray/15 pt-6 mt-11.75">
                    <p className="text-white/65 font-medium text-sm leading-150 font-manrope md:text-base">
                        © {currentYear} Life 312. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-10">
                        <a to={PAGE_URLS.COOKIE_POLICY}>
                            <p className="text-white/65 font-medium text-sm leading-150 font-manrope md:text-base">
                                Çerez Politikası
                            </p>
                        </a>

                        <a to={PAGE_URLS.DATA_PROTECTION_CONTACT}>
                            <p className="text-white/65 font-medium text-sm leading-150 font-manrope md:text-base">
                                KVKK Aydınlatma Metni
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <img src="/assets/images/webp/footer.webp" alt="logo" className="w-48.5 z-[-1] pointer-events-none animate-pulse absolute bottom-15.25 hidden min-[1500.1px]:flex left-15.25 h-57.75" />
        </footer>
    )
}

export default Footer