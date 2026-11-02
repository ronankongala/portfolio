export const PROFILE = {
  name: "hi, i'm ronan",
  tagline:
    'a security engineer who builds systems that notice things, mostly detection pipelines and honeypots, and risk scores that say what to fix first',
  email: 'kongalaronan@gmail.com',
  phone: '+1 (617) 602-5369',
  phoneHref: 'tel:+16176025369',
  github: 'https://github.com/ronankongala',
  linkedin: 'https://www.linkedin.com/in/ronan-kongala',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Newest first. `stat` is the headline number already stated in `desc`.
export type Role = {
  date: string;
  role: string;
  org: string;
  desc: string;
  current?: boolean;
  stat?: { value: string; label: string };
};

export const EXPERIENCE: Role[] = [
  {
    date: 'Sep 2026 to Present',
    role: 'AI Cybersecurity Intern',
    org: 'Abbott · Madison, WI (Hybrid)',
    current: true,
    stat: { value: '22,000+', label: 'vulnerabilities tracked' },
    desc: "Contributing to ExmanIq, an internal vulnerability management platform that tracks 22,000+ vulnerabilities across organizational assets with a predictive Impact x Likelihood risk model enriched with EPSS and NVD threat intelligence. Diagnosed a 27-day silent data-pipeline failure after spotting an anomalous flat trend in the platform's composite risk score. With a teammate, also built CrowdCheck Hive, which pulls CrowdStrike, Microsoft Intune, and ServiceNow CMDB data together to find devices missing endpoint security coverage.",
  },
  {
    date: 'Jun 2026 to Sep 2026',
    role: 'Cybersecurity Intern',
    org: 'Exact Sciences · Madison, WI (Hybrid)',
    stat: { value: '1,300+', label: 'app registrations scanned' },
    desc: 'Automated KeyCheck, a credential-risk monitoring pipeline that scans 1,300+ application registrations for expiring credentials before they cause an incident. Co-built Baseline Guardian, an endpoint compliance check that compares CrowdStrike, Microsoft Intune, Tanium, and ServiceNow CMDB records to assess security posture.',
  },
  {
    date: 'Jan 2026 to Apr 2026',
    role: 'Teaching Assistant, CY5001',
    org: 'Northeastern University, Khoury College',
    stat: { value: '61', label: 'graduate students' },
    desc: 'Ran lab sessions and graded 200+ assignments for 61 graduate students in Cybersecurity Threats and Defenses, resolving 150+ Piazza queries within a 24-hour SLA and cutting lab completion time by 30%.',
  },
  {
    date: '2025',
    role: 'First author, IEEE ICAISS',
    org: 'Fake job posting detection research',
    stat: { value: '98%', label: 'accuracy, 9,000+ postings' },
    desc: 'Published an ensemble ML approach (Random Forest, Gradient Boosting, XGBoost, AdaBoost with SMOTE) reaching 98% accuracy across 9,000+ postings.',
  },
  {
    date: 'Aug 2024 to Oct 2024',
    role: 'Cybersecurity Intern',
    org: 'NIELIT Virtual Academy, Ministry of Electronics and IT',
    stat: { value: '3', label: 'live environments assessed' },
    desc: 'Assessed network security across 3 live environments with Nmap and Docker, and used Random Forest models to detect anomalies in security data.',
  },
  {
    date: 'Feb 2024 to Apr 2024',
    role: 'Web Development Trainee',
    org: 'Quizaro ExtendedEdge · Remote',
    desc: 'Completed an ISO 9001:2015 certified specialization in frontend architecture and web technologies.',
  },
  {
    date: 'Oct 2023 to Nov 2023',
    role: 'Data Science Analyst Intern',
    org: 'Rejolt Edtech Pvt Ltd · Hyderabad, India',
    desc: 'Automated data extraction pipelines for client reporting with Python (NumPy, Pandas, scikit-learn).',
  },
];

export const ABOUT_TEXT =
  'Most of my work is detection engineering and cloud security, with a steady side of GRC. My projects usually run from raw data to a written report.';

export const EDUCATION = [
  {
    dates: '2025 to 2027',
    degree: 'MS, Cybersecurity',
    school: 'Northeastern University, Khoury College of Computer Sciences',
    note: 'GPA 3.86',
  },
  {
    dates: '2021 to 2025',
    degree: 'BTech, AI & Data Science',
    school: 'Vardhaman College of Engineering',
  },
];

// `href` links to the credential; entries without one have no public proof yet.
export const CERTIFICATIONS: { name: string; href?: string; status?: string }[] = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/NJ06LAXOT3R4',
  },
  { name: 'CompTIA Security+', status: 'in progress' },
  {
    name: 'Deloitte Cybersecurity Job Simulation',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_4yHEByFJwhmmE2ekD_1752751473837_completion_certificate.pdf',
  },
  {
    name: 'Tata Cybersecurity Simulation',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_4yHEByFJwhmmE2ekD_1752754071792_completion_certificate.pdf',
  },
];

