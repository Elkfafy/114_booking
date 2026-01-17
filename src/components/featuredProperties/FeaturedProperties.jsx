import "./featuredProperties.css"
import FeaturedPropertiesItem from "./featuredPropertiesItem/FeaturedPropertiesItem"

export default function FeaturedProperties() {
    const featuredProperties = [
        {
            id: 1,
            img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            name: "Aparthotel Stare Miasto",
            city: "Madrid",
            price: 120,
            rate: 8.9
        },
        {
            id: 2,
            img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            name: "Comfort Suites Airport",
            city: "Austin",
            price: 140,
            rate: 9
        },
        {
            id: 3,
            img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            name: "Aparthotel Stare Miasto",
            city: "Madrid",
            price: 120,
            rate: 8.9
        },
        {
            id: 4,
            img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            name: "Aparthotel Stare Miasto",
            city: "Madrid",
            price: 120,
            rate: 8.9
        },
    ]
    return (
        <div className="fp">
            {featuredProperties.map((property) => <FeaturedPropertiesItem 
            key={property.id}
            img={property.img}
            name={property.name}
            city={property.city}
            price={property.price}
            rate={property.rate}
            />)}
        </div>
    )
}