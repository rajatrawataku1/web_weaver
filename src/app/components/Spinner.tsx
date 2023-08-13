function Spinner({ className }: { className: string }) {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-r-transparent ${className}`}
    ></div>
  );
}

export default Spinner;
