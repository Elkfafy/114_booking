import "./hsOptionsItem.css"

export default function HsOptionsItem({text, placeholder}) {
    return (
        <div className="hsOptionsItem">
            <span className="hsOptionsItemText">{text}</span>
            <input type="number" className="hsOptionsItemInput" placeholder={placeholder || ""} />
        </div>
    )
}