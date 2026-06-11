import { SLIDER_IMAGES } from "../../utils/helper";
import Button from "./common/Button";
import Icons from "./common/Icons";

const Project = () => {
  return (
    <div className="px-4">
      <div className="mt-16 lg:mt-[127.1px]">
        <h2 className="text-dark text-center font-test-tiempos leading-115 text-4xl sm:text-5xl md:text-64">
          PROJELERİMİZ
        </h2>

        <div className="mt-10 lg:mt-14 overflow-hidden w-full">
          <div className="flex w-max animate-marquee">
            {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-row shrink-0"
              >
                <img
                  src={item}
                  alt="image"
                  className="h-10 md:h-12 lg:h-15.5"
                />
                <div className="bg-black/15 w-px h-7 mt-2 mx-7 lg:mx-12" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-[1305.1px] w-full mx-auto mt-12 md:20  lg:mt-30 mb-12 lg:mb-16 px-4 lg:px-0">
          <div className="bg-[url('/assets/images/webp/bulbg.webp')] rounded-3xl bg-no-repeat bg-center bg-cover min-h-[345.1px] py-8 lg:py-9 px-6 lg:px-12.5 flex flex-col lg:flex-row justify-between gap-10">

            <div>
              <h2 className="max-w-[640.1px] mt-4 lg:mt-10 text-3xl sm:text-5xl md:text-56 leading-120 lg:ml-8 text-white tracking-[-0.02em]">
                Hayatı kolaylaştıran çözümler üretiyoruz.
              </h2>

              <p className="text-white/65 font-medium leading-150 text-base md:text-lg lg:text-xl mt-4 lg:mt-6 lg:ml-8">
                Profesyonel Yaklaşımlar Ve Profesyonel Hizmet Felsefesi.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <div className="w-[87.1px] h-[96.1px]">
               <img src="/assets/images/svg/footer.svg" alt="image" />
              </div>

              <Button variant="danger" className="mt-8  lg:mt-17.5">
                Fiyat teklifi alın
                <Icons icon={"next2"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;