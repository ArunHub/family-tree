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

function getTreeWeight(count) {//till parent didnt have child then treeweight is 0
  return Math.max(2, count) - 2;
}

function getLastName(lname) {
  return (lname ? ` ${lname}` : "");
}

function getInitial(person) {
  return person.gender === GENDER.M ? person.father.charAt() + person.mother.charAt() : person.spouse ? person.spouse.charAt() : person.father.charAt() + person.mother.charAt();
}

const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1)

function setAttributesNs(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttributeNS(null, key, attrs[key]));
}

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function getTextWidth(n = 2) {
  return n * textWidth;
}

function createText(value, rootTag, attrs) {
  const id = document.getElementById(rootTag);
  const textElement = document.createElementNS(xmlns, 'text');
  const nodevalue = document.createTextNode(value);
  textElement.appendChild(nodevalue);
  setAttributesNs(textElement, attrs);
  id.appendChild(textElement);
}

function handleMouseenter(person, e) {
  const parent = document.getElementById('root');
  var divEl = document.createElement("div");
  setAttributes(divEl, { id: "popup", class: "popup" });
  divEl.style.left = e.clientX + "px";
  divEl.style.top = e.clientY + "px";
  const lifeSpan = person.life_span.hasOwnProperty('diedOn') ? `(${person.life_span.bornOn} - ${person.life_span.diedOn})` : "";
  divEl.innerHTML += `<div>${e.target.innerText}</div><div>${lifeSpan}</div>`;
  parent.prepend(divEl);
}

function handleMouseleave() {
  const popup = document.getElementById('popup');
  popup.parentNode.removeChild(popup);
}

function removeSvgRoot() {
  const element = document.getElementById(rootSvgId);
  element.parentNode.removeChild(element);
}

function createForeignText(person, rootId, attrs) {
  const { id, x, y, getDivList } = attrs;
  const rootEl = document.getElementById(rootId);
  const foreignObjEl = document.createElementNS(xmlns, 'foreignObject');
  const nameList = person.spouse ? 2 : 1;
  const divFragment = getDivList(person);
  setAttributesNs(foreignObjEl, { id, width: getTextWidth(nameList), height: textHeight, x, y });
  foreignObjEl.appendChild(divFragment);
  rootEl.appendChild(foreignObjEl);
}

function getSpanList() {
  const fragment = new DocumentFragment();

  Object.values(arguments).forEach(function (value) {
    var span = document.createElement('span');
    span.setAttribute('class', 'parentNode');
    const name = nameCapitalized(value);
    span.innerHTML = name;
    fragment.appendChild(span)
  })

  return fragment;
}

function getDataList() {
  const fragment = new DocumentFragment();

  Object.values(arguments[0]).forEach(function (value) {
    var option = document.createElement('option');
    option.setAttribute('value', `${value.name}, son of ${value.father}`); //TODO: factory pattern
    fragment.appendChild(option)
  })

  return fragment;
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
