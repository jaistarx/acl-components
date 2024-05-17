import { CheckListItem } from "@/components/sidemenu/sidemenu.types";

export const CHECK_LIST: CheckListItem[] = [
  {
    groupName: "Operation Screens",
    options: [
      { name: "Dashboard", navigateTo: "/admin" },
      { name: "Contract Summary", navigateTo: "" },
      { name: "Perform monthly Report", navigateTo: "" },
    ],
  },
  {
    groupName: "Admin Screens",
    options: [
      { name: "Product Admin Measures", navigateTo: "" },
      { name: "Contract (Client Specific)", navigateTo: "" },
      { name: "Client Selection", navigateTo: "" },
      { name: "LookUp Master", navigateTo: "" },
      { name: "Upload file  - Set Configuration (Bis Config)", navigateTo: "" },
      { name: "Rule Configuration", navigateTo: "" },
    ],
  },
  {
    groupName: "Reporting Screens",
    options: [
      { name: "Monthly Reports", navigateTo: "" },
      { name: "Plan Market Analysis", navigateTo: "/plan-market-analysis" },
      { name: "Ad Hoc Reports", navigateTo: "" },
      { name: "Ad Hoc Reports", navigateTo: "" },
    ],
  },
];
