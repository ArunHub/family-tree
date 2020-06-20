const sample = [
    {
        "fname": "iyyam",
        "lname": "perumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "life_span": { bornOn: "19/06/2020", diedOn: "14-12-1996" },
        "children": ["poongudi", "soundara pandian", "mani", "selva kumar"],
        // "children": ["soundara pandian", "mani", "selva kumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "",
        "mother": ""
    },
    {
        "fname": "thangammal",
        "lname": "",
        "spouse": "iyyam perumal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "F",
        "_age": 68,
        "life_span": { bornOn: "01/01/1940", diedOn: "22-06-2008" },
        "children": ["soundara pandian", "mani", "selva kumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "",
        "mother": ""
    },
    {
        "fname": "soundara",
        "lname": "pandian",
        "gender": "M",
        "_age": 58,
        "spouse": "thulasirani",
        "children": ["sudarshan", "abinaya", 'sudaabi'],
        // "children": ["abinaya"],
        "siblings": ["mani", "selva kumar"],
        "father": "iyyam perumal",
        "mother": "thangammal",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "thulasirani",
        "lname": "",
        "gender": "F",
        "_age": 58,
        "spouse": "soundara pandian",
        "children": ["sudarshan", "abinaya", 'sudaabi'],
        "siblings": ["mani", "selva kumar"],
        "father": "", //TODO
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "abinaya",
        "lname": "",
        "gender": "F",
        "_age": 28,
        "spouse": "vijay prabhu",
        "children": ["sanvika"],
        // "children": ["sanvika", "sandy"],    
        "siblings": ["sudarshan", 'sudaabi'], //TODO: remove siblings
        "father": "soundara pandian",
        "mother": "thulasirani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "vijay",
        "lname": "prabhu",
        "gender": "M",
        "isParent": true,
        "spouse": "abinaya",
        "_age": 31,
        "children": ["sanvika"],
        "siblings": [],
        "father": "", //TODO
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "mani",
        "lname": "",
        "gender": "M",
        "_age": 54,
        "spouse": "sundari",
        "children": ["arun kumar", "preethi"],
        // "children": ["arun kumar", "preethi", 'sanvika', 'sandy', 'rajavel', 'rashika'],
        "siblings": ["soundara pandian", "selva kumar"],
        "father": "iyyam perumal",
        "mother": "thangammal",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sundari",
        "lname": "",
        "gender": "F",
        "_age": 54,
        "spouse": "mani",
        "children": ["arun kumar", "preethi"],
        "father": "",
        "mother": "", //TODO,
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "selva",
        "lname": "kumar",
        "gender": "M",
        "_age": 48,
        "spouse": "pushparani",
        // "spouse": "",
        // "children": [],
        "children": ["rashika"],
        // "children": ["rashika", "sham deepak"],
        "siblings": ["soundara pandian", "mani"],
        "father": "iyyam perumal",
        "mother": "thangammal",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "pushparani",
        "lname": "",
        "gender": "F",
        "_age": 48,
        "spouse": "selva kumar",
        // "spouse": "",
        "children": ["rashika", "sham deepak"],
        "father": "",//TODO
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sudarshan",
        "lname": "",
        "gender": "M",
        "isParent": true,
        "spouse": "laila",
        "children": ["sandy"],
        "_age": 31,
        "siblings": ['abinaya', 'sudaabi'],
        "father": "soundara pandian",
        "mother": "thulasirani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "laila",
        "lname": "",
        "gender": "F",
        "isParent": true,
        "spouse": "sudarshan",
        "children": ["sandy"],
        "_age": 31,
        "father": "soundara pandian",
        "mother": "thulasirani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sudaabi",
        "lname": "",
        "gender": "M",
        "isParent": true,
        "spouse": "vijaya",
        "children": [],
        "_age": 31,
        "siblings": ['abinaya', 'sudarshan'],
        "father": "soundara pandian",
        "mother": "thulasirani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "vijaya",
        "lname": "",
        "gender": "F",
        "isParent": true,
        "spouse": "sudaabi",
        "_age": 31,
        "children": [],
        "siblings": [],
        "father": "",
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sanvika",
        "lname": "",
        "gender": "F",
        "spouse": "",
        "_age": 0.5,
        "siblings": [],
        "father": "vijay prabhu",
        "mother": "abinaya",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "arun",
        "lname": "kumar",
        "gender": "M",
        "spouse": "",
        "image": "arun.jpg",
        "_age": 31,
        "siblings": ['preethi'],
        "father": "mani",
        "mother": "sundari",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sham",
        "lname": "deepak",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['rashika'],
        "father": "selva kumar",
        "mother": "pushparani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "sandy",
        "lname": "",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['rashika'],
        "father": "vijay prabhu",
        "mother": "abinaya",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "preethi",
        "lname": "",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["arun kumar"],
        "father": "mani",
        "mother": "sundari",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "rashika",
        "lname": "",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["sham deepak"],
        "father": "selva kumar",
        "mother": "pushparani",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "raja",
        "lname": "manickam",
        "gender": "M",
        "_age": 68,
        "spouse": "poongudi",
        "children": ["raja", "muthu"],
        "father": "",
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "poongudi",
        "lname": "",
        "gender": "F",
        "_age": 58,
        "spouse": "raja manickam",
        "children": ["raja", "muthu"],
        "siblings": ["mani", "selva kumar"],
        "father": "iyyam perumal", //TODO
        "mother": "thangammal",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "raja",
        "lname": "",
        "gender": "M",
        "_age": 48,
        "spouse": "raji",
        "children": ["rajavel"],
        "father": "raja manickam",
        "mother": "poongudi",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "raji",
        "lname": "",
        "gender": "F",
        "_age": 38,
        "spouse": "raja",
        "children": ["rajavel"],
        "father": "", //TODO
        "mother": "",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "rajavel",
        "lname": "",
        "gender": "M",
        "_age": 8,
        "spouse": "",
        "children": [],
        "father": "raja",
        "mother": "raji",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "muthu",
        "lname": "",
        "gender": "M",
        "_age": 40,
        "spouse": "akka",
        "children": [],
        "father": "raja manickam",
        "mother": "poongudi",
        "life_span": { bornOn: "01/01/1940", }
    },
    {
        "fname": "akka",
        "lname": "",
        "gender": "F",
        "_age": 38,
        "spouse": "muthu",
        "children": [],
        "father": "",
        "mother": "",
        "life_span": { bornOn: "20/06/2020", }
    },
]

window.onload = function () {
    fetch('/home').then(t=>{
        return t.text()
    }).then(f=> console.log(f));
}

function Tree(array) {
    this.data = getJson(array);
    this.notification = [];
}

function getJson(array) {
    let data = {};
    array.forEach(t => {
        data = Object.assign(data, { [t.fname + getLastName(t.lname)]: new Person(t) })
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
    return newJson.data[personName];
}

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
        scrollOnce(lMx1/2);
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

const newJson = new Tree(sample);
newJson.setChildCount();
getDomTree("iyyam perumal", treeStructureId);
// getDomTree("soundara pandian", treeStructureId);
// getDomTree("mani", treeStructureId);
// getDomTree("abinaya", treeStructureId);
// getDomTree("sudaabi", treeStructureId);
// getDomTree("sanvika", treeStructureId);

const search_name = document.getElementById('name_input');
const searchListEl = document.getElementById('search-list');
search_name.addEventListener('keyup', handleSearch, false);
// search_name.addEventListener('blur', handleBlur, false);
// search_name.addEventListener('focus', handleFocus, false);
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

// const submitForm = document.getElementById('submit-form');
// submitForm.addEventListener('submit', handleSubmit, false);
// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e);

// }