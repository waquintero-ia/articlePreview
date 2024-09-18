import { useState } from "react"
import Description from "./Description"
import Hero from "./Hero"
import ShareMain from "./ShareMain"
import SharePopup from "./SharePopup"

const Card = () =>{
  const [share, setShare] = useState(false)

  const handleClick = () => {
    setShare(!share)
  };

  return(
    <>
      <div className="card_container relative w-[327px] min-h-[512px] bg-white rounded-[10px] overflow-hidden">
        <div className="card_content">
          <Hero />
          <div className="card_description flex flex-col pt-[36px] px-[32px] pb-[20px] gap-[32px]">
          <Description />
          <ShareMain 
            handleClick={handleClick}/>
          {
            share && <SharePopup />
          }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Card