import Text from "../../components/Text";
import FeedbackCard from "../../components/FeedbackCard";

export default function Home() {
    return (
        <main className="flex flex-col mt-[60px] space-y-[100px] mb-[90px]">
            <section>
                <article>
                    <div className="space-y-[8px]">
                        <Text as="h2" size={32} weight={600} centralize>
                            Join millions of people organizing their work and personal lives with{" "}
                            <Text as="span" size={32} color="#318CE7" weight={600}>
                                listify
                            </Text>
                        </Text>
                        <div className="px-[40px]">
                            <Text as="p" size={20} color="#818589" centralize>
                                Discover the ultimate solution to organize your life! With listify, you can simplify
                                your day and ensure nothing gets left behind. Want yo stay o top of all your
                                responsibilities, both at work and in your personal life? listify is perfect tool for
                                you! With an intuitive interface and smart features, you can easily create, edit and
                                manage your tasks. Boost your productivity and eliminate stress by taking full controll
                                of your lists. Try it now and turn your tasks into achievements!
                            </Text>
                        </div>
                    </div>
                </article>
            </section>
            <section className="self-center flex flex-col w-[60%]">
                <article className="space-y-[40px]">
                    <div className="space-y-[8px]">
                        <Text as="h2" size={32} weight={600} centralize>
                            Feedbacks
                        </Text>
                        <Text as="p" size={20} color="#818589" centralize>
                            Bellow are testimonials from some of our customers about listify.
                        </Text>
                    </div>
                    <div className="flex justify-center space-x-[40px]">
                        <FeedbackCard
                            name="James Parker"
                            feedback="This app keeps me organized and on track every day. Super easy to use!"
                        />
                        <FeedbackCard
                            name="Emily Johnson"
                            feedback="Love how simple and effective this app is. My productivity has skyrocketed!"
                        />
                        <FeedbackCard
                            name="Michael Davis"
                            feedback="Best to-do list app I've found. Quick, clean, and keeps me focused!"
                        />
                        <FeedbackCard
                            name="Sarah Collins"
                            feedback="So intuitive! Managing my tasks has never been this effortless."
                        />
                    </div>
                </article>
            </section>
        </main>
    );
}
