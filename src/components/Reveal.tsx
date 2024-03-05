import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
    children: any;
    width?: "fit-content" | "100%",
    className?: string;
}

export const ReavealAnimation = ({ children, className }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
        // eslint-disable-next-line
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                whileInView="visible"
                transition={{ delay: 0.25, duration: 0.5 }}
            >
                {children}
                
            </motion.div>

        </div>
    )
}