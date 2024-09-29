import userLogo from "../assets/user.png";
import Text from "./Text";

export default function FeedbackCard({ name = "Customer", feedback = "Nice app!" }) {
    return (
        <div className="w-[200px] h-[200px] border-[1px] border-[#818589]/[0.3] rounded-[8px] transition duration-500 ease-in-out hover:shadow-lg hover:shadow-pale-blue hover:scale-110 ">
            <div className="h-[55%] flex flex-col justify-center items-center bg-pale-blue/[0.3] border-b-[1px] border-[#818589]/[0.3] space-y-[8px]">
                <img src={userLogo} alt="User picture" className="w-[64px] h-[64px]" />
                <Text as="p" size={14} color="#818589">
                    {name}
                </Text>
            </div>
            <div className="mt-[12px] px-[8px]">
                <Text as="p" size={12} color="#818589" centralize>
                    "{feedback}"
                </Text>
            </div>
        </div>
    );
}
