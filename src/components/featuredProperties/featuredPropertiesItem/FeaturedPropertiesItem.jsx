import "./featuredPropertiesItem.css"

export default function FeaturedPropertiesItem({
    img, name, city, price, rate
}) {
    return (
        <div className="fpItem">
            <img
                src={img}
                className="fpItemImg"
            />
            <span className="fpItemName">{name}</span>
            <span className="fpItemCity">{city}</span>
            <span className="fpItemPrice">Starting from ${price}</span>
            <div className="fpItemRating">
                <button>{rate}</button>
                <span>{rate > 8.9? "Exceptional" : "Excellent"}</span>
            </div>
        </div>
    )
}