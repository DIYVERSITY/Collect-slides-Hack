import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function personaTemplate(id, title, data) {
  var GoalsID = uuidv4();
  var GoalsDescriptionID = uuidv4();

  var PainID = uuidv4();
  var PainDescriptionID = uuidv4();

  var ScenarioID = uuidv4();
  var ScenarioDescriptionID = uuidv4();

  var objReturn = [];
  console.log("persona here");
  console.log(data);
  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  objReturn.push({
    createShape: createGoalsText(id, GoalsID),
  });
  objReturn.push({
    insertText: {
      objectId: GoalsID,
      text: "Goals and Needs",
    },
  });
  objReturn.push({
    updateTextStyle: formatSubjectText(GoalsID),
  });

  objReturn.push({
    createShape: createGoalsDescriptionText(id, GoalsDescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: GoalsDescriptionID,
      text: data.needs,
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(GoalsDescriptionID),
  });

  //

  objReturn.push({
    createShape: createPainText(id, PainID),
  });
  objReturn.push({
    insertText: {
      objectId: PainID,
      text: "Pain Points",
    },
  });
  objReturn.push({
    updateTextStyle: formatSubjectText(PainID),
  });

  objReturn.push({
    createShape: createPainDescriptionText(id, PainDescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: PainDescriptionID,
      text: data.pains,
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(PainDescriptionID),
  });

  //
  objReturn.push({
    createShape: createSenarioText(id, ScenarioID),
  });
  objReturn.push({
    insertText: {
      objectId: ScenarioID,
      text: "Scenario",
    },
  });
  objReturn.push({
    updateTextStyle: formatSubjectText(ScenarioID),
  });

  objReturn.push({
    createShape: createSenarioDescriptionText(id, ScenarioDescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: ScenarioDescriptionID,
      text: data.scenario[0],
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(ScenarioDescriptionID),
  });

  return objReturn;
}

function createGoalsText(slideID, textID) {
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
        scaleX: 1.0027,
        scaleY: 0.146,
        translateX: 2644514.1175,
        translateY: 1264250,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createGoalsDescriptionText(slideID, textID) {
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
        scaleX: 1.0027,
        scaleY: 0.3804,
        translateX: 2634679.51,
        translateY: 1680506.2999999998,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createPainText(slideID, textID) {
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
        scaleX: 1.0027,
        scaleY: 0.146,
        translateX: 5816129.5100000007,
        translateY: 1264250,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createPainDescriptionText(slideID, textID) {
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
        scaleX: 1.0027,
        scaleY: 0.3804,
        translateX: 5816129.5100000007,
        translateY: 1680491.26,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createSenarioText(slideID, textID) {
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
        scaleX: 1.0027,
        scaleY: 0.146,
        translateX: 2634679.51,
        translateY: 2816959.96,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createSenarioDescriptionText(slideID, textID) {
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
        scaleX: 2.0632,
        scaleY: 0.4222,
        translateX: 2634679.51,
        translateY: 3262776.83,
        unit: "EMU",
      },
    },
  };
  return create;
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

function formatSubjectText(textID) {
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
        magnitude: 10,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}
