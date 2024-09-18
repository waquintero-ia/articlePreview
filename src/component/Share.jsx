import PropTypes from 'prop-types';

const Share = ({handleClick}) =>{
  return(
    <>
      <picture className="w-[32px] h-[32px] flex justify-center items-center bg-blue-300 rounded-full" onClick={handleClick}>
        <img src="./images/icon-share.svg" alt="Share" />
      </picture>
    </>
  )
}

Share.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Share