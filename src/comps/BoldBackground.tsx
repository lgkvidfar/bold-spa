function BoldBackground() {
  return (
    <div className="fixed inset-0 z-[-1] flex select-none flex-col items-center justify-center text-[15vh] font-bold opacity-[3.5%] sm:flex-wrap sm:text-[20vh] sm:opacity-[2.5%]">
      <span className="text-borange">Bold.</span>
      <span className="text-bpink">Bold.</span>
      <span className="text-light">Bold.</span>
      <span className="text-bpink">Bold.</span>
      <span className="text-borange">Bold.</span>

      <span className="text-light hidden sm:inline-block">Bold.</span>
      <span className="text-bpink hidden sm:inline-block">Bold.</span>
      <span className="text-light hidden sm:inline-block">Bold.</span>
      <span className="text-borange hidden sm:inline-block">Bold.</span>
    </div>
  );
}

export default BoldBackground;
