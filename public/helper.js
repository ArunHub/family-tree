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

function setAttributesNs(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttributeNS(null, key, attrs[key]));
}

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function getTextElem(value, rootTag, attrs) {
  const textElement = document.createElementNS(svgNamespace, 'text');
  const nodevalue = document.createTextNode(value);
  textElement.appendChild(nodevalue);
  setAttributesNs(textElement, attrs);
  rootTag.appendChild(textElement);
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
  for (let index = 0; index < cL; index++) {
    const path = `<path d="M ${width * index} 0 V ${h}" stroke="orange" stroke-width="${strWidth}" />`;
    id.innerHTML += path;
  }
}