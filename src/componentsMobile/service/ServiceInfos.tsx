import DesignAndDevelopmentMobile from "./DesignAndDevelopment.tsx/DesignAndDevelopmentMobile";

type Props = {
  choice: number;
};

function ServiceInfos({ choice }: Props) {
  return (
    <body className="text-justify text-white px-4">
      {choice === 0 && <DesignAndDevelopmentMobile />}
    </body>
  );
}

export default ServiceInfos;
