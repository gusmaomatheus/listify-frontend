import Text from "../Text";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">
            <Text color="#6aa9e9" size={18} weight={800}>
                &copy; 2024 • Rights Reserved
            </Text>
            <Text>Developed with 💙 by Matheus Gusmão</Text>
        </footer>
    );
}
