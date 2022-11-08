import React from "react";
import ServiceModal from "./components/ServiceModal";
import ServiceTitle from "./components/ServiceTitle";
import ViewMoreButton from "./components/ViewMoreButton";
import useServices from "./hooks/useServices";
import "./services.css";

const Services = () => {
  const {
    selectors: { toggleState },
    actions: { toggleTab, handleOnClose },
  } = useServices();

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I'm Good At</span>

      <div className="services__container container grid">
        <div className="services__content">
          <ServiceTitle icon="uil-brackets-curly">
            Web <br /> Developer
          </ServiceTitle>
          <ViewMoreButton onClick={() => toggleTab(1)} />
          <ServiceModal
            tabIndex={1}
            toggleState={toggleState}
            onClose={handleOnClose}
            title="Web Developer"
            description="I'm new to this, but I have plenty of assets and skills for this. Here's what I can do."
            serviceItems={[
              "I develop Html and CSS things.",
              "I create JavaScript interactions.",
              "I do responsive design.",
              "I use frameworks such as React or Angular.",
              "I can debug and test the code.",
            ]}
          />
        </div>

        <div className="services__content">
          <ServiceTitle icon="uil-web-grid">
            UI/UX <br /> Designer
          </ServiceTitle>
          <ViewMoreButton onClick={() => toggleTab(2)} />
          <ServiceModal
            tabIndex={2}
            toggleState={toggleState}
            onClose={handleOnClose}
            title="UI/UX Designer"
            description="I've always had a passion for arts. Here's how I make it shines."
            serviceItems={[
              "I develop inspiring user interface.",
              "I Maintain an attractive and easy use Web design.",
              "I create UX element interactions.",
              "I keep up with the actual tendencies.",
            ]}
          />
        </div>

        <div className="services__content">
          <ServiceTitle icon="uil-edit-alt">
            Project <br /> Managing
          </ServiceTitle>
          <ViewMoreButton onClick={() => toggleTab(3)} />
          <ServiceModal
            tabIndex={3}
            toggleState={toggleState}
            onClose={handleOnClose}
            title="Project Managing"
            description="For almost a decade I've been in the sales and developped skilled assets with customers."
            serviceItems={[
              "I easily understand their needs.",
              "I can lead a project that respect the customer needs.",
              "I have basic knowledge of different management concepts such as Agile and Scrum.",
              "I can manage and motivate a team to succeed.",
              "I can set deadlines and achieve them.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
