import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function competitorTemplate1(id, title, data) {
  var Comp1NameID = uuidv4();
  var Comp1DescriptionID = uuidv4();

  var Comp2NameID = uuidv4();
  var Comp2DescriptionID = uuidv4();

  var Comp3NameID = uuidv4();
  var Comp3DescriptionID = uuidv4();

  var objReturn = [];
  // console.log("competitors");
  // console.log(data);

  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  objReturn.push({
    createShape: createCompName1Text(id, Comp1NameID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp1NameID,
      text: data[0].name,
    },
  });
  objReturn.push({
    updateTextStyle: formatNameText(Comp1NameID),
  });
  objReturn.push({
    createShape: createCompDescription1Text(id, Comp1DescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp1DescriptionID,
      text: data[0].description,
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(Comp1DescriptionID),
  });
  //
  objReturn.push({
    createShape: createCompName2Text(id, Comp2NameID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp2NameID,
      text: data[1].name,
    },
  });
  objReturn.push({
    updateTextStyle: formatNameText(Comp2NameID),
  });
  objReturn.push({
    createShape: createCompDescription2Text(id, Comp2DescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp2DescriptionID,
      text: data[1].description,
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(Comp2DescriptionID),
  });
  //
  objReturn.push({
    createShape: createCompName3Text(id, Comp3NameID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp3NameID,
      text: data[2].name,
    },
  });
  objReturn.push({
    updateTextStyle: formatNameText(Comp3NameID),
  });
  objReturn.push({
    createShape: createCompDescription3Text(id, Comp3DescriptionID),
  });
  objReturn.push({
    insertText: {
      objectId: Comp3DescriptionID,
      text: data[2].description,
    },
  });
  objReturn.push({
    updateTextStyle: formatDescriptionText(Comp3DescriptionID),
  });

  return objReturn;
}

function createCompName1Text(slideID, textID) {
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
        scaleY: 0.1487,
        translateX: 311700,
        translateY: 1124275,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createCompName2Text(slideID, textID) {
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
        scaleY: 0.1487,
        translateX: 311700,
        translateY: 2339350,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createCompName3Text(slideID, textID) {
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
        scaleY: 0.1487,
        translateX: 311700,
        translateY: 3554450,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createCompDescription1Text(slideID, textID) {
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
        scaleY: 0.2413,
        translateX: 311700,
        translateY: 1457550,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createCompDescription2Text(slideID, textID) {
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
        scaleY: 0.2413,
        translateX: 311700,
        translateY: 2672625,
        unit: "EMU",
      },
    },
  };
  return create;
}

function createCompDescription3Text(slideID, textID) {
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
        scaleY: 0.2413,
        translateX: 311700,
        translateY: 3887725,
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
