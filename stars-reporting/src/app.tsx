import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Router from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<>loading...</>}>
            <Router />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
