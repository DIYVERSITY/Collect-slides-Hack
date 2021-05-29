// import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function competitorTemplate1(id, title, data) {
  var objReturn = [];
  console.log("competitors");
  console.log(data);

  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  return objReturn;
}

// function createCompName1Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }

// function createCompName2Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }

// function createCompName3Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }
// function createCompName4Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }

// function createCompDescription1Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }

// function createCompDescription2Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }

// function createCompDescription3Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }
// function createCompDescription4Text(slideID, textID) {
//   var create = {
//     objectId: textID,
//     shapeType: "TEXT_BOX",
//     elementProperties: {
//       pageObjectId: slideID,
//       size: {
//         width: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//         height: {
//           magnitude: 3000000,
//           unit: "EMU",
//         },
//       },
//       transform: {
//         scaleX: 1.0027,
//         scaleY: 0.146,
//         translateX: 2644514.1175,
//         translateY: 1264250,
//         unit: "EMU",
//       },
//     },
//   };
//   return create;
// }
