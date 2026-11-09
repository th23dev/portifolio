function SocialLink({ img, src, alt = 'Social' }) {
    return (
        <a href={src} target="_blank" rel="noopener noreferrer" className="group flex size-10 shrink-0 items-center justify-center">
            <img
                src={img}
                alt={alt}
                className="block size-5 shrink-0 object-contain brightness-0 invert-[0.6] group-hover:brightness-100 group-hover:invert-0 transition duration-300"
            />
        </a>
    )
}

export default SocialLink
