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
      <div className="card_container relative w-327 bg-white rounded-[10px] shadow-card-shadow lg:w-730">
        <div className="card_content md:flex md:flex-row">
          <Hero />
          <div className="card_description flex flex-col pt-36 px-32 pb-20 gap-8 md:w-445 md:px-10 md:pt-9 md:gap-5">
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