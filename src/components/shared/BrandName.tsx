import { Poppins } from "next/font/google";

const poppings = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
})

const BrandName = () => {
    return (

        <span className={` ${poppings.className}  bg-clip-text text-transparent bg-linear-to-r from-[#08b6d1] to-[#1DB954] text-2xl font-bold tracking-widest`}>MediCare </span>

    );
};

export default BrandName;