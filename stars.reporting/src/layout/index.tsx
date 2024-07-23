import Footer from '@/components/footer';
import Header from '@/components/header';
import { AclSpinner } from '@acl/ui';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutStyles from './layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={LayoutStyles['outer-container']}>
        <div className={LayoutStyles['header-body-footer-container']}>
          <div className={LayoutStyles['header-container']}>
            <Header />
          </div>
          <div className={LayoutStyles['body-container']}>
            <Suspense fallback={<AclSpinner />}>
              <Outlet />
            </Suspense>
          </div>
          <div className={LayoutStyles['footer-container']}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
