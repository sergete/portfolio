import { motion } from "framer-motion";
import { info } from "@/data/info";
import { Award } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="min-h-[100svh] w-full flex items-center justify-center snap-start bg-background relative px-4 py-32">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <Award className="w-8 h-8 text-primary" />
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {info.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-secondary/30 border border-border group hover:border-primary transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cert.name}</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap">
                                    {cert.startDate} - {cert.endDate}
                                </span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground/80 text-sm">
                                {cert.description.map((desc, i) => (
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
