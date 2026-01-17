import { Link } from "react-router-dom";
import CenterCard from "../../components/centerCard/CenterCard";

export default function Login() {
    return (
        <CenterCard>
            <h2>Login</h2>
            <input placeholder="Email" type="email"/>
            <input placeholder="Password" type="password"/>
            <button type="submit">Login</button>
            <Link to="/register">register</Link>
        </CenterCard>
    )
}