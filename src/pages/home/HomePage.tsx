import PageLayout from "../../layouts/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-9xl font-bold">BOLD.</h1>
          <p className="flex gap-1">
            <span className="text-borange font-semibold">BOLD</span>
            by Design, Driven by
            <span className="text-borange font-semibold">Results.</span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
