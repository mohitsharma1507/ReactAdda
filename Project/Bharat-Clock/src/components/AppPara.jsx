function AppPara() {
  let time = new Date();
  return (
    <div className="para">
      <p>
        This is a Clock that show the Bharat at all times.
        <br />
        This is current time:{" "}
        <b>
          {time.toLocaleDateString()}-{""}
          {time.toLocaleTimeString()}
        </b>
      </p>
    </div>
  );
}
export default AppPara;
