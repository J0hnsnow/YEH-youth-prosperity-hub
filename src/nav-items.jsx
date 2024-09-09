import { HomeIcon, CreditCardIcon, HeartPulseIcon, ShieldIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import MicroCreditApplication from "./pages/MicroCreditApplication.jsx";
import HealthcareInsuranceApplication from "./pages/HealthcareInsuranceApplication.jsx";
import DataPrivacyTools from "./components/DataPrivacyTools.jsx";

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
];