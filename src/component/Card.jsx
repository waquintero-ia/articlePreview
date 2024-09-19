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
      <div className="card_container relative w-[327px] min-h-[512px] bg-white rounded-[10px] overflow-hidden md:w-[730px] md:min-h-[280px]">
        <div className="card_content md:flex md:flex-row">
          <Hero />
          <div className="card_description flex flex-col pt-[36px] px-[32px] pb-[20px] gap-[32px] md:w-[445px] md:px-[40px] md:gap-[20px]">
          <Description />
          <ShareMain 
            handleClick={handleClick}/>
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