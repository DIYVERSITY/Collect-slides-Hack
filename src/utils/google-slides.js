import { v4 as uuidv4 } from "uuid";
import { gapi } from "gapi-script";

import descriptionTemplate from "./descriptionTemplate";

// import competitorTemplate1 from "./competitorTemplate1";
import personaTemplate from "./personaTemplate";
import teamTemplate from "./teamTemplate";

// import fakeData from "../data-models/slides-example.json";

// Client ID and API key from the Developer Console
var CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
var API_KEY = process.env.REACT_APP_API_KEY;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://slides.googleapis.com/$discovery/rest?version=v1",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.

var SCOPES = "https://www.googleapis.com/auth/presentations";

var gapiInit = false;

export function handleAuthClick(data) {
  if (gapiInit === false) {
    handleInitApp().then(() => {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          console.log("signed in");
          handleCreateSlide(data);
        });
    });
  } else {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        console.log("signed in");
        handleCreateSlide(data);
      });
  }

  // console.log("signed in");
  // handleCreateSlide(data);
}

export function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
  console.log("signed out");
}

export async function handleInitApp() {
  console.log("init Google API");
  gapi.client
    .init({
      apiKey: API_KEY,
      client_id: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(() => {
      // console.log("init finished");
      gapiInit = true;
      console.log(
        "%c Currently Signed in? " +
          gapi.auth2.getAuthInstance().isSignedIn.get(),
        "color: #183ff4"
      );
    });
}

var rgbColor = [55, 71, 79];
var totalSlides = 5;
var slideID = [];
var slideTitleId = [];
var slideTitleText = [
  "Problem",
  "Solution",
  // "Competitor Analysis",
  "Persona",
  "Conclusion",
  "Team",
];
var slideNoteText = [];
var deckID = "";
var titleSlide = "";
var titleID = "";
var subtitleID = "";

function setIDs() {
  for (let i = 0; i < totalSlides; i++) {
    slideID[i] = uuidv4();
    slideTitleId[i] = uuidv4();
    slideNoteText[i] = "";
  }
}

function convertText(data) {
  if (data.slide1Notes) slideNoteText[1] = data.slide1Notes;
  if (data.slide2Notes) slideNoteText[2] = data.slide2Notes;
  if (data.slide3Notes) slideNoteText[3] = data.slide3Notes;
  if (data.slide4Notes) slideNoteText[4] = data.slide4Notes;
  if (data.slide5Notes) slideNoteText[5] = data.slide5Notes;
  if (data.slide6Notes) slideNoteText[6] = data.slide6Notes;
}

export function handleCreateSlide(data) {
  // console.log(fakeData);

  // comment out fakeData for real data into the function
  // data = fakeData;
  // comment out fakeData for real data into the function

  setIDs();
  console.log("creating slide");
  // console.log(data);
  gapi.client.slides.presentations
    .create({
      title: data.intro.title,
    })
    .then((response) => {
      // console.log(response);
      deckID = response.result.presentationId;
      titleSlide = response.result.slides[0];
      titleID = titleSlide.pageElements[0].objectId;
      subtitleID = titleSlide.pageElements[1].objectId;
      convertText(data);
      createSlide(data);
    });
}

function createSlide(data) {
  // console.log(deckID);
  // console.log(data);
  var requests = [
    {
      insertText: {
        objectId: titleID,
        text: data.intro.title,
      },
    },
    {
      insertText: {
        objectId: subtitleID,
        text: data.intro.mission,
      },
    },
    {
      updatePageProperties: changeBackgroundColor("p"),
    },
    {
      updatePageElementTransform: updateMainTitle(titleID),
    },
    {
      updateTextStyle: formatMainTitleText(titleID),
    },
    {
      updateTextStyle: formatMainDescriptionText(subtitleID),
    },
  ];

  for (let i = 0; i < totalSlides; i++) {
    requests.push({ createSlide: slideCreation(slideID[i]) });
    requests.push({
      updatePageProperties: changeBackgroundColor(slideID[i]),
    });
  }
  // /////////
  // Slide 2 Problem
  // /////////
  var problem = descriptionTemplate(
    slideID[0],
    slideTitleText[0],
    data.problem.problem
  );
  for (let i = 0; i < problem.length; i++) {
    requests.push(problem[i]);
  }
  // /////////
  // Slide 3 Solution
  // /////////
  var solution = descriptionTemplate(
    slideID[1],
    slideTitleText[1],
    data.solution.solution
  );
  for (let i = 0; i < solution.length; i++) {
    requests.push(solution[i]);
  }
  // /////////
  // Slide 4 Competitor
  // /////////
  // var competitor = competitorTemplate1(
  //   slideID[2],
  //   slideTitleText[2],
  //   data.competitors
  // );
  // for (let i = 0; i < competitor.length; i++) {
  //   requests.push(competitor[i]);
  // }
  // /////////
  // Slide 5 Persona
  // /////////
  var persona = personaTemplate(slideID[2], slideTitleText[2], data.persona);
  for (let i = 0; i < persona.length; i++) {
    requests.push(persona[i]);
  }
  // /////////
  // Slide 6 Conclusion
  // /////////
  var conclusion = descriptionTemplate(
    slideID[3],
    slideTitleText[3],
    data.conclusion.conclusion
  );
  for (let i = 0; i < conclusion.length; i++) {
    requests.push(conclusion[i]);
  }
  // /////////
  // Slide 7 Team
  // /////////
  var team = teamTemplate(slideID[4], slideTitleText[4], data.team.members);
  for (let i = 0; i < team.length; i++) {
    requests.push(team[i]);
  }
  // /////////
  // END
  // /////////
  console.log(requests);

  gapi.client.slides.presentations
    .batchUpdate({
      presentationId: deckID,
      requests: requests,
    })
    .then((createSlideResponse) => {
      console.log(createSlideResponse.result);
      console.log("presentation created");
      handleSignoutClick();
      // setNotes();
    });
}

// function setNotes() {
//   var requests = [];
//   gapi.client.slides.presentations
//     .get({
//       presentationId: deckID,
//     })
//     .then(function (response) {
//       response.result.slides.forEach(function (slide, i) {
//         var slideNoteId =
//           slide.slideProperties.notesPage.notesProperties.speakerNotesObjectId;
//         requests.push({
//           insertText: { objectId: slideNoteId, text: slideNoteText[i] },
//         });
//       });
//     })
//     .then(() => {
//       gapi.client.slides.presentations
//         .batchUpdate({
//           presentationId: deckID,
//           requests: requests,
//         })
//         .then(() => {
//           console.log("presentation created with notes");
//           // handleSignoutClick();

//           // console.log(createSlideResponse.result);
//         });
//     });
// }

function slideCreation(id) {
  var slide = {
    objectId: id,
    slideLayoutReference: {
      predefinedLayout: "BLANK",
    },
  };
  return slide;
}

function changeBackgroundColor(slideID) {
  let r = rgbColor[0] / 255;
  let g = rgbColor[1] / 255;
  let b = rgbColor[2] / 255;
  var background = {
    objectId: slideID,
    pageProperties: {
      pageBackgroundFill: {
        solidFill: {
          color: {
            rgbColor: {
              red: r,
              green: g,
              blue: b,
            },
          },
        },
      },
    },
    fields: "pageBackgroundFill",
  };
  return background;
}

function updateMainTitle(textID) {
  let update = {
    objectId: textID,
    transform: {
      scaleX: 2.8402,
      scaleY: 0.3369,
      translateX: 311700,
      translateY: 1175399.9975,
      unit: "EMU",
    },
    applyMode: "ABSOLUTE",
  };
  return update;
}

function formatMainTitleText(textID) {
  let style = {
    objectId: textID,
    fields: "foregroundColor,fontFamily,fontSize",
    style: {
      foregroundColor: {
        opaqueColor: {
          themeColor: "LIGHT2",
        },
      },
      fontFamily: "Oswald",
      fontSize: {
        magnitude: 50,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}

function formatMainDescriptionText(textID) {
  let style = {
    objectId: textID,
    fields: "foregroundColor,fontFamily,fontSize",
    style: {
      foregroundColor: {
        opaqueColor: {
          themeColor: "LIGHT1",
        },
      },
      fontFamily: "Average",
      fontSize: {
        magnitude: 20,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}
