import { ArrowBigRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1, 
        title: "Enterprise Referral Automation Bot",
        description:"Developed a production-grade automation system at The Hanover Insurance Group to streamline customer referral number processing, reduce manual effort, and improve operational efficiency.",
        image: "/projects/Hanover_cnr_pic.png",
        tags:["Python", "SQL", "CyberArk", "Bitbucket"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id:2, 
        title: "Smart Inventory & Supply Chain Management System",
        description:"Designed and implemented a Java-based inventory management system for an Honors Data Structures project, featuring demand tracking, restocking alerts, and efficient data handling using core algorithms.",
        image: "/projects/Sims_pic.png",
        tags:["Java", "GUI", "Data Structures", "Algorithms", "OOP"],
        demoUrl: "#",
        githubUrl: "https://github.com/RDjouwe7/SIMS",
    },
    {
        id:3, 
        title: "Personalized Fitness Training Web App",
        description:"Designed and deployed a full-stack web application that delivers customized workout plans through a clean and responsive user interface, demonstrating modern web development practices",
        image: "/projects/Web_App_pic.png",
        tags:["Node.js", "Javascript", "Vue.js"],
        demoUrl: "#",
        githubUrl: "#",
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance , and user experience.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} 
                            alt = {project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div> 
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                                         {tag}
                                    </span>
                                )))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto"
                    target="_blank"
                    href="https://github.com/RDjouwe7">
                        Check My GitHub <ArrowBigRight size={16} />
                    </a>
                </div>
            </div>
        </div>

    </section>
}