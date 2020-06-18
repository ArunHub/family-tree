const sample = [
    {
        "fname": "iyyam",
        "lname": "perumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "life_span": { bornOn: "01-01-1940", diedOn: "14-12-1996" },
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
        "life_span": { bornOn: "01-01-1940", diedOn: "22-06-2008" },
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
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
        "life_span": { bornOn: "01-01-1940", }
    },
]

function Person(obj) {
    this.name = obj.fname + getLastName(obj.lname);
    this.fname = obj.fname;
    this.lname = obj.lname;
    this.gender = obj.gender === "M" ? GENDER.M : GENDER.F;
    this.image = obj.image ? obj.image : "avatar.png";
    this.spouse = obj.spouse || "";
    this.children = obj.children || [];
    this.siblings = obj.siblings;
    this.marital_status = this.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE; //TODO
    this.profession = obj.profession //private
    this.life_span = obj.life_span;
    this.childCount = this.children.length;
    this.father = obj.father;
    this.mother = obj.mother;
    this.treeWeight = 0;
}

function Tree(array) {
    this.data = getJson(array);
}

Tree.prototype.setChildCount = function () {
    Object.values(this.data).forEach(t => {
        const count = getChildCount(t.name);
        const treeWeight = getTreeWeight(count);
        this.setTreeWeight(t.name, treeWeight);
    })
}

Tree.prototype.setTreeWeight = function (name, treeWeight) {
    this.data[name]['treeWeight'] = treeWeight;
}

// Tree.prototype.setSameTree = function (name) {
//     const data = Object.assign({}, this.data);
//     data[name]['isSameTree'] = true;
//     this.data = data;
//     console.log('this', this.data)
// }

function getJson(array) {
    let data = {};
    array.forEach(t => {
        data = Object.assign(data, { [t.fname + getLastName(t.lname)]: new Person(t) })
    })

    return data;
}

function getPerson(personName) {
    return newJson.data[personName];
}

function handleClick(person, e) {
    if (nameCapitalized(person.name) === e.currentTarget.innerText) {
        if (person.father) {
            handleMouseleave();
            removeSvgRoot();
            getDomTree(person.father, 'tree-structure');
        }
    } else {
        handleMouseleave();
        removeSvgRoot();
        getDomTree(person.spouse, 'tree-structure');
    }
}

function getDivList(person) { //TODO: Modular pattern
    const fragment = new DocumentFragment();
    const nameList = person.spouse ? [person.name, person.spouse] : [person.name];
    nameList.forEach(function (name) {
        const currPerson = getPerson(name);
        var divEl = document.createElement('div');
        divEl.addEventListener('mouseenter', handleMouseenter.bind(this, currPerson), false);
        divEl.addEventListener('mouseleave', handleMouseleave, false);
        divEl.addEventListener('click', handleClick.bind(this, currPerson), false);
        setAttributes(divEl, { class: "foreign-div" });
        const nameCaps = nameCapitalized(name);
        const imgClass = currPerson.life_span.hasOwnProperty('diedOn') ? "avatar-late" : "";
        divEl.innerHTML += `<img src="images/${currPerson.image}" alt="${nameCaps}" class="${imgClass}" />`;
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
    // newJson.setSameTree(person.name);
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
        createForeignText(person, rootSvgId, { id: personId, x: parentX, y: parentY, getDivList });

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
        createForeignText(person, rootSvgId, { id: personId, x: parentX, y: parentY, getDivList });
    }
}

const svg = document.getElementById('svg');
const treeStructure = document.getElementById('tree-structure');

const newJson = new Tree(sample);
newJson.setChildCount();
getDomTree("iyyam perumal", 'tree-structure');
// getDomTree("soundara pandian", 'tree-structure');
// getDomTree("mani", 'tree-structure');
// getDomTree("abinaya", 'tree-structure');
// getDomTree("sudaabi", 'tree-structure');
// getDomTree("sanvika", 'tree-structure');

const search_name = document.getElementById('name_input');
search_name.addEventListener('keyup', handleSearch, false);
function handleSearch(e) {
    const value = e.target.value;
    const dataList = Object.values(newJson.data).filter(t => t.name.indexOf(value) !== -1);
    const datalistEl = document.getElementById('search_list');
    console.log('sdf', datalistEl);
    datalistEl.innerHTML = "";
    datalistEl.appendChild(getDataList(dataList));
}

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('submit', handleSubmit, false);
function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

}