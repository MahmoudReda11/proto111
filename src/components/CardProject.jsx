import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 6000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};


const CardProject = ({ id , link, name1,name2, img , widthMargin }) => {

    return (
    
         <div className={widthMargin}>
              <a href={link} key={id}>
            <Tilt
              className="group relative z-50 after-card w-[70%] cursor-pointer"
              options={defaultOptions}
            >
              <img
                className="w-full"
                src={img}
                alt=""
              />

              <div className="absolute left-[-70px] bottom-[10px] transform translate-z-30 z-10">
                <h1 className="reda text-white text-3xl mb-5 pb-5 border-b">
                  {" "}
                  {name1} <br></br> {name2}
                </h1>
                <p className="text-gray-400">0{id}</p>

                <span className="text-gray-400 relative left-0 group-hover:left-3 trans">
                  →
                </span>
              </div>
            </Tilt>
            </a>
          </div>

    );
  };
  
  export default CardProject;
  