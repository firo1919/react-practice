import TravelItem from "./TravelItem"
import travelItems from "../api/data"

function MainContent() {
  return (
    <div className="mx-40 flex flex-col gap-10 my-15">
        {
            travelItems.map((a) => <TravelItem Travel={a}/>)
        }
    </div>
  )
}
export default MainContent