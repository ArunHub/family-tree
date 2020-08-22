function Tree(obj) {
    this.data = getJson(obj);
    this.notification = [];
}

function getJson(array) {
    let data = {};
    array.forEach(t => {
        data = Object.assign(data, { [replaceTrim(t.fname) + getLastName(t.lname)]: new Person(t) })
    })
    return data;
}

Tree.prototype.setChildCount = function () {
    Object.values(this.data).forEach(t => {
        if (todayDate() === t.life_span.bornOn) {
            setNotifications(t);
        }
        const count = getChildCount(t.name);
        const treeWeight = getTreeWeight(count);
        this.setTreeWeight(t.name, treeWeight);
    })
}

function setNotifications(data) {
    const notificationEL = document.getElementById('notification-list');
    notificationEL.innerHTML += `<div>Happy Birthday, ${data.name}</div>`;
}

Tree.prototype.setTreeWeight = function (name, treeWeight) {
    this.data[name]['treeWeight'] = treeWeight;
}

Tree.prototype.setSameTree = function (name) {
    const data = Object.assign({}, this.data);
    data[name]['isSameTree'] = true;
    this.data = data;
}

function getPerson(personName) {
    if (!newJson.data[personName]) {
        const modified = replaceTrim(personName);
        return newJson.data[modified];
    }
    return newJson.data[personName];
}

//created this function in order to find person with same name and fetch from Tree data object but since data object will override incoming same name with existing data . Dropping this idea and future implemention should be in mongodb database implementation better

// function getChild(name, parent) {
//     return Object.values(newJson.data).find(t => t.name === name && ((t.father === parent) || (t.mother === parent)));
// }

function handleClick(person, e) {
    if (person.isSameTree) {
        if (person.father) {
            handleMouseleave();
            removeSvgRoot();
            getDomTree(person.father, treeStructureId);
        }
    } else {
        handleMouseleave();
        removeSvgRoot();
        getDomTree(person.name, treeStructureId);
    }
}

function createForeignText(personList, attrs) {
    const { id, x, y } = attrs;
    const rootEl = document.getElementById(rootSvgId);
    const foreignObjEl = document.createElementNS(xmlns, 'foreignObject');
    const divFragment = getDivList(personList);
    setAttributesNs(foreignObjEl, { id, width: getTextWidth(personList.length), height: textHeight, x, y });
    foreignObjEl.appendChild(divFragment);
    rootEl.appendChild(foreignObjEl);
}

function getDivList(personList) {
    const fragment = new DocumentFragment();
    personList.forEach(function (obj) {
        var divEl = document.createElement('div');
        divEl.addEventListener('mouseenter', handleMouseenter.bind(this, obj), false);
        divEl.addEventListener('mouseleave', handleMouseleave, false);
        divEl.addEventListener('click', handleClick.bind(this, obj), false);
        setAttributes(divEl, { class: "foreign-div" });
        const nameCaps = nameCapitalized(obj.name);
        const imgClass = obj.life_span.hasOwnProperty('diedOn') ? "avatar-late" : "";
        divEl.innerHTML += `<img src="images/${obj.image}" alt="${nameCaps}" class="${imgClass}" />`;
        divEl.innerHTML += `<div class="name">${nameCaps}</div>`;
        fragment.appendChild(divEl);
    })

    return fragment;
}

function getChildCount(name, count = 1) {
    const person = getPerson(name);
    let num = count;
    if (person.spouse) {
        // num++;
        if (person.childCount) {
            num = num + person.childCount;
            person.children.forEach((t) => num = getChildCount(t, num));
        }
    }
    return num;
}

function getDomTree(name, rootId) {
    const person = getPerson(name);
    const screenWidth = document.documentElement.offsetWidth;
    const rootSvgEl = `<svg id="${rootSvgId}" xmlns="${xmlns}" version="${version}" width="${screenWidth}" height="${screenWidth}" />`;
    const rootEl = document.getElementById(rootId);
    rootEl.innerHTML = rootSvgEl;

    const parentWidth = person.spouse ? getTextWidth() : getTextWidth(1);

    //determine if total horizontal is greater than horizontal width limit
    const hTotalW = person.treeWeight * parentWidth;
    const hWidthLimit = screenWidth * middleRatio;
    const newHtmlWidth = Number.parseFloat((hTotalW / middleRatio).toFixed(2));
    let lX2 = (screenWidth / 2);
    if (hTotalW >= hWidthLimit) {
        const svgEl = document.getElementById(rootSvgId);
        setAttributesNs(svgEl, { width: newHtmlWidth });
        lX2 = (newHtmlWidth / 2);
    }

    const lY2 = 0;
    const hiddenParentWidth = 0;
    const hMidPt = hiddenParentWidth / 2;

    generateTree(person, 0, lX2, lY2, hTotalW, hMidPt, 1);
}

