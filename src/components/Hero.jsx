import Button from "./common/Button";
import Icons from "./common/Icons";
import Navbar from "./common/Navbar";

const Hero = () => {
  return (
    <div className=" px-4 bg-[url('/assets/images/webp/hero.webp')] bg-no-repeat bg-center bg-cover w-full h-170 sm:h-200 lg:min-h-[1080.1px] overflow-hidden">
      <Navbar />

      <div className="max-w-[1612.1px] text-white w-full mx-auto px-4 lg:px-0">
        <h1 className="text-4xl sm:text-6xl lg:text-80 capitalize max-w-full lg:max-w-[821.1px] font-test-tiempos mt-30 sm:mt-48 lg:mt-[409.1px] leading-tight">
          Hayatı Kolaylaştıran çözümler
          <span className="text-dark-yellow"> üretiyoruz.</span>
        </h1>
        <div className="bg-dark-yellow/15 p-2 w-fit rounded-[90px] mt-[56.1px]">
          <Button variant="success">
            <p className="mr-2.5">Fiyat teklifi alın</p>
            <Icons icon={"next"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;