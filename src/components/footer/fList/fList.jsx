import "./fList.css"
export default function FList({list}) {
    return (
        <ul className="fList">
            {list && list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}