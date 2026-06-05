import { SERVICES } from "../../utils/helper";
import Icons from "./common/Icons";

const Services = () => {


  return (
    <div className="pt-12 lg:pt-[95.1px] px-4 bg-linear-to-b from-thik/5 to-white">
      <div
       className="max-w-[1600.1px] hidden min-[1480px]:flex mx-auto mb-[-223.1px]"
      >
        <img src="/assets/images/svg/contact-ellipse.svg" alt="image"  />
      </div>
      <div className="max-w-[1920.1px] w-full flex justify-end overflow-hidden">
        <Icons icon={"text"} />
      </div>

      <div className="text-center mb-8 mt-12 lg:mt-24 px-4">
        <h1 className="text-2xl sm:text-32 md:text-40 font-bold leading-140 text-ultra mb-1.5">
          Profesyonel Hizmet Çözümlerimiz
        </h1>

        <p className="text-lg sm:text-xl leading-138 lg:text-2xl font-bold text-dark">
          10 yılı aşkın tecrübemizle kapsamlı bina ve site yönetimi hizmetleri
          sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[1600.1px] mx-auto px-4 lg:px-0">
        {SERVICES.map((s, index) => {
  

          return (
            <div
              key={s.id}
              className={`rounded-2xl pt-[51.1px] group px-8 lg:px-[47.1px] cursor-pointer min-h-[380.1px] transition-all duration-500 hover:bg-dark bg-thik/7
                }`}
            >
              <div className="mb-12 lg:mb-[72.1px]">
                <Icons icon={s.icon} />
              </div>

              <h3
                className={`text-2xl font-bold leading-116 mb-6 manrope ${index === 4 ? "max-w-[160.1px]" : "max-w-[200.1px]"
                  } group-hover:text-white text-dark duration-500`}
              >
                {s.title}
              </h3>

              <p
                className={`text-lg leading-150 manrope ${index === 6 ? "max-w-[240.1px]" : "max-w-[250.1px]"
                  } group-hover:text-gray text-black duration-500`}
              >
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-w-[1526.1px] w-full mx-auto mt-16 lg:mt-30 overflow-hidden px-4">
        <Icons icon={"textsecond"} />
      </div>
    </div>
  );
};

export default Services;