import { services } from "../Constants"
import ServiceCard from "../Components/ServiceCard"

const Services = () => {
  return (
   <section className='max-container flex justify-center flex-wrap gap-9 '>
    {services.map((service) =>(
      <ServiceCard key={services.label}{...service} />
    ))}

   </section>
  )
}

export default Services