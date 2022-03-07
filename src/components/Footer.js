import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer--copy">Copyright by Coders Lab</p>
      <div className="footer--social">
        <FontAwesomeIcon className="icon-social" icon={faFacebookSquare} />
        <FontAwesomeIcon className="icon-social" icon={faInstagram} />
      </div>
    </footer>
  );
}
