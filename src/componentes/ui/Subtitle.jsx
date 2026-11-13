function Subtitle({ children, id }) {
    return (
        <h2 id={id} className="scroll-mt-32 bg-surface w-full h-auto text-2xl text-white font-jetbrains-mono p-2 border-[0.5px] border-divider text-center md:scroll-mt-20">
            {children}
        </h2>
    )
}

export default Subtitle
