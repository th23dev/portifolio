function Tag({ children, textColor = 'text-accent', bgColor = 'bg-background' }) {
    return (
        <span className={`inline-block rounded px-2 py-1 font-jetbrains-mono text-xs ${textColor} ${bgColor}`}>
            {children}
        </span>
    )
}

export default Tag
