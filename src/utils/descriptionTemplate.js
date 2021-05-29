import { v4 as uuidv4 } from "uuid";
import titleObject from "./titleObject";

export default function descriptionTemplate(id, title, description) {
  var objReturn = [];
  var descriptionID = uuidv4();

  var titleText = titleObject(id, title);
  for (let i = 0; i < titleText.length; i++) {
    objReturn.push(titleText[i]);
  }

  objReturn.push({
    createShape: createDescription(id, descriptionID),
  });

  if (description !== "") {
    objReturn.push({
      insertText: {
        objectId: descriptionID,
        text: description,
      },
    });
    objReturn.push({
      updateTextStyle: formatDescriptionText(descriptionID),
    });
  }

  return objReturn;
}

function createDescription(slideID, textID) {
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
        scaleY: 1.1388,
        translateX: 311700,
        translateY: 1152475,
        unit: "EMU",
      },
    },
  };
  return create;
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
      // lineSpacing: 137.5,
      fontFamily: "Average",
      fontSize: {
        magnitude: 12,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}
