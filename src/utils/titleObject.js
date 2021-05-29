import { v4 as uuidv4 } from "uuid";

export default function titleObject(id, title) {
  var objReturn = [];
  var titleID = uuidv4();

  objReturn.push({
    createShape: createTitle(id, titleID),
  });
  if (title !== "") {
    objReturn.push({
      insertText: {
        objectId: titleID,
        text: title,
      },
    });
    objReturn.push({
      updateTextStyle: formatTitleText(titleID),
    });
  }

  return objReturn;
}

function createTitle(slideID, textID) {
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
        magnitude: 25,
        unit: "PT",
      },
    },
    textRange: {
      type: "ALL",
    },
  };
  return style;
}
