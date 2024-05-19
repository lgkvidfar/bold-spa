import React from "react";
import PageLayout from "../../layouts/PageLayout";
import DiscoverIntroSection from "./sections/DiscoverIntroSection";
import ServiceOverviewSection from "./sections/ServiceOverviewSection";

const DiscoverPage: React.FC = () => {
  return (
    <PageLayout css="">
      <div className="relative flex min-h-screen flex-col items-center justify-start overflow-auto">
        <div className="flex h-screen shrink-0 flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Discover what we do!</h1>
        </div>

        <DiscoverIntroSection />
        <ServiceOverviewSection />

        <section className="flex min-h-screen w-full shrink-0 flex-col items-center justify-center bg-bpink text-dark">
          <div>01. WHAT DO WE DO?</div>
        </section>
      </div>
    </PageLayout>
  );
};

export default DiscoverPage;
