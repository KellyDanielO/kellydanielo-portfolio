import { motion } from "framer-motion";

const TabtracVideoComponent = () => {
    return <div className="flex flex-col py-5 pt-24 px-5 justify-center items-center" id="featured">
        <h1 className="text-3xl lg:text-4xl font-lemon text-primary mb-10">Featured Project</h1>
        <motion.section
            className="h-full w-full flex flex-col lg:flex-row justify-center gap-10 items-center"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
            <iframe className="w-full h-[25vh] lg:h-[315px] lg:w-[560px]" src="https://www.youtube-nocookie.com/embed/8oQhg6iEWEE?si=aP9xRnBqkzx-55Jt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* Text Area */}
            <motion.div
                className="lg:w-[34%] flex flex-col items-center lg:items-start justify-start gap-2"
                transition={{ delay: 0.6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h1 className="text-3xl font-lemon text-primary">Tabtrac</h1>

                <p className="break-keep">
                    It's a project I've been working on for a while now.
                    The idea is to help small scale business owners track their records, for this first release our target is to keep track of debt and credit records, for our users.
                </p>
                <strong>Advantages of using Tabtrac?</strong>
                <p className="break-keep">
                    Using Tabtrac you don't have to worry about loosing access to your records even if your device is not accessible, you can log in on a new device and all your records are stored safe and sound.
                </p>
                <p className="break-keep">
                    With Tabtrac you'll get organized records, reminders and statistics in order to help manage your records and not to lose track of any record
                </p>

                {/* Skills */}
                <div className="flex gap-2 flex-wrap">
                    <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Flutter</div>
                    <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Python Django</div>
                    <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Postgress</div>
                </div>

            </motion.div>
        </motion.section>
    </div>
}

export default TabtracVideoComponent;