import Header from "components/Header";
import Text from "components/Text";
import { Link } from "react-router-dom";
import notFoundImg from "assets/not-found.png";

export default function NotFound() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex flex-col mt-[120px]">
                <div className="flex flex-col space-y-[8px] mb-[80px]">
                    <Text as="h2" size={40} color="#318CE7" weight={900} letterSpacing={4} centralize>
                        404
                    </Text>
                    <Text as="p" size={20} color="#818589" centralize>
                        Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our
                        <Link to={"/"} className="text-[20px] text-sky-blue hover:underline">
                            {" "}
                            homepage
                        </Link>
                        .
                    </Text>
                </div>
                <img src={notFoundImg} alt="Not found page" className="w-[256px] h-[256px] self-center mb-[160px]" />
            </main>
        </div>
    );
}
