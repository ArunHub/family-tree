function getAnniversary(anniversary) {//birth, death, marriage, 60yrs
  switch (anniversary.type) {
    case ANNIVERSARY_TYPE.MARRIAGE:

      break;
    case ANNIVERSARY_TYPE.DEATH:
      break;
    default:
      return {
        birthday: anniversary.date,
      }
  }
};

function getImage(gender) {
  if (gender === GENDER.M) {
    return "ko";
  } else {

  }
};

const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1)

function setAttributesNs(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttributeNS(null, key, attrs[key]));
}

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function createText(value, rootTag, attrs) {
  const id = document.getElementById(rootTag);
  const textElement = document.createElementNS(xmlns, 'text');
  const nodevalue = document.createTextNode(value);
  textElement.appendChild(nodevalue);
  setAttributesNs(textElement, attrs);
  id.appendChild(textElement);
}

function getSpanList() {
  const fragment = new DocumentFragment();

  Object.values(arguments).forEach(function (name) {
    var span = document.createElement('span');
    span.setAttribute('class', 'parentNode')
    span.innerHTML = name
    fragment.appendChild(span)
  })

  return fragment;
}

function getPathList(rootId, w, h, cL, strWidth) {
  const id = document.getElementById(rootId);
  const width = w / (cL - 1);
  // let tempArr = [];
  for (let index = 0; index < cL; index++) {
    // tempArr.push(width * index);
    const path = `<path id="path-${rootId}-${index}" d="M ${width * index} 0 V ${h}" stroke="orange" stroke-width="${strWidth}" />`;
    id.innerHTML += path;
  }
  // return tempArr;
}

function createPath(rootTag, attrs) {
  const id = document.getElementById(rootTag);
  const element = document.createElementNS(xmlns, 'path');
  setAttributesNs(element, attrs);
  id.appendChild(element);
}

function createSvg(rootTag, attrs) {
  const id = document.getElementById(rootTag);
  const element = `<svg id="${attrs.id}" xmlns="${xmlns}" version="${version}" viewBox="${attrs.viewBox}" width="${attrs.width}" height="${attrs.height}"
      preserveAspectRatio="${preserveAspectRatio}" />`;
  id.innerHTML += element;
}