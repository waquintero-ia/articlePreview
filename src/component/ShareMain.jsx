import ImageProfile from "./ImageProfile"
import Share from "./Share"
import DescriptionProfile from "./DescriptionProfile"

const ShareMain = () =>{
  return(
    <>
      <div className="card_share flex justify-between items-center">
        <div className="share_info flex gap-4">
          <ImageProfile />
          <DescriptionProfile />
        </div>
          <Share />
      </div>
    </>
  )
}

export default ShareMain