interface ITimePeriod {
  startDate: string;
  endDate: string;
}

interface IEducationItem {
  courseName: string;
  instituteName: string;
  time: ITimePeriod;
  result: string;
}
export default function HistoryItem({
  courseName,
  instituteName,
  time,
  result,
}: IEducationItem) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl font-bold">{courseName}</div>
      <div className="text-2xl">{instituteName}</div>
      <div className="flex items-center justify-between">
        <div className="text-textSecondary">{`${time.startDate} - ${time.endDate}`}</div>
        <div className="text-textSecondary">{result}</div>
      </div>
    </div>
  );
}
