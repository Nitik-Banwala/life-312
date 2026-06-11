
const variants = {
    primary:
        "bg-white/5 w-[115px] h-[40px] rounded-[90px] text-white hover:bg-white/20 manrope active:bg-white/40",

    secondary:
        "w-[195px] h-[40px] bg-white rounded-[90px] hover:text-white group hover:bg-dark manrope duration-500 ",

    success:
        "bg-dark-yellow w-[208px] rounded-[90px] h-[53px] text-black hover:bg-black duration-500 group manrope hover:text-dark-yellow ",

    danger:
        "bg-white text-black w-[208px] h-[53px] gap-3.5 rounded-[90px] group hover:text-white hover:bg-dark manrope font-bold manrope text-lg duration-500 ",

    warning:
        "bg-black rounded-[90px] h-[49px] text-white gap-3 hover:bg-white duration-500 hover:text-black manrope border w-full sm:w-[223px] ",

    outline:
        "text-white bg-dark hover:bg-white hover:text-dark border border-dark duration-500 w-full sm:w-[201px] h-[49px] manrope rounded-[90px]",

    ghost:
         "duration-500 w-[202px] h-[53px] hover:bg-none hover:bg-white/90 bg-gradient-to-r from-dark-blue to-light manrope hover:text-light border birder-light duration-500 text-white rounded-[90px]",
};

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    return (
        <button
            className={`
                border-
        flex flex-row
        items-center
        justify-center
        px-1
        font-medium
        transition-all
        duration-300
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;