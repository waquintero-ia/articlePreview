import PropTypes from 'prop-types';

const SharePopup = ({handleClick}) =>{
  return(
    <>
      <div className="popup_container absolute w-[100%] h-74 bg-blue-900 rounded-b-[10px] bottom-0 left-0 flex px-8 justify-center items-center md:shadow-popup-shadow md:px-10 md:w-248 md:h-55 md:rounded-[10px] md:-right-16 md:left-auto md:top-[45%]" onClick={handleClick}>
        <div className="popup_content relative flex justify-between w-full">
          <div className="share_links flex justify-between w-175 items-center">
            <div className="links_title uppercase text-13 font-medium text-blue-700 tracking-[0.3125rem]">
              share
            </div>
            <a href="">
              <picture>
                <img src="./images/icon-facebook.svg" alt="facebook" />
              </picture>
            </a>
            
            <a href="">
              <picture>
                <img src="./images/icon-twitter.svg" alt="twitter" />
              </picture>
            </a>
            
            <a href="">
              <picture>
                <img src="./images/icon-pinterest.svg" alt="pinterest" />
              </picture>
            </a>
            
          </div>
          <button className="share w-8 h-8 bg-blue-800 rounded-full flex justify-center items-center text-white md:hidden focus:bg-inherit" aria-label='share'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
          </button>
        </div>
        <div className="square hidden md:block absolute w-6 h-6 bg-blue-900 -bottom-3">

        </div>
      </div>

    </>
  )
}

SharePopup.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SharePopup