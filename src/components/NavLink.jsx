import { Link } from "react-router-dom";

export default function NavLink({ children, path }) {
    return (
        <Link to={path} className="px-[10px] py-[4px] text-[20px] text-sky-blue hover:bg-pale-blue/[0.2] hover:rounded">
            {children}
        </Link>
    );
}
