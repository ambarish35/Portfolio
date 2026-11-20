// All site content lives here. Edit text without touching components.
// Text wrapped in **double asterisks** in `about` is rendered highlighted.

export const profile = {
  name: 'Ambarish Sarkar',
  title: 'M.Tech CSE (Network & Information Security) @ IIT Hyderabad',
  tagline:
    'I build secure full-stack web apps and study how hardware leaks secrets.',
  resume: '/Ambarish_Sarkar_Resume.pdf',
}

export const socials = [
  { name: 'GitHub', icon: 'github', href: 'https://github.com/ambarish35' },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/ambarish-sarkar-372153214/',
  },
  { name: 'Email', icon: 'email', href: 'mailto:ambarishsarkar35@gmail.com' },
  { name: 'Phone', icon: 'phone', href: 'tel:+919563674801' },
]

export const about = [
  "I'm an M.Tech student in Computer Science & Engineering at **IIT Hyderabad**, specialising in Network & Information Security. I like working across the stack, from React and TypeScript front ends to Flask, PHP and MySQL back ends, and I care about building things that are secure by default.",
  'My research is in **systems security**. For my M.Tech thesis I study occupancy-based cache side-channel attacks on multi-bank and hybrid last-level caches, extending a cache simulation framework to evaluate how different cache organisations hold up against information leakage. I have also built network testbeds with Mininet and Scapy to detect and localise middleboxes.',
  "Alongside research, I'm a **Teaching Assistant** for Advanced Data Structures and Algorithms, helping students with algorithmic concepts and problem solving, and evaluating coursework. Before IIT Hyderabad, I earned my B.Tech in Information Technology from Jalpaiguri Government Engineering College.",
]

export const research = [
  {
    label: 'Ongoing',
    title: 'Occupancy Attacks on Multi-Bank and Hybrid Last-Level Caches',
    subtitle: 'M.Tech Thesis · IIT Hyderabad',
    description:
      'Investigating occupancy-based cache side-channel attacks on multi-bank and hybrid LLC architectures under different cache organisations and attacker configurations. Extended a cache simulation framework to support configurable multi-bank LLC designs, and analysing how randomised/secure cache architectures resist occupancy-based information leakage.',
    tech: ['C/C++', 'Computer Architecture', 'Cache Security', 'Linux', 'Cache Simulation'],
  },
]

export const projects = [
  {
    title: 'Secure Peer-to-Peer Transaction Platform',
    href: 'https://github.com/ambarish-sarkar/TransactiWar-Repo',
    description:
      'A web platform for peer-to-peer fund transfers with authentication, transaction history and profile management. Hardened with bcrypt password hashing, prepared SQL statements, CSRF protection, session management and brute-force protection; transfers use MySQL transactions, and the app is containerised with Docker Compose.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Docker', 'Web Security'],
  },
  {
    title: 'Smart Attendance System using Face Recognition',
    href: 'https://github.com/ambarish35/Smart-Attendance',
    description:
      'A web-based attendance system that registers students and records attendance from webcam input. Uses face-api.js and a Python face-recognition service for similarity-based identity matching, with authentication, student and subject management, and attendance stored in Supabase.',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'Supabase', 'face-api.js'],
  },
  {
    title: 'SlotBook — Resource Booking Platform',
    href: 'https://github.com/ambarish35/SlotBook-Resource-Booking-Platform',
    description:
      'A web app for booking meeting rooms and shared equipment. Members browse free 30-minute slots, book several in one all-or-nothing step and cancel bookings; admins manage the catalog. MongoDB transactions make double booking impossible, and sessions use JWTs in httpOnly cookies with role-based access.',
    tech: ['TypeScript', 'React', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Online Code IDE',
    href: 'https://github.com/ambarish35/CODE-IDE',
    description:
      'A browser-based editor for HTML, CSS and JavaScript with three code panes and a live iframe preview that updates as you type.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
]

export const teaching = [
  {
    label: 'Jul 2026 — Ongoing',
    title: 'Teaching Assistant · Advanced Data Structures and Algorithms',
    subtitle: 'IIT Hyderabad',
    description:
      'Assisting in the delivery of the course for undergraduate and postgraduate students: supporting students with algorithmic concepts, problem solving and course doubts, and evaluating coursework and assignments.',
    tech: [],
  },
]

export const education = [
  {
    label: '2027',
    title: 'Indian Institute of Technology Hyderabad',
    subtitle: 'M.Tech, Computer Science & Engineering (Network & Information Security)',
    meta: 'CGPA 8.2',
  },
  {
    label: '2025',
    title: 'Jalpaiguri Government Engineering College',
    subtitle: 'B.Tech, Information Technology',
    meta: 'CGPA 9.00',
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'education', label: 'Education' },
]

export const credit = {
  text: 'Design inspired by',
  name: 'Brittany Chiang',
  href: 'https://brittanychiang.com',
}
