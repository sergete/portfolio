import { motion } from "framer-motion";
import { info } from "@/data/info";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="min-h-[100svh] w-full flex items-center justify-center snap-start bg-background relative px-4 py-32">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <Briefcase className="w-8 h-8" />
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {info.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-l-2 border-primary/20 pl-6 relative"
                        >
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                            <h3 className="text-2xl font-semibold">{job.name}</h3>
                            <h4 className="text-xl text-primary font-medium">{job.position}</h4>
                            <p className="text-muted-foreground mb-4">{job.location} | {job.startDate} - {job.endDate}</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground/80">
                                {job.description.map((desc, i) => (
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
