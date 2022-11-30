const PriceTag = ({ price, name }) => {
    return (
        <div className="bg-norway text-white w-full p-2">
            <h2 className="text-3xl">
                ${price.toFixed(2)}
            </h2>
            <h2 className="text-xl">
                {name}
            </h2>
        </div>
    )
}

export default PriceTag;