const personelInfo = {
  name: "Resul TURAN",
  email: "rturan29+work@gmail.com",
  githubUrl: "https://github.com/rturan29",
  linkedInUrl: "https://www.linkedin.com/in/resulturan",
  skills: [
    { name: "Javascript", rate: "90" },
    { name: "React.js", rate: "80" },
    { name: "Redux", rate: "70" },
    { name: "Node.js", rate: "60" },
    { name: "HTML", rate: "90" },
    { name: "CSS", rate: "80" },
    { name: "UI Design", rate: "50" },
  ],
};

export const naviInfo = {
  main: `Hello I'm ${personelInfo.name} `,
  skills: personelInfo.skills.map(x => x.name),
  colors: [
    "text-red-900",
    "text-green-900",
    "text-yellow-900",
    "text-blue-900",
    "text-indigo-900",
    "text-pink-900",
  ],
};
