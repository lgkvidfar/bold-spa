import OpacityParagraph from "../../../comps/animations/opacity-paragraph/OpacityParagraph";

function DiscoverIntroSection() {
  const textOne =
    "At BOLD. we are a trio of digital marketing and event organization enthusiasts. We aim to forge partnerships with businesses across diverse industries, guiding them in the craft and enhancement of their digital presence.";
  const textTwo =
    "This Service Guide serves as a concise showcase of the spectrum of services we provide. It breaks down the coverage of each service, enabling our partners to make well-considered decisions.";
  const textThree =
    "We want to emphasize that our packages are primarily tailored. Recognizing the unique requirements of each business, we strive to deliver results that align with their specific goals.";

  return (
    <section className="flex min-h-screen shrink-0 flex-col items-center justify-center">
      <OpacityParagraph value={textOne} css="max-w-4xl" />
      <OpacityParagraph value={textTwo} css="max-w-4xl" />
      <OpacityParagraph value={textThree} css="max-w-4xl" />
    </section>
  );
}

export default DiscoverIntroSection;
