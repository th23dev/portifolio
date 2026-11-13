function SectionDropdown({ children }) {
    return (
        <div className="absolute left-0 top-full z-20 hidden min-w-max pt-2 group-hover:block group-focus-within:block">
            <div className="rounded-card border border-divider bg-background px-4 py-2 shadow-lg">
                <div className="flex flex-col gap-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SectionDropdown
