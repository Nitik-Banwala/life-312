import { SEFFAF } from "../../utils/helper"
import Icons from "./common/Icons"
const Seffaf = () => {
    return (
        <div className="max-w-[1609.1px] w-full px-4 mx-auto text-center mt-30">
            <p className="text-thik text-2xl font-semibold leading-[91%] manrope">Neden bizi tercih etmelisiniz?</p>
            <h2 className="text-dark text-4xl sm:text-5xl md:text-64 font-test-tiempos leading-115 mt-8">Şeffaf ve Güvenilir Yönetim Anlayışı</h2>
            <div className=" flex flex-row flex-wrap mt-16 gap-8 justify-center">
                {SEFFAF.map((item, index) => {
                    return (
                        <div key={index}
                            className={`
                bg-[url('/assets/images/webp/yellow.webp')]
                w-full max-w-[370.1px]
                h-[429.1px]
                flex flex-col items-center justify-center
                bg-no-repeat bg-cover bg-center
                ${(index === 1 || index === 3) ? "min-[1206.1px]:mt-[58.1px]" : ""}
              `}>
                            <div >
                                <Icons icon={item.icon} />
                            </div>
                            <h3 className="mt-12 font-bold text-dark leading-116 text-2xl">{item.heaing}</h3>
                            <p className={`${(index === 0 || index === 2) ? "max-w-[292.1px]" : " max-w-[252.1px]"} mt-3 leading-150 font-medium text-base text-center`} >{item.para}</p>
                            <p className="font-medium text-base">{item.para2}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Seffaf
