import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const Quotes = React.lazy(() => import("./pages/AllQuotes"));
const Comments = React.lazy(() => import("./components/comments/Comments"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="quotes" />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/add-quote" element={<AddQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
