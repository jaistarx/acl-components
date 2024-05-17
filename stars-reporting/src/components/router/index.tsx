import Layout from "@/layout";
import Admin from "@/pages/admin-screens";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// MUST: Lazy load pages
const PlanMarketAnalysis = lazy(
  () => import("@/pages/reporting-screens/plan-market-analysis")
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<></>} />
        <Route path="plan-market-analysis" element={<PlanMarketAnalysis />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Router;
