function SkillItem({
  iconComponent,
  name,
}: {
  iconComponent?: JSX.Element;
  name: string;
}) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-secondaryMain to-secondaryLight rounded-sm">
      <div className=" flex justify-between items-center bg-defaultLight px-2 py-1">
        {iconComponent && (
          <div className="border-gr bg-defaultLight mr-2">{iconComponent}</div>
        )}
        <div className="text-xl font-bold">{name}</div>
      </div>
    </div>
  );
}

export default SkillItem;