function generateTree(person, i, lX2, lY2, hTotalW, hMidPt, cL) {
    //TODO: going local culture now as spouse required to check children contrary to modern culture
    const personId = (person.fname + person.lname) + "-" + getInitial(person);
    newJson.setSameTree(person.name);
    const hMx1 = lX2 - (hTotalW / 2) * Math.min(1, cL - 1);
    const hLy2 = lY2;
    //lines above child
    const lMx1 = Number.parseFloat((hMx1 + (i && (hTotalW / (cL - 1)) * i)).toFixed(2)); // getting -1 here so line is getting drawn reversely
    const lMy1 = hLy2;
    const lLx2 = Number.parseFloat((hMx1 + (i && (hTotalW / (cL - 1)) * i)).toFixed(2));
    const lLy2 = hLy2 + hMidPt;

    if (person.spouse) {
        const parentWidth = getTextWidth();
        const quarter = parentWidth / 4;
        const newHmidPt = parentWidth / 2;
        const parentHeight = textHeight;
        const parentX = Number.parseFloat((lLx2 - newHmidPt).toFixed(2));
        const parentY = lLy2;
        const newCL = person.childCount;
        const newHTotalW = person.treeWeight * parentWidth;

        createPath(rootSvgId, { d: `M ${lMx1} ${lMy1} L ${lLx2} ${lLy2}`, stroke: `${strOrange}` });
        scrollOnce(lMx1 / 2);
        const spouse = getPerson(person.spouse);
        createForeignText([person, spouse], { id: personId, x: parentX, y: parentY });

        if (newCL) {
            //first path 
            const fMx1 = Number.parseFloat((parentX + quarter).toFixed(2));
            const fMy1 = parentY + parentHeight;
            const fLx2 = Number.parseFloat((parentX + newHmidPt).toFixed(2));
            const fLy2 = parentY + parentHeight + newHmidPt;

            //second path
            const sMx1 = Number.parseFloat((parentX + (quarter * 3)).toFixed(2));
            const sMy1 = fMy1;
            const sLx2 = fLx2; //new x2
            const sLy2 = fLy2; //new y2

            //horizontal path
            const newHMx1 = Number.parseFloat((sLx2 - (newHTotalW / 2) * Math.min(1, newCL - 1)).toFixed(2));
            const hMy1 = sLy2;
            const hLx2 = Number.parseFloat((sLx2 + (newHTotalW / 2) * Math.min(1, newCL - 1)).toFixed(2));
            const newHLy2 = sLy2;

            // //from quarter one
            createPath(rootSvgId, { d: `M ${fMx1}  ${fMy1} L ${fLx2} ${fLy2}`, stroke: `${strOrange}` })
            // //from quarter two
            createPath(rootSvgId, { d: `M ${sMx1}  ${sMy1} L ${sLx2} ${sLy2}`, stroke: `${strOrange}` })
            // //horizontal line
            createPath(rootSvgId, { d: `M ${newHMx1} ${hMy1} L ${hLx2} ${newHLy2}`, stroke: `${strOrange}` });

            person.children.forEach((child, idx) => {
                const nextPerson = getPerson(child);
                const newHTotalW = person.treeWeight * parentWidth;
                generateTree(nextPerson, idx, sLx2, sLy2, newHTotalW, newHmidPt, newCL);
            })
        }
    } else {
        const parentWidth = getTextWidth(1);
        const parentX = Number.parseFloat((lLx2 - parentWidth / 2).toFixed(2));
        const parentY = lLy2;
        createPath(rootSvgId, { d: `M ${lMx1} ${lMy1} L ${lLx2} ${lLy2}`, stroke: `${strOrange}` });
        createForeignText([person], { id: personId, x: parentX, y: parentY });
    }
}

const svg = document.getElementById('svg');
const treeStructure = document.getElementById(treeStructureId);
let newJson;

window.onload = function () {
    const loaderEl = document.getElementById('loader');
    const LOCALPATH = document.location.hostname === "localhost" ? './../service/content.json' : './service/content.json'

    // fetch('http://localhost:3000/data').then(t => { // setup for local development
    fetch('http://52.66.178.232:4000/data').then(t => { // stopped instance
        return t.json();
    }).then(f => {
        loaderEl.style.display = "none";
        newJson = new Tree(f);
        newJson.setChildCount();
        getDomTree("iyyam perumal", treeStructureId);
    }).catch((error) => {
      console.error('Error in Aws so fallback to local', error);
      fetch(LOCALPATH).then(res=> {
          return res.json();
        }).then(q => {
            loaderEl.style.display = "none";
            newJson = new Tree(q);
            newJson.setChildCount();
            getDomTree("iyyam perumal", treeStructureId);
        })
    });
}

const search_name = document.getElementById('name_input');
const searchListEl = document.getElementById('search-list');
search_name.addEventListener('keyup', handleSearch, false);
searchListEl.addEventListener('click', handleOptionClick, false);


function handleSearch(e) {
    const value = e.target.value;
    const dataList = Object.values(newJson.data).filter(t => t.name.indexOf(value) !== -1);

    searchListEl.innerHTML = "";
    searchListEl.appendChild(getDataList(dataList));
    showSearchList();
}

function hideSearchList() {
    searchListEl.style.display = "none";
}

function showSearchList() {
    searchListEl.style.display = "block";
}

function handleOptionClick(e) {
    const value = e.target.textContent;
    search_name.value = value.replace(/,.+/, "");
    hideSearchList();
    getDomTree(search_name.value, treeStructureId);
}

const bodyEl = document.body;
bodyEl.addEventListener('click', function () {
    if (searchListEl.style.display === "block") {
        hideSearchList();
    }
}, false);
