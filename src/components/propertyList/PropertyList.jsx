import "./propertyList.css"
import PropertyListItem from "./propertyListItem/PropertyListItem"

export default function PropertyList() {
    const propertyListItems = [
        {
            id: 1,
            img: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
            name: "hotels",
            quantity: 233
        },
        {
            id: 2,
            img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
            name: "appartments",
            quantity: 2331
        },
        {
            id: 3,
            img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
            name: "resorts",
            quantity: 234
        },
        {
            id: 4,
            img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
            name: "villas",
            quantity: 2332
        },
        {
            id: 5,
            img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
            name: "capins",
            quantity: 2313
        },
    ]
    return (
        <div className="propertyList">
            {propertyListItems.map((item) => 
            <PropertyListItem 
            img={item.img}
            name={item.name}
            quantity={item.quantity}
            key={item.id}
            />)}
        </div>
    )
}