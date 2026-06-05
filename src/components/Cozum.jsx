import { IMAGES } from "../../utils/helper"
import { STATS_LIST } from "../../utils/helper"
import Icons from "./common/Icons"
import { PAGE_URLS } from "../../utils/helper"

const Cozum = () => {

  return (
    <div >
      <div className="bg-white px-4 pt-25.5 rounded-t-3xl -mt-5 z-20 relative">
        <h2 className=" text-4xl sm:text-5xl md:text-64 text-dark text-center font-test-tiempos">Çözüm Ortaklarımız</h2>
      </div>
      <div className="overflow-hidden w-full mt-14">
        <div className="flex w-max animate-marquee">
          {[...IMAGES, ...IMAGES].map((item, index) => (
            <div
              key={index}
              className=" h-15.5 flex items-center shrink-0">
              <img
                src={item}
                alt="image"
                className="h-15.5"/>
              <span className="bg-black/15 w-0.5 h-7 mx-12" />
            </div>
          ))}
        </div>
      </div>
      <div className='bg-primary-200/5'>
        <div className="bg-white rounded-b-3xl pt-14 md:pt-18 lg:pt-22 2xl:pt-27 relative z-1">
          <img className='absolute top-[47%] left-12.5 z-[-1] 2xl:block hidden' width="112" height="130" src="/assets/images/webp/market.webp" alt="crow-place" />
          <img className='absolute 2xl:right-26 right-0 z-[-1]' width="194" height="231" src="/assets/images/webp/elips.webp" alt="polygonRightEllipse" />
          <div className="2xl:max-w-463.25 max-w-285 2xl:px-57.5 xl:px-10 px-5 mx-auto">
            <div className="flex lg:flex-row flex-col 2xl:justify-between justify-center lg:gap-5 gap-10">
              <div className='2xl:max-w-143.5 lg:max-w-117.5 lg:pt-12.25'>
                <h2 data-aos="zoom-in" className="mb-5 text-4xl sm:text-5xl md:text-64 font-test-tiempos text-dark leading-115 max-lg:text-center">Hakkımızda</h2>
                <h3 data-aos="zoom-in" className="text-accent tracking-[-1.2px] text-xl leading-140 sm:text-3xl md:text-40 manrope text-dark-yellow font-bold mb-4 md:mb-6  max-lg:text-center">
                  Profesyonel Yaklaşımlar ve Profesyonel Hizmet Anlayışı
                </h3>
                <div data-aos="zoom-in" className="space-y-3 md:space-y-7 mb-4 md:mb-6 max-lg:text-center ">
                  <p className="leading-166 xl:max-w-132.5 manrope md:text-xl">
                    Daha güvenli, daha temiz, daha bakımlı ve daha özel yaşam alanları yaratma amacıyla başlattığımız toplu konut projeleri ve kentsel dönüşüm projeleri işini güvenle ilerle kazanmaktadır.
                  </p>
                  <p className="leading-166 xl:max-w-135 manrope md:text-xl">
                    Uzman ve eğitimli personelimizle, size şeffaf, verimliği ve sağlam bir hizmet yaklaşımı sunarak zamandan tasarruf etmenizi, maliyetleri düşürmenizi, yaşam konforunuzu artırmanız ve kusursuz bir yaşam alanı sağlamanızı sağlıyoruz.
                  </p>
                </div>
                <a href={PAGE_URLS.ABOUT_US} data-aos="fade-up" className="font-manrope font-bold  2xl:text-lg leading-138 text-dark-yellow text-xl manrope flex items-center gap-2.5 w-fit group  transition-all ease-linear duration-300 mb-10 max-lg:text-center max-lg:mx-auto">
                  Devamını Oku
                  <Icons className="group-hover:translate-x-1 transition-all ease-linear duration-300" icon="yelnext" />
                </a>
                <div className='grid grid-cols-2 '>
                  {STATS_LIST.map((item, index) => (
                    <div
                      key={index} className={` py-5 ${index % 2 === 0 ? "border-r border-dashed border-dark-yellow sm:pr-8.5 pr-3" : "sm:pl-8.5 pl-3"}  ${index < 2 ? "border-b border-dashed border-dark-yellow" : ""}`} >
                      <h4 data-aos="fade-up" className=" manrope max-lg:text-center max-lg:mx-auto font-bold 2xl:text-xl sm:text-2xl md:text-32 sm:text-2xl text-xl tracking-[-0.96px] text-dark leading-125 max-w-61.25 relative">
                        <span className="">{item.number}</span>
                        <span className="text-xl text-dark-yellow xl:absolute -top-1">+ </span>
                        <span className='xl:ps-4'>{item.title}</span>
                      </h4>
                      <p data-aos="fade-up" className="mt-3 manrope md:text-lg max-lg:text-center"> {item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="2xl:max-w-177.75 max-w-147.75 w-full mt-auto max-lg:mx-auto" >
                <img
                  width={711}
                  height={1030}
                  src="/assets/images/webp/building.webp"
                  alt="Modern Buildings"
                  className="w-full xl:h-257.5 max-lg:h-125  object-contain object-bottom max-lg:mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cozum
