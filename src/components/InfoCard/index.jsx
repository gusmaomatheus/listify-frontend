import Text from "components/Text";

export default function InfoCard({ title, text }) {
    return (
        <div className="w-[550px] h-[300px] flex flex-col justify-center space-y-[16px] px-[12px] transition duration-500 ease-int-out hover:cursor-default hover:bg-pale-blue/[0.2] hover:rounded-[8px] hover:shadow-lg hover:shadow-pale-blue hover:scale-110">
            <Text as="h2" size={28} weight={600} centralize>
                {title}
            </Text>
            <Text as="p" size={20} color="#818589" centralize>
                {text}
            </Text>
        </div>
    );
}
