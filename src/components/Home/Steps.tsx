import React from "react";
interface StepsPropsType {
  image: any;
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  isReversed?: boolean;
}
export default function Steps({
  image,
  stepNumber,
  stepTitle,
  stepDescription,
  isReversed,
}: StepsPropsType) {
  return (
    <div className={`step step-${stepNumber}`}>
      {isReversed ? (
        <>
          <div className="step--detail">
            <h3 className="step--count">Step {stepNumber}</h3>
            <h4 className="step--title">{stepTitle}</h4>
            <p className="step--description">{stepDescription}</p>
          </div>
          {image}
        </>
      ) : (
        <>
          {image}
          <div className="step--detail">
            <h3 className="step--count">Step {stepNumber}</h3>
            <h4 className="step--title">{stepTitle}</h4>
            <p className="step--description">{stepDescription}</p>
          </div>
        </>
      )}
    </div>
  );
}
