interface ITimePeriod {
  startDate: string;
  endDate: string;
}

interface IHistoryItem {
  title: string;
  company: string;
  contentItems: string[];
  time?: ITimePeriod;
}
export default function HistoryItem({
  title,
  company,
  time,
  contentItems,
}: IHistoryItem) {
  return (
    <div className="flex gap-4 font-sans">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-2xl">{company}</div>
        <ul className="list-disc marker:text-primaryLight p-4 list-outside">
          {contentItems.map(content => (
            <li key={content} className="py-1 first:pt-0 last:pb-0">
              {content}
            </li>
          ))}
        </ul>
        {time && (
          <div className="text-textSecondary">{`${time.startDate} - ${time.endDate}`}</div>
        )}
      </div>
    </div>
  );
}
