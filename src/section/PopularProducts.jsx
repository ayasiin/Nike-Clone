import { products } from "../Constants"
import PopularProductCard from "../Components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">
               your
               <span className="text-green-500"> Product</span>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sint similique ex exercitationem facere ullam veniam eligendi blanditiis. Nostrum quisquam iurcusandae saepe quis!</p>
        </h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {products.map((products)=>(
          <PopularProductCard key={products.name}{...products} />

        ))}

      </div>

    </section>
  )
}

export default PopularProducts