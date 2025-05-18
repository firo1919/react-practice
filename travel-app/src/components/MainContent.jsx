import TravelItem from "./TravelItem"
import travelItems from "../api/data"

function MainContent() {
  return (
    <div className="mx-5 sm:mx-10 md:mx-40 flex flex-col gap-10 my-15">
        {
            travelItems.map((a) => <TravelItem key={a.id} Travel={a}/>)
        }
    </div>
  )
}

export default MainContent