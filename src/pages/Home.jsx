import Text from "../components/Text";
import NavLink from "../components/NavLink";

export default function Home() {
    return (
        <div className="flex flex-col">
            <header className="flex flex-col">
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
                <div className="self-center mt-[20px]">
                    <Text as="h1" color="#318CE7" size={48} letterSpacing={24} uppercase>
                        listify
                    </Text>
                </div>
            </header>
        </div>
    );
}
