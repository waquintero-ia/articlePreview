import ImageProfile from "./ImageProfile"
import Share from "./Share"
import DescriptionProfile from "./DescriptionProfile"

import PropTypes from 'prop-types';

const ShareMain = ({handleClick}) =>{
  return(
    <>
      <div className="card_share flex justify-between items-center">
        <div className="share_info flex gap-4">
          <ImageProfile />
          <DescriptionProfile />
        </div>
          <Share 
            handleClick={handleClick}/>
      </div>
    </>
  )
}

ShareMain.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ShareMain