import Description from "./Description"
import Hero from "./Hero"
import ShareMain from "./ShareMain"

const Card = () =>{
  return(
    <>
      <div className="card_container w-[327px] min-h-[512px] bg-white rounded-[10px] overflow-hidden">
        <div className="card_content">
          <Hero />
          <div className="card_description flex flex-col pt-[36px] px-[32px] pb-[20px] gap-[32px]">
          <Description />
          <ShareMain />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card