import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function teamTemplate(id, title, data) {
  let Name1ID = uuidv4();
  let Description1ID = uuidv4();

  let Name2ID = uuidv4();
  let Description2ID = uuidv4();

  let Name3ID = uuidv4();
  let Description3ID = uuidv4();

  let Name4ID = uuidv4();
  let Description4ID = uuidv4();

  var objReturn = [];
  // console.log("team");
  // console.log(data);
  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      objReturn.push({
        createImage: createTopLeftPhoto(id, uuidv4(), data[0].LinkedInImg),
      });
    }
    if (i === 1) {
      objReturn.push({
        createImage: createTopRightPhoto(id, uuidv4(), data[1].LinkedInImg),
      });
    }
    if (i === 2) {
      objReturn.push({
        createImage: createBottomLeftPhoto(id, uuidv4(), data[2].LinkedInImg),
      });
    }
    if (i === 3) {
      objReturn.push({
        createImage: createBottomRightPhoto(id, uuidv4(), data[3].LinkedInImg),
      });
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      objReturn.push({
        createShape: createNameTopLeftText(id, Name1ID),
      });
      objReturn.push({
        insertText: {
          objectId: Name1ID,
          text: data[i].name,
        },
      });
      objReturn.push({
        updateTextStyle: formatNameText(Name1ID),
      });

      objReturn.push({
        createShape: createDescriptionTopLeftText(id, Description1ID),
      });
      objReturn.push({
        insertText: {
          objectId: Description1ID,
          text: data[i].description,
        },
      });
      objReturn.push({
        updateTextStyle: formatDescriptionText(Description1ID),
      });
    }
    if (i === 1) {
      objReturn.push({
        createShape: createNameTopRightText(id, Name2ID),
      });
      objReturn.push({
        insertText: {
          objectId: Name2ID,
          text: data[i].name,
        },
      });
      objReturn.push({
        updateTextStyle: formatNameText(Name2ID),
      });

      objReturn.push({
        createShape: createDescriptionTopRightText(id, Description2ID),
      });
      objReturn.push({
        insertText: {
          objectId: Description2ID,
          text: data[i].description,
        },
      });
      objReturn.push({
        updateTextStyle: formatDescriptionText(Description2ID),
      });
    }
    if (i === 2) {
      objReturn.push({
        createShape: createNameBottomLeftText(id, Name3ID),
      });
      objReturn.push({
        insertText: {
          objectId: Name3ID,
          text: data[i].name,
        },
      });
      objReturn.push({
        updateTextStyle: formatNameText(Name3ID),
      });

      objReturn.push({
        createShape: createDescriptionBottomLeftText(id, Description3ID),
      });
      objReturn.push({
        insertText: {
          objectId: Description3ID,
          text: data[i].description,
        },
      });
      objReturn.push({
        updateTextStyle: formatDescriptionText(Description3ID),
      });
    }
    if (i === 3) {
      objReturn.push({
        createShape: createNameBottomRightText(id, Name4ID),
      });
      objReturn.push({
        insertText: {
          objectId: Name4ID,
          text: data[i].name,
        },
      });
      objReturn.push({
        updateTextStyle: formatNameText(Name4ID),
      });

      objReturn.push({
        createShape: createDescriptionBottomRightText(id, Description4ID),
      });
      objReturn.push({
        insertText: {
          objectId: Description4ID,
          text: data[i].description,
        },
      });
      objReturn.push({
        updateTextStyle: formatDescriptionText(Description4ID),
      });
    }
  }

  return objReturn;
}

function createNameTopLeftText(slideID, textID) {
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
        scaleX: 0.7367,
        scaleY: 0.146,
        translateX: 2087125.39,
        translateY: 1017725,
        unit: "EMU",
      },
    },
  };
  return create;
}
function createDescriptionTopLeftText(slideID, textID) {
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
        scaleX: 0.7054,
        scaleY: 0.3804,
        translateX: 2087125.0025000002,
        translateY: 1358775,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createNameTopRightText(slideID, textID) {
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
        scaleX: 0.7367,
        scaleY: 0.146,
        translateX: 6355050.3900000006,
        translateY: 1017725,
        unit: "EMU",
      },
    },
  };
  return create;
}
function createDescriptionTopRightText(slideID, textID) {
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
        scaleX: 0.7054,
        scaleY: 0.3804,
        translateX: 6355050.0025,
        translateY: 1358775,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createNameBottomLeftText(slideID, textID) {
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
        scaleX: 0.7367,
        scaleY: 0.146,
        translateX: 2087125.39,
        translateY: 2841025,
        unit: "EMU",
      },
    },
  };
  return create;
}
function createDescriptionBottomLeftText(slideID, textID) {
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
        scaleX: 0.7054,
        scaleY: 0.3804,
        translateX: 2087125.0025000002,
        translateY: 3182075,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createNameBottomRightText(slideID, textID) {
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
        scaleX: 0.7367,
        scaleY: 0.146,
        translateX: 6355050.3900000006,
        translateY: 2841025,
        unit: "EMU",
      },
    },
  };
  return create;
}
function createDescriptionBottomRightText(slideID, textID) {
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
        scaleX: 0.7054,
        scaleY: 0.3804,
        translateX: 6355050.0025,
        translateY: 3182075,
        unit: "EMU",
      },
    },
  };
  return create;
}

function formatNameText(textID) {
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
// function formatLinkedinText(textID) {
//   let style = {
//     objectId: textID,
//     fields: "foregroundColor,fontFamily,fontSize",
//     style: {
//       foregroundColor: {
//         opaqueColor: {
//           themeColor: "LIGHT2",
//         },
//       },
//       // bold: true,
//       fontFamily: "Oswald",
//       fontSize: {
//         magnitude: 25,
//         unit: "PT",
//       },
//     },
//     textRange: {
//       type: "ALL",
//     },
//   };
//   return style;
// }
function formatDescriptionText(textID) {
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
        magnitude: 11,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}

function createTopLeftPhoto(id, imageID, imageUrl) {
  var create = {
    objectId: imageID,
    url: imageUrl,
    elementProperties: {
      pageObjectId: id,
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
        scaleX: 0.5654,
        scaleY: 0.3856,
        translateX: 311700,
        translateY: 1102225,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createTopRightPhoto(id, imageID, imageUrl) {
  var create = {
    objectId: imageID,
    url: imageUrl,
    elementProperties: {
      pageObjectId: id,
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
        scaleX: 0.5654,
        scaleY: 0.3856,
        translateX: 4572000,
        translateY: 1086587.5,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createBottomLeftPhoto(id, imageID, imageUrl) {
  var create = {
    objectId: imageID,
    url: imageUrl,
    elementProperties: {
      pageObjectId: id,
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
        scaleX: 0.5654,
        scaleY: 0.3856,
        translateX: 311700,
        translateY: 2931375,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createBottomRightPhoto(id, imageID, imageUrl) {
  var create = {
    objectId: imageID,
    url: imageUrl,
    elementProperties: {
      pageObjectId: id,
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
        scaleX: 0.5654,
        scaleY: 0.3856,
        translateX: 4572000,
        translateY: 2915737.5,
        unit: "EMU",
      },
    },
  };
  return create;
}
