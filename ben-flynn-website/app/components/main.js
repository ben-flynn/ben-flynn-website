import SideNav from "./sideNav"
import Socials from "./socials"

export default function Main () {


    return (
        <div className="main-container">
            <div>
              <div className="home" >
                  <div className="name-text">Ben Flynn</div>
                  <div className="title-text">Software Engineer</div>
                  <p>Graduating this April looking for a full time job!</p>
              </div>
              <SideNav/>
            </div>
            <Socials/>
        </div>
    )
}



