export const profile = {
  name: "Karthikeya Vellanki",
  monogram: "KV",
  subheadline:
    "B.S. in Computer Information Systems & Technology @ UT Dallas.",
  intro:
    "I design and build segmented networks, security systems, web applications.",
  status: "Open to Network & Security Engineering Roles",
  email: "ksv230002@utdallas.edu",
  location: "Richardson, TX",
  github: "https://github.com/KarthikeyaVell",
  linkedin: "https://linkedin.com/in/karthikeya-vellanki",
  resume: "/resume.pdf",
  copyright: "© Karthikeya Vellanki. Engineered with precision.",
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const lab = {
  title: "Self-Hosted Enterprise Home Lab & SOC",
  role: "Network Security Engineer",
  timeline: "May 2026 – Present",
  summary:
    "A segmented lab on Proxmox with a dual-WAN OPNsense edge, Wazuh telemetry, Suricata inspection, WireGuard access, and Pi-hole DNS.",
  github: "https://github.com/KarthikeyaVell/Soc_Home_Lab",
  stack: [
    {
      id: "proxmox",
      name: "Proxmox VE",
      role: "Hypervisor",
      detail:
        "Hosts the lab. The firewall, DNS, detection, and other services run as virtual machines and containers on Proxmox.",
    },
    {
      id: "opnsense",
      name: "OPNsense",
      role: "Firewall",
      detail:
        "Sits at the edge as the dual-WAN firewall. It handles routing, NAT, and segmentation between the AT&T gateway and the rest of the lab.",
    },
    {
      id: "wazuh",
      name: "Wazuh SIEM/XDR",
      role: "SIEM/XDR",
      detail:
        "Collects endpoint telemetry from the lab. 360+ alerts were triaged within 24 hours, with 0 critical incidents.",
    },
    {
      id: "suricata",
      name: "Suricata IDS",
      role: "Intrusion detection",
      detail:
        "Inspects lab traffic for known intrusion signatures and feeds that visibility into the security stack.",
    },
    {
      id: "wireguard",
      name: "WireGuard",
      role: "VPN",
      detail:
        "Provides remote access with public/private key authentication, so the lab stays reachable with zero exposed ports on the gateway.",
    },
    {
      id: "pihole",
      name: "Pi-hole",
      role: "DNS sinkhole",
      detail:
        "Filters DNS for the lab and blocks 99,000+ domains across 4 active clients.",
    },
    {
      id: "os",
      name: "Linux/FreeBSD",
      role: "Operating systems",
      detail:
        "The guest systems under Proxmox. OPNsense runs on FreeBSD, and the rest of the lab services run on Linux.",
    },
  ],
  metrics: [
    {
      value: "5+",
      label: "Zero unplanned downtime",
      detail: "Consecutive days of sustained uptime.",
    },
    {
      value: "99,000+",
      label: "Blocked domains",
      detail: "Pi-hole DNS sinkhole across 4 active clients.",
    },
    {
      value: "360+",
      label: "Alerts triaged",
      detail: "Wazuh SIEM/XDR telemetry within 24h. 0 critical incidents.",
    },
    {
      value: "0",
      label: "Exposed ports",
      detail: "WireGuard with public/private key auth on an AT&T gateway.",
    },
  ],
} as const;

export type TopologyNode = {
  id: string;
  name: string;
  role: string;
  detail: string;
  x: number;
  y: number;
};

export const topologyNodes: TopologyNode[] = [
  {
    id: "wan",
    name: "Dual WAN",
    role: "AT&T gateway",
    detail:
      "Edge connectivity in front of the firewall. Remote access stays on WireGuard, with no published services.",
    x: 50,
    y: 12,
  },
  {
    id: "opnsense",
    name: "OPNsense",
    role: "Firewall",
    detail:
      "Dual-WAN firewall for routing, NAT, and segmentation between the gateway and the lab.",
    x: 50,
    y: 34,
  },
  {
    id: "wireguard",
    name: "WireGuard",
    role: "VPN",
    detail:
      "Public/private key authentication for remote access. Zero exposed ports on the gateway.",
    x: 16,
    y: 58,
  },
  {
    id: "proxmox",
    name: "Proxmox VE",
    role: "Hypervisor",
    detail:
      "Hosts the lab virtual machines and containers, including the security tooling.",
    x: 50,
    y: 58,
  },
  {
    id: "pihole",
    name: "Pi-hole",
    role: "DNS sinkhole",
    detail: "Blocks 99,000+ domains across 4 active clients.",
    x: 84,
    y: 58,
  },
  {
    id: "wazuh",
    name: "Wazuh",
    role: "SIEM/XDR",
    detail:
      "Endpoint telemetry. 360+ alerts triaged within 24 hours, with 0 critical incidents.",
    x: 36,
    y: 84,
  },
  {
    id: "suricata",
    name: "Suricata",
    role: "IDS",
    detail: "Signature-based intrusion detection on lab traffic.",
    x: 68,
    y: 84,
  },
];

export const topologyEdges = [
  ["wan", "opnsense"],
  ["opnsense", "wireguard"],
  ["opnsense", "proxmox"],
  ["opnsense", "pihole"],
  ["proxmox", "wazuh"],
  ["proxmox", "suricata"],
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type HackathonSlot = {
  event: string;
  project: string;
  summary: string;
  links: ProjectLink[];
};

export const projects = [
  {
    id: "campus",
    title: "Secure Multi-Floor Campus Network",
    context: "Cisco Packet Tracer",
    points: [
      "3-tier hierarchical architecture (Core, Distribution, Access) across 4 buildings, 4 floors each.",
      "6 departmental VLANs, with an isolated staff and student lab server branch.",
      "Inter-VLAN routing, dynamic DHCP and RIP, and confirmed sub-3ms ping latency.",
    ],
    visual: "campus" as const,
  },
  {
    id: "smb",
    title: "Segmented Small Business Network",
    context: "Cisco Packet Tracer",
    points: [
      "Dedicated VLANs for Administration, Finance, and Customer Service.",
      "Router-on-a-stick inter-VLAN routing, 802.1Q trunking, and DHCP.",
      "Layer 2 switch port security on access ports.",
    ],
    visual: "business" as const,
  },
];

export const hackathons: HackathonSlot[] = [
  {
    event: "HackTX",
    project: "Financial Finish",
    summary:
      "Financial planning app that turns a budget into a car plan with Gemini, built in TypeScript, Next.js, FastAPI, and Tailwind.",
    links: [
      { label: "Demo", href: "https://devpost.com/software/financial-finish" },
      { label: "GitHub", href: "https://github.com/BenWowo/hacktx-25" },
    ],
  },
  {
    event: "HackUTD",
    project: "FinFlow",
    summary:
      "Multilingual financial web app with an AI assistant for text and voice guidance across four languages.",
    links: [
      { label: "Demo", href: "https://devpost.com/software/finflow-t2s9h4" },
      { label: "GitHub", href: "https://github.com/KarthikeyaVell/hackUTD" },
    ],
  },
];

export const hackathonSlotLabels = ["Demo", "Diagram", "GitHub"] as const;

export const certifications = [
  {
    id: "ccna",
    code: "CCNA",
    name: "Cisco Certified Network Associate",
    detail: "Routing, switching, and enterprise network foundations.",
  },
  {
    id: "isc2",
    code: "CC",
    name: "ISC2 Certified in Cybersecurity",
    detail: "Security principles, access control, and network defense.",
  },
  {
    id: "google",
    code: "Google",
    name: "Google Cybersecurity Professional Certificate",
    detail: "Linux, SQL, and security fundamentals.",
  },
  {
    id: "java",
    code: "Java",
    name: "Java Information Technology Specialist",
    detail: "Java application fundamentals and language fluency.",
  },
] as const;

export const skillGroups = [
  {
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
