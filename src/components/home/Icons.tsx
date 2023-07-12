type Icons = {
  icon: React.JSX.Element;
  description?: string;
};

function Icons({ icon, description }: Icons) {
  return (
    <div className="flex flex-col gap-1 items-center w-[15%]">
      {icon}
      {description && <p className="text-white text-center">{description}</p>}
    </div>
  );
}

export default Icons;
