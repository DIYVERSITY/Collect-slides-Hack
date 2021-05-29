import React from "react";
import styles from "./SlideForm.module.css";
import { handleCreateSlide, handleAuthClick } from "../../utils/google-slides";
import Form from "@rjsf/core";

const schema = {
  title: "Create Google Slides",
  description: "A simple form to create google slides",
  type: "object",
  required: ["fileName", "mainTitle"],
  properties: {
    fileName: {
      type: "string",
      title: "File Name",
    },
    mainTitle: {
      type: "string",
      title: "Presentation Title",
    },
    mainDescription: {
      type: "string",
      title: "Presentation Description",
    },
    slide1Title: {
      type: "string",
      title: "Slide 1 Title",
    },
    slide1Description: {
      type: "string",
      title: "Slide 1 Description",
    },
    slide1Picture: {
      type: "string",
      title: "Slide 1 Picture",
    },
    slide1Notes: {
      type: "string",
      title: "Slide 1 Notes",
    },
    slide2Title: {
      type: "string",
      title: "Slide 2 Title",
    },
    slide2Description: {
      type: "string",
      title: "Slide 2 Description",
    },
    slide2Picture: {
      type: "string",
      title: "Slide 2 Picture",
    },
    slide2Notes: {
      type: "string",
      title: "Slide 2 Notes",
    },
    slide3Title: {
      type: "string",
      title: "Slide 3 Title",
    },
    slide3Description: {
      type: "string",
      title: "Slide 3 Description",
    },
    slide3Picture: {
      type: "string",
      title: "Slide 3 Picture",
    },
    slide3Notes: {
      type: "string",
      title: "Slide 3 Notes",
    },
    // slide4Title: {
    //   type: "string",
    //   title: "Slide 4 Title",
    // },
    // slide4Description: {
    //   type: "string",
    //   title: "Slide 4 Description",
    // },
    // slide4Picture: {
    //   type: "string",
    //   title: "Slide 4 Picture",
    // },
    // slide4Notes: {
    //   type: "string",
    //   title: "Slide 4 Notes",
    // },
    // slide5Title: {
    //   type: "string",
    //   title: "Slide 5 Title",
    // },
    // slide5Description: {
    //   type: "string",
    //   title: "Slide 5 Description",
    // },
    // slide5Picture: {
    //   type: "string",
    //   title: "Slide 5 Picture",
    // },
    // slide5Notes: {
    //   type: "string",
    //   title: "Slide 5 Notes",
    // },
    // slide6Title: {
    //   type: "string",
    //   title: "Slide 6 Title",
    // },
    // slide6Description: {
    //   type: "string",
    //   title: "Slide 6 Description",
    // },
    // slide6Picture: {
    //   type: "string",
    //   title: "Slide 6 Picture",
    // },
    // slide6Notes: {
    //   type: "string",
    //   title: "Slide 6 Notes",
    // },
  },
};

const onSubmit = ({ formData }, e) => {
  console.log("Data submitted: ", formData);
  handleAuthClick(formData);
  // handleCreateSlide(formData);
};

export default class SlideForm extends React.Component {
  render() {
    return (
      <div className={styles.formContainer}>
        <Form
          schema={schema}
          onSubmit={onSubmit}
          // onChange={log("changed")}
          // onSubmit={log("submitted")}
          // onError={log("errors")}
        />
      </div>
    );
  }
}
