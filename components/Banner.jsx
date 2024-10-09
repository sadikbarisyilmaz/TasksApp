export const Banner = ({ title }) => {
  return (
    <div className="w-full text-2xl md:text-4xl py-4 px-6 flex flex-col border-b border-b-foreground/10 justify-end md:justify-between">
      <div className="h-full flex justify-between md:min-h-[94px]">
        <h1 className="self-end font-thin">{title}</h1>
      </div>
    </div>
  );
};
