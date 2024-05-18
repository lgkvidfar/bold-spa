import React from "react";
import PageLayout from "../../layouts/PageLayout";
import OpacityParagraph from "../../comps/animations/opacity-paragraph/OpacityParagraph";

const DiscoverPage: React.FC = () => {
  const textOne =
    "At BOLD., we are a trio of digital marketing and event organization enthusiasts. We aim to forge partnerships with businesses across diverse industries, guiding them in the craft and enhancement of their digital presence.";
  const textTwo =
    "This Service Guide serves as a concise showcase of the spectrum of services we provide. It breaks down the coverage of each service, enabling our partners to make well-considered decisions.";
  const textThree =
    "We want to emphasize that our packages are primarily tailored. Recognizing the unique requirements of each business, we strive to deliver results that align with their specific goals.";
  return (
    <PageLayout css="">
      <div className="flex min-h-screen flex-col items-center justify-start overflow-auto">
        <div className="flex h-screen shrink-0 flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Discover what we do!</h1>
        </div>

        <section className="flex h-screen w-full shrink-0 flex-col items-center justify-center">
          <div>01. WHAT DO WE DO?</div>
        </section>

        <section className="flex min-h-screen shrink-0 flex-col items-center justify-center">
          <OpacityParagraph value={textOne} css="max-w-4xl" />
          <OpacityParagraph value={textTwo} css="max-w-4xl" />
          <OpacityParagraph value={textThree} css="max-w-4xl" />
        </section>

        <section className="bg-borange text-dark flex h-screen w-full shrink-0 flex-col items-center justify-center">
          <div>01. WHAT DO WE DO?</div>
        </section>

        <section className="bg-bpink text-dark flex h-screen w-full shrink-0 flex-col items-center justify-center">
          <div>01. WHAT DO WE DO?</div>
        </section>
      </div>
    </PageLayout>
  );
};

export default DiscoverPage;
