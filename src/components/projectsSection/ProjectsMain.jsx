import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "ByeHome",
    align: "right",
    image: "https://res.cloudinary.com/dylwuzrmr/image/upload/v1741516823/website-img-4_fy7pjp.jpg",
    link: "https://www.linkedin.com/posts/naveen-kumar-850520270_travel-accommodation-selection-and-service-activity-7246545469135323136-PzCh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJI4rwBWljb73i7eWnYR0STiiSUW_K-Oe0",
  },
  {
    name: "Cakeoo",
    align: "left",
    image: "https://res.cloudinary.com/dylwuzrmr/image/upload/v1741516823/website-img-2_zpbqim.webp",
    link: "https://www.linkedin.com/posts/naveen-kumar-850520270_cake-delivery-web-application-mern-activity-7246547560566300673-9Wky?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJI4rwBWljb73i7eWnYR0STiiSUW_K-Oe0",
  },
  {
    name: "Sign Language Decoder",
    align: "right",
    image: "https://res.cloudinary.com/dylwuzrmr/image/upload/v1741516824/website-img-1_hdbphl.jpg",
    link: "#",
  },
  {
    name: "Street Light auto fault detection",
    align: "left",
    image: "https://res.cloudinary.com/dylwuzrmr/image/upload/v1741516824/website-img-3_eahyfg.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
