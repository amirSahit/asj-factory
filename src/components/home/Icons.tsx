type Icons = {
  icon: React.JSX.Element;
  description?: string;
};

function Icons({ icon, description }: Icons) {
  return (
    <div className="flex flex-col gap-1 items-center">
      {icon}
      {description && (
        <p className="text-white text-center text-xl">{description}</p>
      )}
    </div>
  );
}

export default Icons;
