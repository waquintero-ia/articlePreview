import ImageProfile from "./ImageProfile"
import Share from "./Share"
import DescriptionProfile from "./DescriptionProfile"

import PropTypes from 'prop-types';

const ShareMain = ({handleClick, share}) =>{
  
  return(
    <>
      <div className="card_share flex justify-between items-center">
        <div className="share_info flex gap-4">
          <ImageProfile />
          <DescriptionProfile />
        </div>
          <Share 
            handleClick={handleClick} 
            share={share}/>
      </div>
    </>
  )
}

ShareMain.propTypes = {
  handleClick: PropTypes.func.isRequired,
  share: PropTypes.bool.isRequired,
};

export default ShareMain