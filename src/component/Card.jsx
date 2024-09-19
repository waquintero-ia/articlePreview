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
      <div className="card_container relative w-327 min-h-[512px] bg-white rounded-[10px] shadow-card-shadow md:w-[730px] md:min-h-[280px]">
        <div className="card_content md:flex md:flex-row">
          <Hero />
          <div className="card_description flex flex-col pt-36 px-32 pb-20 gap-8 md:w-[445px] md:px-[40px] md:gap-[20px]">
          <Description />
          <ShareMain 
            handleClick={handleClick} 
            share={share} />
          {
            share && 
              <SharePopup 
                handleClick={handleClick}/>
          }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Card