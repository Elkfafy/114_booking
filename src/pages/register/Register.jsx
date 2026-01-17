import { Link } from "react-router-dom";
import CenterCard from "../../components/centerCard/CenterCard";

export default function Register() {
    return (
        <CenterCard>
            <h2>Register</h2>
            <input placeholder="Full Name" type="text"/>
            <input placeholder="Email" type="email"/>
            <input placeholder="Password" type="password"/>
            <input placeholder="Confirm Password" type="password"/>
            <button type="submit">Register</button>
            <Link to="/login">login</Link>
        </CenterCard>
    )
}