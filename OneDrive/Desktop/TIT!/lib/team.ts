export type TeamMember = {
  name: string
  slug: string
  address: string
  dateOfJoining: string
  qualification: string
  role: string
  projects: string[]
  interns?: string[]
  skills: string[]
  image?: string
  bio?: string
}

const team: TeamMember[] = [
  {
    name: "Sankar Vengadesan",
    slug: "sankar-vengadesan",
    address: "Theerthamalai",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Developer",
    projects: ["TNSCST", "Sample websites", "Mini Project of NEWS Summarization"],
    interns: ["NoviTech (Online)", "StackQueue"],
    skills: ["frontend", "backend", "database", "cloud", "deployment"],
    image: "/team/sankar.jpg",
    bio: "Full-stack developer crafting scalable web and mobile applications with a focus on performance and UX."
  },
  {
    name: "Naveen Prakash Dharman",
    slug: "naveen-prakash-dharman",
    address: "Bommidi",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Web Designer",
    projects: ["TNSCST", "Sample websites", "AI chatbot with task management systems"],
    interns: ["NoviTech (Online)"],
    skills: ["frontend", "backend", "database", "cloud", "deployment"],
    image: "/team/naveen-prakash.jpg",
    bio: "Creative UI/UX designer focused on accessible interfaces and smooth user journeys."
  },
  {
    name: "Sangavi Sankaran",
    slug: "sangavi-sankaran",
    address: "Hanumantheertham",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Web Designer",
    projects: ["TNSCST participation", "SIH plan submission", "Sample websites", "EduFind - online courses platform"],
    interns: ["NoviTech (Online)", "StackQueue"],
    skills: ["frontend", "cloud", "deployment", "design"],
    image: "/team/sangavi.jpg",
    bio: "Designer focused on education platforms and thoughtful visual design."
  },
  {
    name: "Poovarasan Chakkaravathi",
    slug: "poovarasan-chakkaravathi",
    address: "Harur",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Backend Developer",
    projects: ["TNSCST", "Sample websites", "Music integration"],
    interns: ["NoviTech (Online)", "Gateway Software Solutions"],
    skills: ["frontend", "backend", "database", "cloud", "deployment"],
    image: "/team/poovarasan.jpg",
    bio: "Server-side engineer building secure, scalable APIs and integrations."
  },
  {
    name: "Gokulpradass Perumal",
    slug: "gokulpradass-perumal",
    address: "Harur",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Editor",
    projects: ["video", "photo", "3D editing"],
    interns: ["NoviTech (Online)", "Pantech"],
    skills: ["Capcut", "VN", "Adobe"],
    image: "/team/gokul-pradass.jpg",
    bio: "Videographer and editor blending creative storytelling with technical precision."
  },
  {
    name: "Vignesh Mohan",
    slug: "vignesh-mohan",
    address: "A. Pallipatti",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Marketing",
    projects: ["Happy Frame Photography", "Daily Bazaar", "Mentronix"],
    interns: ["NoviTech (Online)", "launchED"],
    skills: ["Canva", "Meta business suite"],
    image: "/team/vignesh.jpg",
    bio: "Marketing specialist focusing on visual branding and campaign growth."
  },
  {
    name: "Gowtham Karthikeyan Sanjaiganthi",
    slug: "gowtham-karthikeyan-sanjaiganthi",
    address: "Omalur",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Marketing",
    projects: ["Happy Frame Photography", "Daily Bazaar", "Mentronix"],
    interns: ["NoviTech (Online)", "launchED"],
    skills: ["Canva", "Meta business suite", "AdSense"],
    image: "/team/gowtham.jpg",
    bio: "Growth marketer and ad specialist optimizing acquisition and monetization."
  },
  {
    name: "Dhanalakshmi Senthilkumar",
    slug: "dhanalakshmi-senthilkumar",
    address: "Theerthamalai",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Analyst",
    projects: ["TNSCST", "SIH", "Naan Mudhalvan"],
    interns: ["Oodugaa Tech", "NoviTech"],
    skills: ["python", "ms office"],
    image: "/team/dhanalakshmi.jpg",
    bio: "Data analyst experienced in research and machine learning for product insights."
  },
  {
    name: "Prasanth Eswaran",
    slug: "prasanth-eswaran",
    address: "C. Pallipatti",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Analyst",
    projects: ["Blink Kit"],
    interns: ["NextGen"],
    skills: ["Excel", "Python", "PowerBI", "SQL", "Visualization"],
    image: "/team/prasanth.jpg",
    bio: "Data and visualization specialist delivering dashboards and analytics solutions."
  },
  {
    name: "Sasikumar Pachaiyappan",
    slug: "sasikumar-pachaiyappan",
    address: "H. Pudhupatti",
    dateOfJoining: "25-NOV-2025",
    qualification: "B.Tech",
    role: "Analyst",
    projects: ["Blink Kit", "Netflix"],
    interns: ["Gateway Software Solution", "Deloitte Virtual Internship", "NoviTech"],
    skills: ["Excel", "Python", "PowerBI", "SQL", "Visualization"],
    image: "/team/sasikumar.jpg",
    bio: "Analytics expert focused on optimizing business intelligence and reporting." 
  }
]

export default team
