// function getAnniversary(anniversary) {//birth, death, marriage, 60yrs
//   switch (anniversary.type) {
//     case ANNIVERSARY_TYPE.MARRIAGE:

//       break;
//     case ANNIVERSARY_TYPE.DEATH:
//       break;
//     default:
//       return {
//         birthday: anniversary.date,
//       }
//   }
// };

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
    var divEl = document.createElement('div');
    divEl.innerText = `${value.name}, son of ${value.father}`;
    fragment.appendChild(divEl);
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

function Person(obj) {
  this.name = obj.fname + getLastName(obj.lname);
  this.fname = obj.fname;
  this.lname = obj.lname;
  this.gender = obj.gender === "M" ? GENDER.M : GENDER.F;
  this.image = obj.image ? obj.image : "avatar.png";
  this.spouse = obj.spouse || "";
  this.children = obj.children || [];
  this.siblings = obj.siblings; //TODO for calling relationships
  this.marital_status = this.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE; //TODO
  this.profession = obj.profession //private
  this.life_span = obj.life_span;
  this.childCount = this.children.length;
  this.father = obj.father;
  this.mother = obj.mother;
  this.treeWeight = 0;
}

// Person.prototype.createForeignText = function (rootId, attrs) {
//   const { id, x, y } = attrs;
//   const rootEl = document.getElementById(rootId);
//   const foreignObjEl = document.createElementNS(xmlns, 'foreignObject');
//   const nameList = this.person.spouse ? 2 : 1;
//   const divFragment = this.getDivList(this.person);
//   setAttributesNs(foreignObjEl, { id, width: getTextWidth(nameList), height: textHeight, x, y });
//   foreignObjEl.appendChild(divFragment);
//   rootEl.appendChild(foreignObjEl);
// }

// Person.prototype.getDivList() = function () {
//   const fragment = new DocumentFragment();
//   const nameList = this.person.spouse ? [this.person.name, this.person.spouse] : [this.person.name];
//   nameList.forEach(function (name) {
//     const currPerson = getPerson(name);
//     var divEl = document.createElement('div');
//     divEl.addEventListener('mouseenter', this.handleMouseenter, false);
//     divEl.addEventListener('mouseleave', handleMouseleave, false);
//     divEl.addEventListener('click', this.handleClick, false);
//     setAttributes(divEl, { class: "foreign-div" });
//     const nameCaps = nameCapitalized(name);
//     const imgClass = currPerson.life_span.hasOwnProperty('diedOn') ? "avatar-late" : "";
//     divEl.innerHTML += `<img src="images/${currPerson.image}" alt="${nameCaps}" class="${imgClass}" />`;
//     divEl.innerHTML += `<div class="name">${nameCaps}</div>`;
//     fragment.appendChild(divEl);
//   })

//   return fragment;
// }

// Person.prototype.handleMouseenter = function (e) {
//   const parent = document.getElementById('root');
//   var divEl = document.createElement("div");
//   setAttributes(divEl, { id: "popup", class: "popup" });
//   divEl.style.left = e.clientX + "px";
//   divEl.style.top = e.clientY + "px";
//   const lifeSpan = this.person.life_span.hasOwnProperty('diedOn') ? `(${this.person.life_span.bornOn} - ${this.person.life_span.diedOn})` : "";
//   divEl.innerHTML += `<div>${e.target.innerText}</div><div>${lifeSpan}</div>`;
//   parent.prepend(divEl);
// }

// Person.prototype.handleClick = function (e) {
//   if (nameCapitalized(this.person.name) === e.currentTarget.innerText) {
//     if (this.person.father) {
//       handleMouseleave();
//       removeSvgRoot();
//       getDomTree(this.person.father, 'tree-structure');
//     }
//   } else {
//     handleMouseleave();
//     removeSvgRoot();
//     getDomTree(this.person.spouse, 'tree-structure');
//   }
// }