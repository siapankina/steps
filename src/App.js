import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  return (
    <React.Fragment>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <Steps
          step={step}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </React.Fragment>
  );
}

function Steps({ step, handlePrevious, handleNext }) {
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <StepMessage step={step}>{messages[step - 1]}</StepMessage>

      <div className="buttons">
        <Button
          textColor="#fff"
          backgroundColor="#7950f2"
          handleClick={handlePrevious}
        >
          <span>👈</span>Previous
        </Button>
        <Button
          textColor="#fff"
          backgroundColor="#7950f2"
          handleClick={handleNext}
        >
          Next<span>👉</span>
        </Button>
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> {children}
    </div>
  );
}

function Button({ textColor, backgroundColor, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
