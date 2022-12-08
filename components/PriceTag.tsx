interface PriceProps {
    price: number;
    name: string;
}


const PriceTag = (Props: PriceProps) => {
    return (
        <div className="bg-norway text-white relative h-[108px] w-[276px]">
            <div className="flex flex-col content-center mt-8 ml-2 leading-8">
                <h2 className="text-[50px]">
                    ${Props.price.toFixed(2)}
                </h2>
                <h2 className="text-base">
                    {Props.name}
                </h2>
            </div>
        </div>
    )
}

export default PriceTag;