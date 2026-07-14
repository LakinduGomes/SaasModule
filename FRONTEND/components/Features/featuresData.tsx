import { Feature } from "@/types/feature";

export interface EnhancedFeature extends Feature {
  detailTitle: string;
  highlights: string[];
  image: string;
}

const featuresData: EnhancedFeature[] = [
  {
    id: 1,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Employee Management",
    paragraph: "Manage the core 'Employee List' and official documentation. It automates 'Employee Letter' generation and handles 'Terminate/Resign' workflows for legal compliance.",
    detailTitle: "Lifecycle & Documentation",
    highlights: ["Automated Letter Generation", "Termination & Resignation Flow", "Employee Master Profiles", "Document History"],
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Payroll & Compensation",
    paragraph: "Advanced engine for 'Process Payroll' and 'Salary Formulas'. Handles 'Off Cycle Payments', 'Incentives', and 'Salary Advances' while calculating 'Withholding Tax' and 'Stamp Duty'.",
    detailTitle: "Financial Disbursement Engine",
    highlights: ["Off-Cycle Payment Processing", "Tax & Stamp Duty Compliance", "Incentive & Bonus Logic", "Salary Advance Tracking"],
    // Focus: Spreadsheets, calculators, and financial data
    image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    title: "Administration",
    paragraph: "Administrative control for 'System Users' and permissions. Manages 'Organization Information' and 'Organization Documents' to maintain system-wide governance.",
    detailTitle: "Governance & Security",
    highlights: ["User Role & Access Control", "Organization Info Setup", "Document Centralization", "System Configuration"],
    // Focus: Digital security, keys, or a clean system interface
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: "Attendance & Leave",
    paragraph: "Tracks 'Attendance Register' and 'Employee Leave'. Includes specialized 'Fingerprint Reports', 'OT Reports', and 'Employee Entitlement' tracking.",
    detailTitle: "Time & Presence Control",
    highlights: ["Fingerprint Log Analysis", "Overtime (OT) Reporting", "Leave Entitlement Engine", "Holiday Calendar Sync"],
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    title: "Master Data Management",
    paragraph: "Centralized ledger for 'Banks', 'Departments', 'Designations', 'Skills', and 'Education'. Ensures data integrity across the HRMS ecosystem.",
    detailTitle: "Entity & Attribute Library",
    highlights: ["Bank & Branch Master", "Job Titles & Designations", "Skill & Skill Level Mapping", "Employee Status Config"],
    image: "https://images.pexels.com/photos/326461/pexels-photo-326461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h18"/><path d="M7 15h10"/><path d="M12 2v20"/></svg>,
    title: "Loan Management",
    paragraph: "Automates 'Loan' tracking with 'Loan Types' and 'Status' updates. Integrates with payroll for automated installment deductions.",
    detailTitle: "Financial Aid Tracking",
    highlights: ["Loan Application Workflow", "Interest Type Definition", "Automated Deductions", "Payment Status Monitoring"],
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
    title: "Reporting Analytics",
    paragraph: "Generates 'Pay Slips', 'Pay Sheets', and 'ETF/EPF Reports'. Includes insights like 'Work Hours', 'Work Days', and 'No Pay' reports.",
    detailTitle: "Compliance & Statutory Reporting",
    highlights: ["ETF/EPF Contribution Sheets", "Detailed Tax Reporting", "Employee Master Exports", "Asset & Loan Audits"],
    image: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
    title: "Candidate & Recruitment",
    paragraph: "Streamlines 'Prospecting Candidates', 'Interview Marks', and 'Job Position Scheduling' for the talent pipeline.",
    detailTitle: "Talent Sourcing Pipeline",
    highlights: ["Candidate Prospecting", "Interview Marksheets", "Job Position Scheduling", "Recruitment Funnel"],
    // Focus: Reviewing resumes/profiles on a screen
    image: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Roster Control",
    paragraph: "Shift-based management including 'Roster Settings' and 'Roster Arrangement' for complex staffing coverage.",
    detailTitle: "Operational Shift Planning",
    highlights: ["Shift Configuration", "Dynamic Roster Mapping", "Staffing Optimization", "Roster History"],
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 10,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: "Performance Appraisal",
    paragraph: "Uses 'Evaluation Cycle Types' and 'Criteria' for 'Performance Appraisals'. Tracks KPI progress via 'Goal Measures'.",
    detailTitle: "Objective Evaluation System",
    highlights: ["Goal & KPI Measurement", "Evaluation Cycle Tracking", "Performance Criteria Config", "Appraisal Scoring"],
    image: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 11,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 21h10"/><path d="M9 11l3 3 7-7"/><path d="M12 21v-4"/></svg>,
    title: "Asset Tracking",
    paragraph: "Manages 'Items', 'Categories', and 'Brands'. Tracks asset allocation and generates 'Assets Reports' for audits.",
    detailTitle: "Corporate Resource Inventory",
    highlights: ["Item Allocation Tracking", "Asset Category Master", "Brand Management", "Inventory Audit Reports"],
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 12,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11a9 9 0 0 1 8-9 9 9 0 0 1 8 9"/><path d="M12 12v9"/><path d="M8 21h8"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "Events & Incidents",
    paragraph: "Coordinates 'Events' and tracks 'Incident Management' and 'Types' for documentation and corporate functions.",
    detailTitle: "Governance & Engagement",
    highlights: ["Incident Reporting", "Grievance Classification", "Event Coordination", "Organizational Compliance"],
    image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export default featuresData;