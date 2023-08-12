interface IHistoryItem {
  title: string;
  company: string;
  contentItems: string[];
  time: {
    startDate: string;
    endDate: string;
  };
}
export default function HistoryItem({
  title,
  company,
  time: { startDate, endDate },
  contentItems,
}: IHistoryItem) {
  return (
    <div className="flex gap-4 font-sans">
      <div className="bg-primaryDark w-4 h-4 rounded-full m-10"></div>
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-2xl">{company}</div>
        <ul className="list-disc marker:text-primaryLight list-inside">
          {contentItems.map(content => (
            <li key={content}>{content}</li>
          ))}
        </ul>
        <div className="text-textSecondary">{`${startDate} - ${endDate}`}</div>
      </div>
    </div>
  );
}
