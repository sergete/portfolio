import { motion } from "framer-motion";
import { info } from "@/data/info";
import { Terminal } from "lucide-react";
import { FaAws, FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import {
    SiDocker,
    SiTerraform,
    SiGithubactions,
    SiPython,
    SiGit,
    SiLinux,
    SiGnubash,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiFastapi,
    SiDjango,
    SiOllama,
    SiLangchain,
    SiGooglecloud,
    SiOracle,
    SiPycharm
} from "react-icons/si";

const iconMap: Record<string, any> = {
    "AWS": <FaAws className="text-[#FF9900]" />,
    "Azure": <VscAzure className="text-[#0078D4]" />,
    "GCP": <SiGooglecloud className="text-[#4285F4]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Terraform": <SiTerraform className="text-[#7B42BC]" />,
    "Github actions": <SiGithubactions className="text-[#2088FF]" />,
    "Azure DevOps": <VscAzure className="text-[#0078D7]" />,
    "CI/CD": <SiGithubactions className="text-[#2088FF]" />,
    "Python": <SiPython className="text-[#3776AB] dark:text-[#4B8BBE]" />,
    "Java": <FaJava className="text-[#007396] dark:text-[#38B5E6]" />,
    "Git": <SiGit className="text-[#F05032]" />,
    "Linux": <SiLinux className="text-[#FCC624]" />,
    "Bash": <SiGnubash className="text-[#4EAA25]" />,
    "FastAPI": <SiFastapi className="text-[#009688]" />,
    "Django": <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />,
    "Ollama": <SiOllama className="light:text-[#000000] dark:bg-white" />,
    "LangChain": <SiLangchain className="light:text-white dark:bg-white" />,
    "ChromaDB": <FaDatabase className="text-[#CC2927]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
    "MySQL": <SiMysql className="text-[#4479A1] dark:text-[#619ECB]" />,
    "SQL Server": <FaDatabase className="text-[#CC2927]" />,
    "Oracle": <SiOracle className="text-[#F80000]" />,
    "PyCharm": <SiPycharm className="light:text-[#000000] dark:text-black dark:bg-white" />,
    "VSCode": <VscVscode className="text-[#007ACC]" />,
    "Antigravity": <FaCode className="text-[#FF4081]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "React": <SiReact className="text-[#61DAFB]" />,
};

export function Skills() {
    return (
        <section id="skills" className="min-h-[100svh] w-full flex items-center justify-center py-32 snap-start bg-background relative px-4">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <Terminal className="w-8 h-8" />
                    Technical Skills
                </motion.h2>

                <div className="flex flex-col gap-12">
                    {info.skills.map((category: any, categoryIndex: number) => (
                        <div key={categoryIndex} className="flex flex-col gap-6">
                            <h3 className="text-2xl font-semibold border-b pb-2">{category.section}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill: string, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                                    >
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center h-16 w-16 bg-background rounded-2xl shadow-sm border border-border/50">
                                            {iconMap[skill] || <Terminal className="w-8 h-8 text-muted-foreground" />}
                                        </div>
                                        <span className="font-medium text-sm text-center">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
