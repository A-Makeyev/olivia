import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero/Hero'


const HomePage = () => {
  return (
    <div>
      <Header activePageIndex={1} />
      <Hero />
    </div>
  )
}

export default HomePage