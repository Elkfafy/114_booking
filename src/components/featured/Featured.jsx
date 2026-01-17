import "./featured.css"
import FeatureItem from "./featureItem/FeatureItem"

export default function Featured() {
    const features = [
        {
            id: 1,
            img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
            name: "Reno",
            quantity: "533"
        },
        {
            id: 2,
            img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
            name: "Austin",
            quantity: "532"
        },
        {
            id: 3,
            img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
            name: "Dublin",
            quantity: "123"
        },
    ]
    return (
        <div className="featured">
            {features.map((feature) => <FeatureItem 
            key={feature.id}
            name={feature.name}
            quantity={feature.quantity}
            img={feature.img}
            />)}
        </div>
    )
}