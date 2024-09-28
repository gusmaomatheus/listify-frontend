import { Link } from "react-router-dom";

export default function NavLink({ children, path }) {
    return (
        <Link to={path} className="text-[20px] text-sky-blue hover:underline">
            {children}
        </Link>
    );
}
