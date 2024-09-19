import PropTypes from 'prop-types';

const SharePopup = ({handleClick}) =>{
  return(
    <>
      <div className="popup_container absolute w-[100%] h-[74px] bg-blue-900 bottom-0 left-0 flex px-8 justify-center items-center md:px-[40px] md:w-[248px] md:h-[55px] md:rounded-[10px] md:-right-16 md:left-auto md:top-[45%]" onClick={handleClick}>
        <div className="popup_content relative flex justify-between w-full">
          <div className="share_links flex justify-between w-[175px] items-center">
            <div className="links_title uppercase text-[13px] font-medium text-blue-700 tracking-[5px]">
              share
            </div>
            <picture>
              <img src="./images/icon-facebook.svg" alt="facebook" />
            </picture>
            <picture>
              <img src="./images/icon-twitter.svg" alt="twitter" />
            </picture>
            <picture>
              <img src="./images/icon-pinterest.svg" alt="pinterest" />
            </picture>
          </div>
          <div className="share w-8 h-8 bg-blue-800 rounded-full flex justify-center items-center text-white md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
          </div>
        </div>
        <div className="square sm:hidden md:block absolute w-[24px] h-[24px] bg-blue-900 -bottom-3">

        </div>
      </div>

    </>
  )
}

SharePopup.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SharePopup