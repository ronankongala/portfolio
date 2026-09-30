export const PROFILE = {
  name: "hi, i'm ronan",
  tagline:
    'a security engineer building the systems that notice things: detection, cloud, and risk scoring that turns raw signal into a decision',
  email: 'kongalaronan@gmail.com',
  phone: '+1 (617) 602-5369',
  phoneHref: 'tel:+16176025369',
  github: 'https://github.com/ronankongala',
  linkedin: 'https://www.linkedin.com/in/ronan-kongala',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
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
    date: 'Sep 2026 - Present',
    role: 'AI Cybersecurity Intern',
    org: 'Abbott · Madison, WI (Hybrid)',
    current: true,
    stat: { value: '22,000+', label: 'vulnerabilities tracked' },
    desc: "Contributing to ExmanIq, an internal vulnerability management platform monitoring 22,000+ tracked vulnerabilities across organizational assets using a predictive Impact x Likelihood risk model enriched with EPSS and NVD threat intelligence. Diagnosed a 27-day silent data-pipeline failure by recognizing an anomalous flat trend in the platform's composite risk score. Also built CrowdCheck Hive with a teammate, correlating CrowdStrike, Microsoft Intune, and ServiceNow CMDB data to identify device coverage gaps across the organization's endpoint security controls.",
  },
  {
    date: 'Jun 2026 - Sep 2026',
    role: 'Cybersecurity Intern',
    org: 'Exact Sciences · Madison, WI (Hybrid)',
    stat: { value: '1,300+', label: 'app registrations scanned' },
    desc: 'Built Baseline Guardian with a teammate, correlating data across multiple internal systems (CrowdStrike, Microsoft Intune, Tanium, ServiceNow CMDB) to assess security posture and endpoint compliance. Automated KeyCheck, a credential-risk monitoring pipeline scanning 1,300+ application registrations to identify expiring-credential risk before it became an incident.',
  },
  {
    date: 'Jan 2026 - Apr 2026',
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
    date: 'Aug 2024 - Oct 2024',
    role: 'Cybersecurity Intern',
    org: 'NIELIT Virtual Academy, Ministry of Electronics and IT',
    stat: { value: '3', label: 'live environments assessed' },
    desc: 'Conducted network security assessments across 3 live environments, applying threat modeling with Nmap and Docker, and used Random Forest models to detect anomalies in security data.',
  },
  {
    date: 'Feb 2024 - Apr 2024',
    role: 'Web Development Trainee',
    org: 'Quizaro ExtendedEdge · Remote',
    desc: 'Completed an ISO 9001:2015 certified specialization covering frontend architecture and modern web technologies.',
  },
  {
    date: 'Oct 2023 - Nov 2023',
    role: 'Data Science Analyst Intern',
    org: 'Rejolt Edtech Pvt Ltd · Hyderabad, India',
    desc: 'Built and automated data extraction pipelines with Python (NumPy, Pandas, scikit-learn) to streamline client reporting workflows.',
  },
];

export const ABOUT_TEXT =
  'I turn messy streams of logs and controls into clear, defensible answers. My work sits across detection engineering, cloud security, and governance, usually built end to end from ingest to detection to written report.';

// Every case file, each linking to its real repository.
type CaseTile = { id: string; name: string; repo: string; tags: string[] };

const GH = 'https://github.com/ronankongala/';

