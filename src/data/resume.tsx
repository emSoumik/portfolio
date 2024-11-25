import { Icons } from "@/components/icons";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Soumik Halder",
  initials: "SH",
  url: "https://github.com/emSoumik",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka,+India",
  description:
    "21 👨‍💻 • Growth Head @Tenacity | Community @Devs-Dungeon | Web3 | Front-end Developer | Opensource | Tech 👨‍🎓",
  summary:
    "I’m currently an undergrad CS Student (Class of 2027), where I merge curiosity with code. When I’m not debugging code, you’ll find me building bridges between people and opportunities as the Head of Community and Partnerships at Tenacity. I thrive for open source &empowering communities. I believe that great things happen when people come together—and I strive to make that magic happen.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://www.notion.so/your-notion-blog-url",
      icon: NotionLogoIcon,
      label: "Notion",
    },
  ],
  contact: {
    email: "soumikhalder026@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/emSoumik",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/soumik7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/emSoumik",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tenacity HQ",
      href: "https://tenacityhq.vercel.app/",
      badges: [],
      location: "Hybrid, Bengaluru",
      title: "Head of Growth and Partnerships",
      logoUrl: "/TenacityLogo.jpg",
      start: "July 2023",
      end: "Present",
      description:
        "I lead the Growth and Partnerships team at Tenacity, a community-driven platform that connects students with opportunities. I collaborate closely with the team to develop and implement growth strategies, partnerships, and community initiatives. Also lead strategic partnerships with key industry events and hackathons, including IndiaFOSS 3.0, HacktoberFest BLR, Web3 Carnival BLR, and BUIDL for Web3 to increase community visibility and engagement.",
    },

    {
      company: "Devs-Dungeon",
      href: "",
      badges: [],
      location: "Remote",
      title: "Community Associate and Reginol Lead",
      logoUrl: "/DevsDungeon.png",
      start: "March 2023",
      end: "December 2023",
      description:
        "I managed 15+ community groups, primarily on WhatsApp, and led the Bengaluru region group. I actively promoted the community at various events and secured sponsors for hackathons. Additionally, I partnered with prominent events as an outreach and community partner, including Polkadot India, WeMakeDevs, and several hackathons.",
    },
  ],
  education: [
    {
      school: "RV University",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "SafeKey Wallet",
      href: "https://safekey-wallet.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "SafeKey Wallet is a sleek and intuitive web application designed for effortlessly generating and managing Ethereum and Solana wallets. With features like seed phrase generation and wallet recovery, it ensures your crypto assets are secure and easily accessible. Built primarily with TypeScript, along with CSS and JavaScript, SafeKey Wallet combines robust functionality with a seamless user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MagicUI",
        "Shadcn UI",
        "Ethereum",
        "Solana",
      ],
      links: [
        {
          type: "Website",
          href: "https://safekey-wallet.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/emSoumik/safekey-wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/SafekeyWalletIntro.mp4",
    },
  ],
} as const;
