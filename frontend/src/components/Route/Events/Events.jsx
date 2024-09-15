import EventCard from "./EventCard.jsx"


const Events = () => {
  return (
    <div>
        <div className="w-11/12 mx-auto">
            <div className="text-center font-Roboto font-[600] text-[27px] pb-[20px] md:text-start">
                <h1>Events</h1>
            </div>
            <EventCard />
        </div>
    </div>
  )
}

export default Events