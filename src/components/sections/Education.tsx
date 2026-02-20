import { motion } from "framer-motion";
import { info } from "@/data/info";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="min-h-[100svh] w-full flex items-center justify-center snap-start bg-background relative px-4 py-32">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <GraduationCap className="w-8 h-8" />
                    Education
                </motion.h2>

                <div className="space-y-8">
                    {info.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-l-2 border-primary/20 pl-6 relative"
                        >
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                            <h3 className="text-2xl font-semibold">{edu.name}</h3>
                            <p className="text-muted-foreground mb-2">{edu.location} | {edu.startDate} - {edu.endDate}</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground/80">
                                {edu.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
