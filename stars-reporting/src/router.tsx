import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// MUST: Lazy load pages
const PlanMarketAnalysis = lazy(
  () => import("./pages/reporting-screens/plan-market-analysis")
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/plan-market-analysis" element={<PlanMarketAnalysis />} />
    </Routes>
  );
};

export default Router;
