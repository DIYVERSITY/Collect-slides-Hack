import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function teamTemplate(id, title, data) {
  var objReturn = [];
  // console.log("team");
  // console.log(data);
  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  for (let i = 0; i < data.length; i++) {}

  objReturn.push({
    createImage: createTopLeftPhoto(id, uuidv4(), data[0].LinkedInImg),
  });
  objReturn.push({
    createImage: createTopRightPhoto(id, uuidv4(), data[1].LinkedInImg),
  });
  objReturn.push({
    createImage: createBottomLeftPhoto(id, uuidv4(), data[2].LinkedInImg),
  });
  objReturn.push({
    createImage: createBottomRightPhoto(id, uuidv4(), data[3].LinkedInImg),
  });

  return objReturn;
}

// function formatNameText(textID) {
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
// function formatDescriptionText(textID) {
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
