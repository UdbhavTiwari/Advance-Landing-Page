
import { Briefcase, GraduationCap, Lightbulb, Users ,Code } from "lucide-react";
import { Brain, MessageCircle } from "lucide-react";


export const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#highlights", label: "Highlights" },
    { href: "#qualification", label: "Qualification" },
    { href: "#applySection", label: "Apply Now" },
  ];
  



export const highlightss = [
  {
    icon: <Briefcase size={24} className="text-orange-400" />,
    title: "Why Do an Internship at Cognifyz Technologies?",
    description:
      "Internships are crucial in shaping a student’s career by providing hands-on experience and exposure to real-world projects. Cognifyz Technologies offers a dynamic internship program that enables students and professionals to develop their skills, gain industry insights, and work on practical projects. Interns from various countries have successfully completed internships and gained valuable experience.",
  },
  {
    icon: <Users size={24} className="text-purple-500" />,
    title: "Who Can Apply for This Internship?",
    description:
      "Students, recent graduates, and professionals looking to enhance their skills can apply. Whether you're a beginner or have prior experience, our internship program is designed to accommodate different skill levels and learning goals.",
  },
  {
    icon: <Code size={24} className="text-green-500" />,
    title: "What Technologies Will I Work On?",
    description:
      "Interns get hands-on experience with cutting-edge technologies such as React.js, Node.js, Python, Data Science, and more. The program is structured to provide real-world exposure through industry projects and expert mentorship.",
  },
];

  


export const qualifications = [
  {
    icon: <Code size={24} className="text-orange-500" />, 
    title: "Basic Knowledge of Programming",
    description: "The candidate should have a fundamental understanding of programming languages, syntax, and problem-solving approaches."
  },
  {
    icon: <MessageCircle size={24} className="text-blue-500" />, 
    title: "Communication Skills",
    description: "The candidate should be able to articulate ideas clearly, work collaboratively in a team, and effectively convey technical concepts."
  },
  {
    icon: <Brain size={24} className="text-green-500" />, 
    title: "Critical Thinking",
    description: "The candidate should have strong analytical skills, the ability to evaluate different solutions, and make logical decisions under pressure."
  }
];

