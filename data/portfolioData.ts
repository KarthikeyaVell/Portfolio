export const profile = {
  name: "Karthikeya Vellanki",
  monogram: "KV",
  degree:
    "B.S. in Computer Information Systems & Technology @ UT Dallas",
  headline: "Engineering secure, scalable networks & enterprise systems.",
  availability: "Open to Network & Security Engineering Roles",
  email: "ksv230002@utdallas.edu",
  location: "Richardson, TX",
  github: "https://github.com/karthikeyavellanki",
  linkedin: "https://www.linkedin.com/in/karthikeya-vellanki",
  resumeHref: "/Karthikeya_Vellanki_Resume.pdf",
  copyright: "© 2026 Karthikeya Vellanki. Engineered with precision.",
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const labShowcase = {
  title: "Self-Hosted Enterprise Home Lab & SOC",
  role: "Network Security Engineer",
  timeline: "May 2026 – Present",
  repoUrl: "https://github.com/KarthikeyaVell/Soc_Home_Lab",
  repoLabel: "Lab repository",
  tags: [
    "Proxmox VE",
    "OPNsense",
    "Wazuh SIEM/XDR",
    "Suricata IDS",
    "WireGuard",
    "Pi-hole",
    "Linux/FreeBSD",
  ],
  metrics: [
    {
      value: "5+",
      title: "Zero Unplanned Downtime",
      detail: "Consecutive days of sustained uptime.",
    },
    {
      value: "99,000+",
      title: "Blocked Domains",
      detail: "Pi-hole DNS sinkhole across 4 active clients.",
    },
    {
      value: "360+",
      title: "Alerts Triaged",
      detail:
        "Wazuh SIEM/XDR endpoint telemetry within 24h, with 0 critical incidents.",
    },
    {
      value: "0",
      title: "Exposed Ports",
      detail:
        "WireGuard VPN with public/private key auth on an AT&T gateway.",
    },
  ],
} as const;

export type LabNode = {
  id: string;
  kicker: string;
  name: string;
  detail: string;
  placement: string;
};

export const labNodes: LabNode[] = [
  {
    id: "att",
    kicker: "Edge",
    name: "AT&T Gateway",
    detail:
      "WAN handoff. WireGuard is the only remote path, authenticated with a public/private key pair and no forwarded ports.",
    placement: "md:col-start-2 md:col-span-2",
  },
  {
    id: "opnsense",
    kicker: "Firewall",
    name: "OPNsense Dual-WAN",
    detail:
      "Edge firewall and router. Dual-WAN policy routing with Suricata IDS inspecting traffic before it reaches the lab.",
    placement: "md:col-start-2 md:col-span-2",
  },
  {
    id: "wireguard",
    kicker: "Remote access",
    name: "WireGuard VPN",
    detail:
      "Site access for operators. Peers authenticate with keys, so the gateway does not publish open service ports.",
    placement: "md:col-span-2",
  },
  {
    id: "proxmox",
    kicker: "Hypervisor",
    name: "Proxmox VE",
    detail:
      "Compute plane for the lab. Virtual machines and LXC containers run the SOC tooling and internal services.",
    placement: "md:col-span-2",
  },
  {
    id: "wazuh",
    kicker: "Detection",
    name: "Wazuh SIEM",
    detail:
      "SIEM/XDR for endpoint telemetry. 360+ alerts triaged inside 24 hours, with zero critical incidents.",
    placement: "md:col-start-3",
  },
  {
    id: "pihole",
    kicker: "DNS",
    name: "Pi-hole",
    detail:
      "Network-wide DNS sinkhole. 99,000+ domains blocked across 4 active clients.",
    placement: "md:col-start-4",
  },
];

export const labEdges = [
  { from: "att", to: "opnsense" },
  { from: "opnsense", to: "wireguard" },
  { from: "opnsense", to: "proxmox" },
  { from: "proxmox", to: "wazuh" },
  { from: "proxmox", to: "pihole" },
] as const;

export type StudyProject = {
  id: string;
  title: string;
  context: string;
  summary: string;
  points: string[];
  span: string;
};

export const studyProjects: StudyProject[] = [
  {
    id: "campus",
    title: "Secure Multi-Floor Campus Network",
    context: "Cisco Packet Tracer",
    summary:
      "A 3-tier hierarchical design — Core, Distribution, and Access — spanning 4 buildings with 4 floors each.",
    points: [
      "Six departmental VLANs with inter-VLAN routing",
      "Isolated staff and student lab server branch",
      "Dynamic DHCP and RIP",
      "Confirmed sub-3ms ping",
    ],
    span: "lg:col-span-2",
  },
  {
    id: "smb",
    title: "Segmented Small Business Network",
    context: "Cisco Packet Tracer",
    summary:
      "A compact business LAN that separates Administration, Finance, and Customer Service while keeping addressing automatic.",
    points: [
      "VLANs for Administration, Finance, and Customer Service",
      "Router-on-a-stick with 802.1Q trunking",
      "DHCP for each segment",
      "Layer 2 port security",
    ],
    span: "",
  },
];

export const hackathons = [
  {
    id: "hacktx",
    name: "HackTX",
    note: "Build notes, diagram, demo, and repository will be published with the project.",
  },
  {
    id: "hackutd",
    name: "HackUTD",
    note: "Build notes, diagram, demo, and repository will be published with the project.",
  },
  {
    id: "calhacks",
    name: "Cal Hacks",
    note: "Build notes, diagram, demo, and repository will be published with the project.",
  },
] as const;

export const certifications = [
  {
    id: "ccna",
    title: "Cisco Certified Network Associate",
    short: "CCNA",
    detail: "Routing, switching, and network access.",
  },
  {
    id: "isc2",
    title: "ISC2 Certified in Cybersecurity",
    short: "CC",
    detail: "Security principles, access, and network defense.",
  },
  {
    id: "google",
    title: "Google Cybersecurity Professional Certificate",
    short: "Google",
    detail: "Linux, SQL, and security fundamentals.",
  },
  {
    id: "java",
    title: "Java Information Technology Specialist",
    short: "Java",
    detail: "Application development fundamentals.",
  },
] as const;

export const skillGroups = [
  {
    id: "networking",
    title: "Networking",
    skills: [
      "OSI Layers",
      "VLANs",
      "Inter-VLAN Routing",
      "802.1Q Trunking",
      "Router-on-a-Stick",
      "Subnetting",
      "DHCP",
      "DNS",
      "Cisco Packet Tracer",
      "TCP/IP",
      "NAT",
      "RIP",
      "SSH",
    ],
  },
  {
    id: "systems",
    title: "Systems & Cloud",
    skills: [
      "Proxmox VE",
      "LXC Containers",
      "VM Deployment",
      "Linux",
      "FreeBSD",
      "Bash",
      "Windows Server (Active Directory)",
    ],
  },
  {
    id: "security",
    title: "Security",
    skills: [
      "Network Segmentation",
      "Port Security",
      "WireGuard",
      "Tailscale",
      "Wazuh SIEM/XDR",
      "Suricata IDS",
      "OPNsense",
      "pfSense",
    ],
  },
  {
    id: "programming",
    title: "Programming & Databases",
    skills: [
      "Python",
      "SQL",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
    ],
  },
] as const;
