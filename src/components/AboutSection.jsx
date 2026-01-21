import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{
    return (
        <section  id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-1xl font-semibold"> Passionate Software Engineer & Data Engineer </h3>
                        <p className="text-muted-foreground">
                             I have professional experience as a PL Automation Developer, where I built an automation bot from scratch. I specialize in backend development, automation, and APIs, and I work with technologies like Java, Python, and modern database systems to create efficient and reliable solutions.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about solving real-world problems through clean, well-structured code. I love learning new technologies, exploring innovative approaches, and building applications that make a meaningful impact while continuing to grow as a software engineer
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="public/externals/Rick_Woubinwou_Resume.pdf" target="_blank" className="px-6 py-2  rounded-full border-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Backend Development </h4>
                                    <p className="text-muted-foreground">
                                        Skilled in building scalable backend systems, automation tools, and APIs with Java, Python, and modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Soft Skills </h4>
                                    <p className="text-muted-foreground">
                                        Collaborative, adaptable, and solution-oriented, with strong communication and a passion for learning and growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Professional Experience </h4>
                                    <p className="text-muted-foreground">
                                        Developed an automation bot at The Hanover Insurance Group, currently in production, sharpening backend, automation, and problem-solving skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}