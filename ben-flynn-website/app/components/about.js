import { TypeAnimation } from "react-type-animation"
import SpotifyPlayer from "./spotifyPlayer"


export default function About() {
    return (
        <div className="about" id="about">
            <p>My full name is Benjamin Flynn, I was born and currently live in Ottawa, Canada. I am currently pursuing a degree in software engineering at The University of Ottawa. Outside of school, I am a very and easy going person and I enjoy playing sports like volleyball and basketball.</p>
            <p>As far as personal projects, I like doing backend work and I specifically have a lot of experience using SpringBoot. I have worked and am currently working on apps that automate pdf and excel document processing.</p>
            <p>I am always eager to learn new things as technology rapidly evolves. Feel free to send me a message anytime.</p>

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
