import React from "react";
import Image from "next/image";
import chromeImg from "@/assets/images/chrome.svg";
import appleImg from "@/assets/images/apple.svg";
import starImg from "@/assets/images/star.svg";
export default function Store() {
  return (
    <div className="store">
      <div className="container">
        <div className="store--box box-1">
          <Image
            src={chromeImg}
            alt="Chrome Web Store"
            height="0"
            width="0"
            style={{ height: "auto" }}
          />
          <div className="store--text">
            <p className="text--available">available in the</p>
            <p className="text--store">chrome web store</p>
          </div>
        </div>
        <div className="store--box box-2">
          <Image
            src={appleImg}
            alt="Apple Store"
            height="0"
            width="0"
            style={{ height: "auto" }}
          />
          <div className="store--text">
            <p className="text--available">available in the</p>
            <p className="text--store">apple web store</p>
          </div>
        </div>
        <div className="review--box">
          <div className="review--star">
            <Image
              src={starImg}
              alt="Star"
              height="0"
              width="0"
              style={{ height: "auto", color: "#fff" }}
            />
            <Image
              src={starImg}
              alt="Star"
              height="0"
              width="0"
              style={{ height: "auto", color: "#fff" }}
            />
            <Image
              src={starImg}
              alt="Star"
              height="0"
              width="0"
              style={{ height: "auto", color: "#fff" }}
            />
            <Image
              src={starImg}
              alt="Star"
              height="0"
              width="0"
              style={{ height: "auto", color: "#fff" }}
            />
            <Image
              src={starImg}
              alt="Star"
              height="0"
              width="0"
              style={{ height: "auto", color: "#fff" }}
            />
          </div>
          <div className="review--text">Chrome Store reviews</div>
        </div>
      </div>
    </div>
  );
}
