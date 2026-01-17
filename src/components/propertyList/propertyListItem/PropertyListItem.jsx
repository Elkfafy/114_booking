import "./propertyListItem.css"

export default function PropertyListItem({img, name, quantity}) {
    return (
        <div className="propertyListItem">
            <img
                src={img}
                className="pListItemImg"
            />
            <div className="pListItemTitles">
                <h1>{name}</h1>
                <h2>{quantity} {name}</h2>
            </div>
        </div>
    )
}