export const CASE_FILES: CaseTile[] = [
  { id: 'CASE-01', name: 'Cloud OT Honeypot', repo: `${GH}ot-honeypot-gcp`, tags: ['GCP', 'T-Pot', 'Splunk'] },
  { id: 'CASE-02', name: 'Nessus Vuln Pipeline', repo: `${GH}nessus-vulnerability-pipeline`, tags: ['Nessus', 'CVSS', 'NIST'] },
  { id: 'CASE-03', name: 'CloudTrail Threat Detection', repo: `${GH}aws-cloudtrail-threat-detector`, tags: ['Lambda', 'SNS', 'ATT&CK'] },
  { id: 'CASE-04', name: 'Suricata IDS + ELK', repo: `${GH}suricata-ids-elk-lab`, tags: ['Suricata', 'ELK', 'Kibana'] },
  { id: 'CASE-05', name: 'S3 Security Auditor', repo: `${GH}s3-security-auditor`, tags: ['boto3', 'AWS', 'Python'] },
  { id: 'CASE-06', name: 'SOC Automation Lab', repo: `${GH}SOC-Automation-Lab`, tags: ['Splunk', 'n8n', 'OpenAI'] },
  { id: 'CASE-07', name: 'SOC 2 Type I Audit', repo: `${GH}SOC2-Audit-Lab`, tags: ['SOC 2', 'Controls', 'GRC'] },
  { id: 'CASE-08', name: 'Agentic SOC Analyst', repo: `${GH}agentic-soc-sentinel`, tags: ['Sentinel', 'KQL', 'LLM'] },
  { id: 'CASE-09', name: 'Fake Job Posting Detection', repo: `${GH}Fake-Job-Posting-Detection`, tags: ['XGBoost', 'SMOTE', 'IEEE'] },
  { id: 'CASE-12', name: 'Kali SSH MCP', repo: `${GH}kali-ssh-mcp`, tags: ['MCP', 'Claude', 'SSH'] },
  { id: 'CASE-13', name: 'NIST 800-171 / CMMC Lab', repo: `${GH}nist-cmmc-compliance-lab`, tags: ['CMMC', 'GPO', 'Intune'] },
  { id: 'CASE-14', name: 'Access-Governed RAG', repo: `${GH}Access-governed-rag-console`, tags: ['Entra ID', 'RBAC', 'LLM'] },
  { id: 'CASE-15', name: 'AppSec Pipeline', repo: `${GH}Appsec-pipeline-lab`, tags: ['Semgrep', 'Trivy', 'ZAP'] },
  { id: 'CASE-16', name: 'Malware Analysis Lab', repo: `${GH}malware-analysis-lab`, tags: ['Ghidra', 'YARA', 'Volatility'] },
  { id: 'CASE-17', name: 'Zeek Network Forensics', repo: `${GH}zeek-network-forensics-lab`, tags: ['Zeek', 'RITA', 'Beacon'] },
  { id: 'CASE-18', name: 'Zeek Beacon (OCaml)', repo: `${GH}zeek-beacon-ocaml`, tags: ['OCaml', 'Variance', 'Beacon'] },
  { id: 'CASE-19', name: 'PentestLab', repo: `${GH}metasploit-pentest-report`, tags: ['Metasploit', 'CVE', 'ATT&CK'] },
  { id: 'CASE-20', name: 'GuardDutySync', repo: `${GH}guardduty-sync`, tags: ['GuardDuty', 'Jira', 'boto3'] },
  { id: 'CASE-21', name: 'FedRAMP-RMF Lab', repo: `${GH}fedramp-rmf-lab`, tags: ['STIG', 'OpenSCAP', '800-53'] },
  { id: 'CASE-22', name: 'ZeroTrustLab', repo: `${GH}zerotrust-lab`, tags: ['mTLS', 'Keycloak', 'OPA'] },
  { id: 'CASE-23', name: 'VulnTrack', repo: `${GH}vulntrack`, tags: ['Spring', 'React', 'K8s'] },
  { id: 'CASE-25', name: 'FraudSentry', repo: `${GH}fraudsentry`, tags: ['XGBoost', 'SHAP', 'GDPR'] },
  { id: 'CASE-26', name: 'Red Team C2 Lab', repo: `${GH}red-team-c2-lab`, tags: ['Sliver', 'ATT&CK', 'PtH'] },
];

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
    name: 'Cloud OT Honeypot',
    category: 'Cloud Detection / Deception',
    repo: `${GH}ot-honeypot-gcp`,
    description:
      'A cloud-hosted honeypot on GCP emulating exposed OT and network services, wired into Splunk Cloud to capture and classify real attack traffic the moment it landed.',
    stats: ['66,185 events in first hour', '15,315 Suricata alerts', 'Telnet :23 top target'],
    tags: ['T-Pot', 'Conpot', 'Cowrie', 'Suricata', 'Splunk Cloud'],
  },
  {
    number: '02',
    name: 'Malware Analysis Lab',
    category: 'Malware Analysis / Forensics',
    repo: `${GH}malware-analysis-lab`,
    description:
      'Static and dynamic analysis of a live AgentTesla sample inside an isolated FlareVM and REMnux lab, pulling indicators and mapping observed behavior back to ATT&CK.',
    stats: ['87 IOCs extracted', '11 ATT&CK techniques mapped', 'Ghidra + YARA + Volatility 3'],
    tags: ['PEStudio', 'CAPA', 'CAPE Sandbox', 'Any.run', 'FlareVM'],
  },
  {
    number: '03',
    name: 'Red Team C2 Lab',
    category: 'Adversary Emulation / Detection',
    repo: `${GH}red-team-c2-lab`,
    description:
      'Sliver C2 adversary emulation against a Windows 11 victim, from initial access through credential dumping and pass-the-hash, each step paired with a Sigma detection rule.',
    stats: ['7 ATT&CK techniques executed', '4 NTLM hashes dumped', '3 Sigma detection rules'],
    tags: ['Sliver C2', 'impacket', 'pypykatz', 'ATT&CK Navigator'],
  },
  {
    number: '04',
    name: 'FraudSentry',
    category: 'AI / ML Security',
    repo: `${GH}fraudsentry`,
    description:
      'A transaction fraud pipeline on the real IEEE-CIS dataset with model explainability and a subgroup fairness audit, plus a GDPR DPIA and working data-subject-rights code.',
    stats: ['118,108-txn IEEE-CIS test set', 'RandomForest ROC-AUC 0.748', '23.7-pt FPR disparity found'],
    tags: ['XGBoost', 'SHAP', 'imblearn', 'SQLite'],
  },
];
