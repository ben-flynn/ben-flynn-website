import { TypeAnimation } from "react-type-animation"



export default function Main () {


    return (
        <div className="home-container" id="home">
            <div className="home" >
            <TypeAnimation
                sequence={[
                  'Hello, and welcome to my website. My name is',
                  1000, 
                ]}
                wrapper="span"
                speed={20}
                className="code-text"
                repeat={0}
              />

                
                <div className="name-text">Ben Flynn</div>
                <div className="title-text">Software Engineer</div>

        
            </div>
        </div>
    )
}



