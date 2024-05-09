import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"
const SpecialOffers = () => {
  return (
    <section  className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer}
        width={773}
        height={687} 
        className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl cap font-bold lg:max-w-lg">
        <span className="text-coral-red"> Special </span>
        <span className="text-coral-red"> Offer Shoes </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text
        ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, provident.</p>
        <p className="mt-11 flex flex-wrap gap-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed.</p>
        <Button label='shop now'
        iconURL={arrowRight}/>

        <Button label='learn more'
        backgroundColor='bg-green-500'
        borderColor='text-slate-gray'
        />
      </div>


    
    </section>
  )
}

export default SpecialOffers