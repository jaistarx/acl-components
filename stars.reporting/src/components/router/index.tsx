import Layout from '@/layout';
import useAppSelector from '@/utils/hooks/app-selector';
import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

// MUST: Lazy load pages
const Dashboard = lazy(() => import('@/pages/dashboard'));
// TODO: Add after actual ui integration
// const FileUpload = lazy(() => import('@/pages/other-screens/file-upload'));
const ClientSelection = lazy(() => import('@/pages/client-selection'));
const LookUpMaster = lazy(() => import('@/pages/admin-screens/lookup-master'));
const ProductAdmin = lazy(() => import('@/pages/admin-screens/product-admin'));
const Report1 = lazy(() => import('@/pages/plan-market-analysis-reports/report-1'));
const ViewFiles = lazy(() => import('@/pages/admin-screens/view-files'));

const Router = () => {
  const global = useAppSelector((state) => state.global);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/starsreporting" element={<Layout />}>
          <Route index element={<ClientSelection />} />
          <Route
            path=":selectedClient"
            element={Boolean(global.selectedClient) ? <Outlet /> : <Navigate to={'/starsreporting'} />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="file-upload" element={<ViewFiles />} />
            <Route path="lookup-master" element={<LookUpMaster />} />
            <Route path="measure" element={<ProductAdmin />} />
            <Route path="report-1" element={<Report1 />} />
            <Route path="plan-market-analysis" element={<></>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/starsreporting'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
