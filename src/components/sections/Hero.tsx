import { useState } from "react";
import { motion } from "framer-motion";
import { info } from "@/data/info";
import { ThreeBackground } from "@/components/ui/ThreeBackground";

export function Hero() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section id="home" className="h-[100svh] min-h-[700px] w-full flex items-center justify-center snap-start bg-background relative overflow-hidden px-4 md:px-12 lg:px-24">
            <div className="z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">

                {/* Avatar Area - 3 to 4 cols on desktop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start order-1 md:order-1"
                >
                    <div className="relative group p-4"> {/* Added padding to prevent clipping of shadows/glows */}
                        <div
                            className={`relative w-64 h-64 ${isFlipped ? "md:w-60 md:h-60" : "md:w-80 md:h-80"} lg:w-[450px] lg:h-[450px] cursor-pointer group`}
                            onClick={() => setIsFlipped(!isFlipped)}
                            style={{ perspective: 1000 }}
                        >
                            <motion.div
                                className="w-full h-full relative"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front face */}
                                <div
                                    className="absolute inset-0"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <img
                                        src="/avatares/avatar_job2.png"
                                        alt={info.name}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
                                    />
                                </div>

                                {/* Back face */}
                                <div
                                    className="absolute inset-0"
                                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                >
                                    <img
                                        src="/original/profile.png"
                                        alt={info.name}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        {/* Decorative elements behind avatar */}
                        <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full animate-pulse" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 blur-2xl -z-10 rounded-full" />
                    </div>
                </motion.div>

                {/* Text Area - 7 to 8 cols on desktop */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
                    <div className="overflow-visible pb-4"> {/* Container to prevent clipping of descenders like 'g' */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/40 leading-[1.1] py-2"
                        >
                            {info.name}
                        </motion.h1>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground mb-6 font-light tracking-tight"
                    >
                        {info.jobDescription}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mb-10 leading-relaxed font-light"
                    >
                        {info.about}
                    </motion.p>
                </div>
            </div>

            {/* Background decoration */}
            <ThreeBackground />
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </section>
    );
}
