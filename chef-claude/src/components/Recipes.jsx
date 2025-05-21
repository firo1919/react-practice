import Markdown from "react-markdown"

function Recipes({Recipes}) {
  return (
    <div className="*:mb-2 text-[#475467] leading-7 text-xl font-medium" >
        <Markdown>{Recipes}</Markdown>
    </div>
  )
}
export default Recipes