import Nav from "components/Nav";
import Text from "components/Text";

export default function Header() {
    return (
        <header className="flex flex-col">
            <Nav />
            <div className="mt-[20px]">
                <Text as="h1" color="#318CE7" size={48} letterSpacing={24} uppercase centralize>
                    listify
                </Text>
            </div>
        </header>
    );
}
