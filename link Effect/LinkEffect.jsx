import { Link } from "react-router-dom"; // optional
import "./seemore.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function LinkEffect({ link /*optional*/, text, direction }) {
  return (
    <>
      {direction === "left" ? (
        <div className="linkeffect-container linkeffect-hover-effect-reverse">
          <Link to={link} className="linkeffect-link">
            <p className="linkeffect-text">
              <span className="linkeffect-arrow">
                <KeyboardDoubleArrowLeftIcon />
              </span>
              <span className="linkeffect-single-arrow">
                <MoreHorizIcon />
              </span>
              {text}{" "}
            </p>
          </Link>
        </div>
      ) : (
        <div className="linkeffect-container linkeffect-hover-effect ">
          <Link to={link} className="linkeffect-link">
            <p className="linkeffect-text">
              {text}{" "}
              <span className="linkeffect-arrow">
                <KeyboardDoubleArrowRightIcon />
              </span>
              <span className="linkeffect-single-arrow">
                <MoreHorizIcon />
              </span>
            </p>
          </Link>
        </div>
      )}
    </>
  );
}

export default LinkEffect;
