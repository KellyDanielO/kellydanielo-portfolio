
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
interface AppProjectCardProps {
    image: StaticImageData,
    title: string,
    description: string,
    stack: string[],
    github: string | null,
}
const AppProjectCard = ({ image, title, description, stack, github }: AppProjectCardProps) => {
    const openLink = (link: string) => {
        window.open(link, "_blank");
    };
    return <div
        className="lg:w-[20%] mb-4 lg:mb-0 w-full flex justify-between  flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
    >
        <Image
            src={image}
            width={100}
            height={100}
            alt="Onboarding screens Application"
            className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[45vh] object-contain"
        />
        <div className="w-full flex flex-col py-2  px-2 justify-center items-start gap-y-2" >
            <h3 className="text-xl lg:text-2xl font-freeman text-primary">
                {title}
            </h3>
            <p>{description}...</p>
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-2">
                    {stack.map((tech, index) => (
                        <div key={index} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">{tech}</div>
                    ))}
                </div>
                <div className="flex gap-4">
                    {github && (
                        <FaGithub
                            className="text-xl cursor-pointer hover:text-primary"
                            onClick={() =>
                                openLink(
                                    github
                                )
                            }
                        />
                    )}

                </div>
            </div>
        </div>
        <Link href={''} className="w-full text-center py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-lg">Read More</Link>
    </div>
}
export default AppProjectCard