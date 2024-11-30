// import CircularProgress from "@mui/material/CircularProgress";
import "./spinner.scss";
// styles

interface SpinnerProps {
  pageLoader?: boolean;
  detail?: boolean
  overLay?: boolean
}
const Spinner: React.FC<SpinnerProps> = ({ pageLoader = false, detail = false, overLay = false }) => {
  return (
    <div
      className={`${pageLoader ? "spinner-page" : "spinner"}
      ${detail ? " spinner-detail " : " "}
      ${overLay ? " spinner-overlay" : " "}
      `}
    >
      {/* <CircularProgress
        sx={{
          color: '#71C704',
        }} /> */}
        <div className="loader"></div>
      <p className="loader-text">Loading</p>
    </div>
  );
};

export default Spinner;
