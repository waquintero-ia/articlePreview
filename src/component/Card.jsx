const Card = () =>{
  return(
    <>
      <div className="card_container w-[327px] min-h-[512px] bg-white rounded-[10px] overflow-hidden">
        <div className="card_content">
          <picture>
            <img className="w-[100%] h-[200px] object-cover" src="./images/drawers.jpg" alt="Green cabinet with drawers and a decorative vase filled with dried flowers on the surface" />
          </picture>
          <div className="card_description flex flex-col pt-[36px] px-[32px] pb-[20px] gap-[32px]">
            <section className="flex flex-col gap-[12px]">
              <h1 className="text-blue-900 font-bold leading-[140%] tracking-[0.2px]">
                Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home
              </h1>
              <p className="text-blue-800 text-[13px] font-medium leading-[160%] tracking-[0.12px]">
                Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.
              </p>
            </section>
            <div className="card_share flex justify-between items-center">
              <div className="share_info flex gap-4">
                <picture>
                  <img className="w-10 h-10 rounded-full" src="./images/avatar-michelle.jpg" alt="Woman with long hair and scarf, standing in front of a body of water, with a serene and contemplative expression" />
                </picture>
                <div className="share_name flex flex-col justify-between">
                  <h2 className="text-blue-900 text-[13px] font-bold">
                    Michelle Appleton
                  </h2>
                  <span className="text-blue-700 text-[13px] font-medium">
                    28 Jun 2020
                  </span>
                </div>
              </div>
              <picture className="w-[32px] h-[32px] flex justify-center items-center bg-blue-300 rounded-full">
                  <img src="./images/icon-share.svg" alt="Share" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card