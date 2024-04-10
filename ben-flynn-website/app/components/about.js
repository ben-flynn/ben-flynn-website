import { TypeAnimation } from "react-type-animation"
import SpotifyPlayer from "./spotifyPlayer"


export default function About() {
    return (
        <div className="about" id="about">
            <p>My full name is Benjamin Flynn, I was born in Ottawa Canada. I am currently pursuing a degree in software engineering at The University of Ottawa . Outside of school I am a very out and easy going person, I enjoy playing sports and going out with the boys</p>
            <p>Ever since I started designing websites I’ve fallen in love with all things design. There are amazing designs everywhere we go and in almost evrything we do. My goal is to leave my mark and design something that will not die with time.</p>
            <p>I am very eager to learn new things feel free to send me a message anytime.</p>

            <div className="songs">
                <TypeAnimation
                    sequence={[
                    '$ curl -X GET "http://spotify.com"',
                    1000, 
                    '$ --request-target "/benflynn?param=mostreplayed"',
                    1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="code-text"
                    repeat={Infinity}
                />
                <SpotifyPlayer url={"https://open.spotify.com/embed/track/1yCE0X5qLWOrLkR8NC0ZUJ?utm_source=generator&theme=0"}/>
            </div>
        </div>
    )
}
