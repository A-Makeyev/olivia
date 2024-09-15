import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero/Hero"
import Categories from "../components/Route/Categories/Categories"
import BestDeals from "../components/Route/BestDeals/BestDeals"
import Events from "../components/Route/Events/Events.jsx"
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts"


const HomePage = () => {
  return (
    <div>
      <Header activePageIndex={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
    </div>
  )
}

export default HomePage