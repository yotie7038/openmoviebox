import { FunctionComponent } from "react";

interface FaqSectionProps {}

const FaqSection: FunctionComponent<FaqSectionProps> = () => {
  return (
    <>
      <div className="section-padding">
        <div className="container">
          <div className="iq-accordian iq-accordian-square">
            <div className="iq-accordian-block iq-active 1">
              <div className="iq-accordian-title text-capitalize">
                <div className="iq-icon-right">
                  <i aria-hidden="true" className="fas fa-minus active"></i>
                  <i aria-hidden="true" className="fas fa-plus inactive"></i>
                </div>
                <h4 className="mb-0 accordian-title">What is streamit?</h4>
              </div>
              <div
                className="iq-accordian-details"
                style={{ display: "block" }}
              >
                <p className="mb-0">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable
                  English.{" "}
                </p>
              </div>
            </div>
            <div className="iq-accordian-block 2">
              <div className="iq-accordian-title text-capitalize">
                <div className="iq-icon-right">
                  <i aria-hidden="true" className="fa fa-minus active"></i>
                  <i aria-hidden="true" className="fa fa-plus inactive"></i>
                </div>
                <h4 className="mb-0 accordian-title">
                  Will my account work outside my country?
                </h4>
              </div>
              <div className="iq-accordian-details" style={{ display: "none" }}>
                <p className="mb-0">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable
                  English.{" "}
                </p>
              </div>
            </div>
            <div className="iq-accordian-block 3">
              <div className="iq-accordian-title text-capitalize">
                <div className="iq-icon-right">
                  <i aria-hidden="true" className="fa fa-minus active"></i>
                  <i aria-hidden="true" className="fa fa-plus inactive"></i>
                </div>
                <h4 className="mb-0 accordian-title text-capitalize">
                  I am facing video playback issues. What do I do?
                </h4>
              </div>
              <div className="iq-accordian-details" style={{ display: "none" }}>
                <p className="mb-0">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable
                  English.{" "}
                </p>
              </div>
            </div>
            <div className="iq-accordian-block 4">
              <div className="iq-accordian-title">
                <div className="iq-icon-right">
                  <i aria-hidden="true" className="fa fa-minus active"></i>
                  <i aria-hidden="true" className="fa fa-plus inactive"></i>
                </div>
                <h4 className="mb-0 accordian-title text-capitalize">
                  How can I manage notifications?
                </h4>
              </div>
              <div className="iq-accordian-details" style={{ display: "none" }}>
                <p className="mb-0">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable
                  English.{" "}
                </p>
              </div>
            </div>
            <div className="iq-accordian-block 5">
              <div className="iq-accordian-title">
                <div className="iq-icon-right">
                  <i aria-hidden="true" className="fa fa-minus active"></i>
                  <i aria-hidden="true" className="fa fa-plus inactive"></i>
                </div>
                <h4 className="mb-0 accordian-title text-capitalize">
                  What benefits do I get with the packs?
                </h4>
              </div>
              <div className="iq-accordian-details" style={{ display: "none" }}>
                <p className="mb-0">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable
                  English.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
