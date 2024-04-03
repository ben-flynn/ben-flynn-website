export default function SpotifyPlayer({url}) {
    return (
        <iframe
        className="player" 
        src={url}
        width="100%" 
        height="152" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    )
}

