import PropTypes from 'prop-types';

const Share = ({handleClick, share}) =>{
  
  return(
    <>
      <button className={`w-8 h-8 text-blue-800 flex justify-center items-center bg-blue-300 rounded-full ${share && 'md:bg-blue-800 md:text-white'}`} onClick={handleClick} aria-label='share'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
        </svg>      
      </button>
    </>
  )
}

Share.propTypes = {
  handleClick: PropTypes.func.isRequired,
  share: PropTypes.bool.isRequired,
};

export default Share