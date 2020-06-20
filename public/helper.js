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

function todayDate() {
  const today = new Date();
  const m = String(today.getMonth() + 1).length === 1 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
  const d = today.getDate();
  const y = today.getFullYear();
  const date = d + "/" + m + "/" + y;
  return date;
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

function scrollToCenter(left) {
  const el = document.getElementById(treeStructureId);
  el.scrollTo({
    top: 0,
    left,
    behavior: 'smooth'
  })
}

function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

const scrollOnce = once(scrollToCenter);

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