import PricingText from './PricingText'
import PricingCard from './PricingCard'
import Create from '@/public/images/createText.png'
import Image from "next/image"


const Pricing = () => {
  return (
    <section className="relative bg-black px-10 py-20" id='pricing'>
        <div className="container flex flex-col items-center justify-center gap-6">
            <PricingText />
            <PricingCard />
        </div>
        <Image
            src={Create}
            alt="line"
            className="absolute w-[18rem] bottom-0 left-96 object-cover hidden lg:block"
        />
    </section>
  )
}
export default Pricing