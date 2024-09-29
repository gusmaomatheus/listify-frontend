import NavLink from "components/NavLink";

export default function Nav() {
    return (
        <nav className="flex justify-between mt-[40px] mx-[40px]">
            <div className="space-x-[20px]">
                <NavLink path={"/"}>Home</NavLink>
                <NavLink path={"/about"}>About Us</NavLink>
            </div>
            <div className="space-x-[20px]">
                <NavLink path={"/signin"}>Sign In</NavLink>
                <NavLink path={"/signup"}>Sign Up</NavLink>
            </div>
        </nav>
    );
}
