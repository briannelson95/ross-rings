export default function({ children }) {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            <div
                className="h-80 w-full lg:col-span-1 lg:row-span-1 first:lg:col-start-1 first:col-span-2 first:row-span-2 first:h-full"
            >
                {children}
            </div>
        </div>
    )
}