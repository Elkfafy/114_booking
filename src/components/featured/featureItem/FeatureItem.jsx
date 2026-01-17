import "./featureItem.css"

export default function FeatureItem({img, name, quantity}) {
    return (
        <div className="featureItem">
            <img 
            src={img}
            className="featureItemImg"
            />
            <div className="featureItemTitles">
                <h1>{name}</h1>
                <h2>{quantity} properties</h2>
            </div>
        </div>
    )
}