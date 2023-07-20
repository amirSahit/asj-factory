type Icons = {
  icon: React.JSX.Element;
  description?: string;
};

function Icons({ icon, description }: Icons) {
  return (
    <figure className="flex flex-col gap-1 items-center">
      {icon}
      {description && (
        <figcaption className="text-white text-center text-xl">
          {description}
        </figcaption>
      )}
    </figure>
  );
}

export default Icons;
