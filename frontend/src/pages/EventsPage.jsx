import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header"
import EventCard from "../components/Route/Events/EventCard"


const EventsPage = () => {
  return (
    <div>
        <Header activePageIndex={4} />
        <div className="w-11/12 mx-auto">
            <EventCard />
            <EventCard />
        </div>
        <Footer />
    </div>
  )
}

export default EventsPage