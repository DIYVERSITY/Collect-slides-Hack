import { v4 as uuidv4 } from "uuid";
// import { gapi } from "https://apis.google.com/js/client.js";
import { gapi } from "gapi-script";

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

export function handleAuthClick(data) {
  gapi.auth2
    .getAuthInstance()
    .signIn()
    .then(() => {
      handleCreateSlide(data);
    });
  console.log("signed in");
}

export function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
  console.log("signed out");
}

export async function handleInitApp() {
  console.log("init App");
  gapi.client
    .init({
      apiKey: API_KEY,
      client_id: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(() => {
      // console.log("init finished");
      console.log(
        "%c Currently Signed in? " +
          gapi.auth2.getAuthInstance().isSignedIn.get(),
        "color: #183ff4"
      );
    });
}

var rgbColor = [55, 71, 79];
var totalSlides = 6;
var slideID = [];
var slideTitleId = [];
var slideTitleText = [];
var slideDescriptionId = [];
var slideDescriptionText = [];
var slidePhotoId = [];
var slidePhotoUrl = [];
var slideNoteText = [];
var deckID = "";
var titleSlide = "";
var titleID = "";
var subtitleID = "";

function setIDs() {
  for (let i = 0; i < totalSlides; i++) {
    slideID[i] = uuidv4();
    slideTitleId[i] = uuidv4();
    slideDescriptionId[i] = uuidv4();
    slidePhotoId[i] = uuidv4();
    slideTitleText[i] = "";
    slideDescriptionText[i] = "";
    slidePhotoUrl[i] =
      "https://storage.needpix.com/rsynced_images/chart-line-148256_1280.png";
    slideNoteText[i] = "";
  }
}

function convertText(data) {
  if (data.slide1Title) slideTitleText[0] = data.slide1Title;
  if (data.slide2Title) slideTitleText[1] = data.slide2Title;
  if (data.slide3Title) slideTitleText[2] = data.slide3Title;
  if (data.slide4Title) slideTitleText[3] = data.slide4Title;
  if (data.slide5Title) slideTitleText[4] = data.slide5Title;
  if (data.slide6Title) slideTitleText[5] = data.slide6Title;

  if (data.slide1Description) slideDescriptionText[0] = data.slide1Description;
  if (data.slide2Description) slideDescriptionText[1] = data.slide2Description;
  if (data.slide3Description) slideDescriptionText[2] = data.slide3Description;
  if (data.slide4Description) slideDescriptionText[3] = data.slide4Description;
  if (data.slide5Description) slideDescriptionText[4] = data.slide5Description;
  if (data.slide6Description) slideDescriptionText[5] = data.slide6Description;

  if (data.slide1Picture) slidePhotoUrl[0] = data.slide1Picture;
  if (data.slide2Picture) slidePhotoUrl[1] = data.slide2Picture;
  if (data.slide3Picture) slidePhotoUrl[2] = data.slide3Picture;
  if (data.slide4Picture) slidePhotoUrl[3] = data.slide4Picture;
  if (data.slide5Picture) slidePhotoUrl[4] = data.slide5Picture;
  if (data.slide6Picture) slidePhotoUrl[5] = data.slide6Picture;

  if (data.slide1Notes) slideNoteText[1] = data.slide1Notes;
  if (data.slide2Notes) slideNoteText[2] = data.slide2Notes;
  if (data.slide3Notes) slideNoteText[3] = data.slide3Notes;
  if (data.slide4Notes) slideNoteText[4] = data.slide4Notes;
  if (data.slide5Notes) slideNoteText[5] = data.slide5Notes;
  if (data.slide6Notes) slideNoteText[6] = data.slide6Notes;
}

export function handleCreateSlide(data) {
  setIDs();
  console.log("creating slide");
  console.log(data);
  gapi.client.slides.presentations
    .create({
      title: data.fileName,
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
        text: data.mainTitle,
      },
    },
    {
      insertText: {
        objectId: subtitleID,
        text: data.mainDescription,
      },
    },
    {
      updatePageProperties: changeBackgroundColor("p"),
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
    requests.push({
      createShape: createLeftTitle(slideID[i], slideTitleId[i]),
    });
    requests.push({
      createShape: createLeftDescription(slideID[i], slideDescriptionId[i]),
    });
    requests.push({
      createImage: createRightPhoto(
        slideID[i],
        slidePhotoId[i],
        slidePhotoUrl[i]
      ),
    });
    if (slideTitleText[i] !== "") {
      requests.push({
        insertText: {
          objectId: slideTitleId[i],
          text: slideTitleText[i],
        },
      });
      requests.push({
        updateTextStyle: formatTitleText(slideTitleId[i]),
      });
    }
    if (slideDescriptionText[i] !== "") {
      requests.push({
        insertText: {
          objectId: slideDescriptionId[i],
          text: slideDescriptionText[i],
        },
      });
      requests.push({
        updateTextStyle: formatDescriptionText(slideDescriptionId[i]),
      });
    }
  }
  // console.log(requests);

  gapi.client.slides.presentations
    .batchUpdate({
      presentationId: deckID,
      requests: requests,
    })
    .then((createSlideResponse) => {
      // console.log(createSlideResponse.result);
      setNotes();
    });
}

function setNotes() {
  var requests = [];
  gapi.client.slides.presentations
    .get({
      presentationId: deckID,
    })
    .then(function (response) {
      response.result.slides.forEach(function (slide, i) {
        var slideNoteId =
          slide.slideProperties.notesPage.notesProperties.speakerNotesObjectId;
        requests.push({
          insertText: { objectId: slideNoteId, text: slideNoteText[i] },
        });
      });
    })
    .then(() => {
      gapi.client.slides.presentations
        .batchUpdate({
          presentationId: deckID,
          requests: requests,
        })
        .then(() => {
          console.log("presentation created");
          handleSignoutClick();

          // console.log(createSlideResponse.result);
        });
    });
}

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

function createLeftTitle(slideID, textID) {
  var create = {
    objectId: textID,
    shapeType: "TEXT_BOX",
    elementProperties: {
      pageObjectId: slideID,
      size: {
        width: {
          magnitude: 3000000,
          unit: "EMU",
        },
        height: {
          magnitude: 3000000,
          unit: "EMU",
        },
      },
      transform: {
        scaleX: 2.8402,
        scaleY: 0.1909,
        translateX: 311700,
        translateY: 445025,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createLeftDescription(slideID, textID) {
  var create = {
    objectId: textID,
    shapeType: "TEXT_BOX",
    elementProperties: {
      pageObjectId: slideID,
      size: {
        width: {
          magnitude: 3000000,
          unit: "EMU",
        },
        height: {
          magnitude: 3000000,
          unit: "EMU",
        },
      },
      transform: {
        scaleX: 1.8018,
        scaleY: 1.1388,
        translateX: 311700,
        translateY: 1152475,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createRightPhoto(slideID, imageID, imageUrl) {
  var create = {
    objectId: imageID,
    url: imageUrl,
    elementProperties: {
      pageObjectId: slideID,
      size: {
        width: {
          magnitude: 32000,
          unit: "EMU",
        },
        height: {
          magnitude: 23350,
          unit: "EMU",
        },
      },
      transform: {
        scaleX: 97.6266,
        scaleY: 128.7131,
        translateX: 5848750.03,
        translateY: 1152474.95,
        unit: "EMU",
      },
    },
  };
  return create;
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
        magnitude: 26,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}

function formatTitleText(textID) {
  let style = {
    objectId: textID,
    fields: "foregroundColor,fontFamily,fontSize",
    style: {
      foregroundColor: {
        opaqueColor: {
          themeColor: "LIGHT2",
        },
      },
      // bold: true,
      fontFamily: "Oswald",
      fontSize: {
        magnitude: 30,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}

function formatDescriptionText(textID) {
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
        magnitude: 16,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}
