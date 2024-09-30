import Text from "components/Text";

export default function About() {
    return (
        <main className="flex flex-col mt-[60px]">
            <section className="flex flex-col mb-[60px]">
                <article>
                    <div className="space-y-[8px]">
                        <Text as="h2" size={32} weight={600} centralize>
                            About
                        </Text>
                        <div className="px-[40px] space-y-[4px]">
                            <Text as="p" size={20} color="#818589" centralize>
                                Listify was created to help you organize your daily life in a practical and efficient
                                way. With an intuitive interface, you can easily add, edit, and track your tasks,
                                whether for work or personal life. Listify offers a simple yet powerful experience,
                                ensuring that your priorities are always in sight and that you never miss an important
                                activity.
                            </Text>
                            <Text as="p" size={20} color="#818589" centralize>
                                In addition, Listify allows you to manage your lists quickly and effortlessly, helping
                                to maximize your productivity. Ideal for those looking for a reliable tool to stay
                                focused and optimize their time, Listify adapts to your workflow, making task
                                organization a seamless and natural part of your routine.
                            </Text>
                        </div>
                    </div>
                </article>
            </section>
            <div className="mx-[32px] mb-[60px] border-b-[1px] border-pale-blue"></div>
            <section className="w-[80%] self-center flex justify-between space-x-[128px] mb-[120px]">
                <article className="flex flex-col space-y-[4px]">
                    <Text as="h2" size={28} weight={600} centralize>
                        Culture
                    </Text>
                    <Text as="p" size={20} color="#818589" centralize>
                        At Listify, we value simplicity, efficiency, and innovation. We believe that organizing life
                        should be a straightforward experience that saves time and helps achieve goals. Our commitment
                        is to create a tool that helps people stay focused and productive, always aiming to improve
                        their routines in a practical and intuitive way.
                    </Text>
                </article>
                <article className="flex flex-col space-y-[4px]">
                    <Text as="h2" size={28} weight={600} centralize>
                        Values
                    </Text>
                    <Text as="p" size={20} color="#818589" centralize>
                        Our culture is user-centered, with a constant drive for improvement. We work as a team to
                        develop solutions that truly make a difference in people's lives, fostering a collaborative,
                        agile environment open to new ideas. At Listify, innovation and continuous improvement are key
                        to delivering a high-quality experience for all of our users.
                    </Text>
                </article>
            </section>
        </main>
    );
}
