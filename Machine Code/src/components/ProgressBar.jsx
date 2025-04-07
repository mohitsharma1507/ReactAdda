const ProgressBar = ({ value = 0 }) => {
  const clampValue = Math.min(Math.max(value, 0), 100);
  return (
    <div className="progress">
      <span style={{ width: `${clampValue}%` }}>{clampValue}%</span>
    </div>
  );
};
export default ProgressBar;