const GH = 'https://github.com/ronankongala/';

export type WorkCard = {
  number: string;
  name: string;
  category: string;
  repo: string;
  description: string;
  stats: string[];
  tags: string[];
};

export const WORK: WorkCard[] = [
  {
    number: '01',
    name: 'EC2 Vulnerability Lab',
    category: 'Cloud Security / Remediation',
    repo: `${GH}ec2-vuln-lab`,
    description:
      'An intentionally vulnerable AWS EC2 target built with Terraform. Nine cloud misconfigurations are found by a read-only scanner, then fixed through approval-gated rules with dry-run preview, rollback, and post-fix verification. Six of nine are closed; three need a rebuild or design change and stay open by design. Includes a local dashboard and an audit log.',
    stats: ['9 misconfigurations found', '6 of 9 closed', 'Dry-run + rollback'],
    tags: ['Terraform', 'AWS EC2', 'Python', 'FastAPI', 'Systems Manager', 'Inspector', 'Security Hub'],
  },
  {
    number: '02',
    name: 'Cloud OT Honeypot',
    category: 'Cloud Detection / Deception',
    repo: `${GH}ot-honeypot-gcp`,
    description:
      'A GCP honeypot emulating exposed OT and network services, wired into Splunk Cloud to capture and classify attack traffic as it arrived.',
    stats: ['66,185 events in first hour', '15,315 Suricata alerts', 'Telnet :23 top target'],
    tags: ['T-Pot', 'Conpot', 'Cowrie', 'Suricata', 'Splunk Cloud'],
  },
  {
    number: '03',
    name: 'Malware Analysis Lab',
    category: 'Malware Analysis / Forensics',
    repo: `${GH}malware-analysis-lab`,
    description:
      'Static, dynamic and memory analysis of a live AgentTesla sample in an isolated FlareVM and REMnux lab, with indicators mapped back to ATT&CK.',
    stats: ['87 IOCs extracted', '11 ATT&CK techniques mapped', 'Ghidra + YARA + Volatility 3'],
    tags: ['PEStudio', 'CAPA', 'CAPE Sandbox', 'Any.run', 'FlareVM'],
  },
  {
    number: '04',
    name: 'Red Team C2 Lab',
    category: 'Adversary Emulation / Detection',
    repo: `${GH}red-team-c2-lab`,
    description:
      'Sliver C2 adversary emulation against a Windows 11 victim, from initial access through credential dumping and pass-the-hash, with 3 Sigma rules written to detect the activity.',
    stats: ['7 ATT&CK techniques executed', '5 SAM accounts dumped', '3 Sigma detection rules'],
    tags: ['Sliver C2', 'impacket', 'pypykatz', 'ATT&CK Navigator'],
  },
  {
    number: '05',
    name: 'FraudSentry',
    category: 'AI / ML Security',
    repo: `${GH}fraudsentry`,
    description:
      'Transaction fraud detection on the IEEE-CIS dataset with SHAP explainability and a subgroup fairness audit, plus a GDPR DPIA and working data-subject-rights code.',
    stats: ['118,108-txn IEEE-CIS test set', 'RandomForest ROC-AUC 0.748', '23.7-pt FPR disparity found'],
    tags: ['XGBoost', 'SHAP', 'imblearn', 'SQLite'],
  },
  {
    number: '06',
    name: 'Android Threat Engine',
    category: 'Mobile Security / Threat Modeling',
    repo: `${GH}android-threat-model`,
    description:
      'A complete Android app security research project built on the Ghera benchmark repository. It pairs code-referenced threat models and standards mappings with a command line tool that runs a 4-layer analysis on an APK (manifest attack surface, smali code patterns, interprocedural taint tracking and dynamic testing on an emulator over adb), scored against a ground truth dataset.',
    stats: ['57 Ghera benchmarks', '24 threat models + 31 mappings', '0.98 recall / 0.79 precision'],
    tags: ['Android', 'Ghera', 'apktool', 'STRIDE', 'CWE', 'OWASP MASVS'],
  },
];
