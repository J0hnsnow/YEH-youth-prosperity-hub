import { HomeIcon, CreditCardIcon, HeartPulseIcon, ShieldIcon, BookOpenIcon, LeafIcon, VoteIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import MicroCreditApplication from "./pages/MicroCreditApplication.jsx";
import HealthcareInsuranceApplication from "./pages/HealthcareInsuranceApplication.jsx";
import DataPrivacyTools from "./components/DataPrivacyTools.jsx";
import FinancialEducationCourses from "./components/FinancialEducationCourses.jsx";
import CourseDetails from "./components/CourseDetails.jsx";
import SustainabilityRewards from "./components/SustainabilityRewards.jsx";
import CommunityGovernance from "./pages/CommunityGovernance.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Apply for Micro-Credit",
    to: "/apply-micro-credit",
    icon: <CreditCardIcon className="h-4 w-4" />,
    page: <MicroCreditApplication />,
  },
  {
    title: "Apply for Healthcare Insurance",
    to: "/apply-healthcare-insurance",
    icon: <HeartPulseIcon className="h-4 w-4" />,
    page: <HealthcareInsuranceApplication />,
  },
  {
    title: "Data Privacy Tools",
    to: "/data-privacy-tools",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <DataPrivacyTools />,
  },
  {
    title: "Financial Education Courses",
    to: "/courses",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <FinancialEducationCourses />,
  },
  {
    title: "Course Details",
    to: "/course/:id",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <CourseDetails />,
  },
  {
    title: "Sustainability Rewards",
    to: "/sustainability-rewards",
    icon: <LeafIcon className="h-4 w-4" />,
    page: <SustainabilityRewards />,
  },
  {
    title: "Community Governance",
    to: "/community-governance",
    icon: <VoteIcon className="h-4 w-4" />,
    page: <CommunityGovernance />,
  },
];