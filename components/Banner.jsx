export const Banner = ({ title }) => {
  return (
    <div className="w-full text-2xl lg:text-4xl py-4 px-6 flex flex-col border-b border-b-foreground/10 justify-end lg:justify-between">
      <div className="h-full hidden lg:flex justify-between lg:min-h-[94px]">
        <h1 className="self-end font-thin">{title}</h1>
      </div>
    </div>
  );
};
