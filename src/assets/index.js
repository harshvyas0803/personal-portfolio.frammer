import project1 from "../assets/projects/project-1.png";
  import  Hub from "../assets/projects/Hub-scrnsht.png"
import tactix from "../assets/projects/Tactix.png"
import taskvy from '../assets/projects/Taskvy.jpg'





export const HERO_CONTENT = `I am a third-year Computer Science Engineering student and a passionate full-stack developer specializing in the MERN stack and React Native. With expertise in front-end (React.js), back-end (Node.js, MongoDB), and real-time communication (WebSockets), I build scalable web and mobile applications. I thrive in solving complex problems, optimizing user experiences, and continuously learning new technologies to stay ahead in the field.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a strong passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, through numerous hands-on projects. My journey in web development began with a deep curiosity for how things work, and I have continuously strived to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and working on personal projects to further my skills.`;

export const EXPERIENCES = [
  {
    year: "20 Sep 2024 - 10 Dec 2024",
    role: "Front-end Developer",
    company: "5TECHG LAB LLP",
    description: [
      "Developed and deployed the company’s landing page based on pre-designed UI/UX specifications.",
      "Enhanced animations and visual appeal for multiple static websites to improve user engagement.",
      "Designed and built a key component for a cylinder management web application using React and Redux (Thunk).",
      "Implemented a responsive front end for a property listing website, ensuring an optimal user experience."
    ],
    letter: "https://drive.google.com/file/d/16kfMWcbCaqR9N3c-b_p-66e1Fu79xAL3/view?usp=sharing",
    technologies: ["React", "Redux", "Redux Thunk", "UI/UX", "Git", "HTML", "CSS", "JavaScript"]
  }
];


 
export const PROJECTS = [
  {
    title: "Hub-Blog",
    image: Hub,   
    description:
      "Hub-Blog is a modern, feature-rich blogging platform where users can create, share, and engage with content. Built using React.js for a seamless user experience, it incorporate  CSS for a sleek UI, and MongoDB for efficient data storage.",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "https://hub-puce-eight.vercel.app/" 
  },

  {
    title: "TacTix - Real-time Tic-Tac-Toe",
    image: tactix,  
    description:
      "TacTix is a real-time multiplayer Tic-Tac-Toe game where players can connect via WebRTC and communicate using Socket.io. Built with React , it delivers a smooth and interactive gaming experience.",
    technologies: ["React.js", "WebRTC", "Socket.io", "Node.js"],
    link: "https://tactix-web.vercel.app/" 
  },

  {
    title: "Taskvyy - Todo App",
    image: taskvy, 
    description:
      "Taskvyy is a powerful task management app built with React Native. It allows users to manage their daily tasks efficiently, featuring drag-and-drop functionality, notifications, and real-time sync.",
    technologies: [
      "React Native",
      "Redux Toolkit",
      "Expo",
      "React Native Paper"
    ],
    link: "https://github.com/harshvyas0803/TASKVY"
  }
,  


  // OLD PROJECTS BELOW
  {
    title: "AI-ML Agency",
    image: project1,
    description:
      "Lazareev AI/ML Agency is a dynamic website built using HTML, CSS, JavaScript, and GSAP with a sleek and modern interface. It showcases AI/ML capabilities with engaging animations and an intuitive user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "https://lazarev-delta.vercel.app/"
  },

   

  
];


export const CONTACT = {
   
  email: "harshvyas0803@gmail.com",
  
 
 
};
