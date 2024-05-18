import React from "react";
import PageLayout from "../../layouts/PageLayout";

const NotFound: React.FC = () => {
  return (
    <PageLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl">Page Not Found</p>
        <a href="/" className="mt-4 inline-block text-blue-500">
          Go to Home
        </a>
      </div>
    </PageLayout>
  );
};

export default NotFound;
