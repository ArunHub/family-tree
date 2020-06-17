const sample = [
    {
        "fname": "iyyam",
        "lname": "perumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        "children": ["poongudi", "soundara pandian", "mani", "selva kumar"],
        // "children": ["soundara pandian", "mani", "selva kumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "iyyam perumal",
        "mother": "thangammal"
    },
    {
        "fname": "thangammal",
        "lname": "",
        "spouse": "iyyam perumal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "F",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        "children": ["soundara pandian", "mani", "selva kumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "iyyam perumal",
        "mother": "thangammal"
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
        "mother": "thangammal"
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
        "mother": ""
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
        "mother": "thulasirani"
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
        "father": "prabhu", //TODO
        "mother": "vijaya",
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
        "mother": "thangammal"
    },
    {
        "fname": "sundari",
        "lname": "",
        "gender": "F",
        "_age": 54,
        "spouse": "mani",
        "children": ["arun kumar", "preethi"],
        "father": "balsamy",
        "mother": "acchi" //TODO
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
        "mother": "thangammal"
    },
    {
        "fname": "pushparani",
        "lname": "",
        "gender": "F",
        "_age": 48,
        "spouse": "selva kumar",
        // "spouse": "",
        "children": ["rashika", "sham deepak"],
        "father": "srithath",//TODO
        "mother": "sriamma"
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
        "mother": "thulasirani"
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
        "mother": "thulasirani"
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
        "mother": "thulasirani"
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
        "father": "vijaya",
        "mother": "vijaya",
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
    },
    {
        "fname": "arun",
        "lname": "kumar",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['preethi'],
        "father": "mani",
        "mother": "sundari",
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
    },
    {
        "fname": "raja",
        "lname": "manickam",
        "gender": "M",
        "_age": 68,
        "spouse": "poongudi",
        "children": ["raja", "muthu"],
        "father": "iyyam perumal",
        "mother": "thangammal"
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
        "mother": "thangammal"
    },
    {
        "fname": "raja",
        "lname": "",
        "gender": "M",
        "_age": 48,
        "spouse": "raji",
        "children": ["rajavel"],
        "father": "raja manickam",
        "mother": "poongudi"
    },
    {
        "fname": "raji",
        "lname": "",
        "gender": "F",
        "_age": 38,
        "spouse": "raja",
        "children": ["rajavel"],
        "father": "iyyam perumal", //TODO
        "mother": "thangammal"
    },
    {
        "fname": "rajavel",
        "lname": "",
        "gender": "M",
        "_age": 8,
        "spouse": "",
        "children": [],
        "father": "raja",
        "mother": "raji"
    },
    {
        "fname": "muthu",
        "lname": "",
        "gender": "M",
        "_age": 40,
        "spouse": "akka",
        "children": [],
        "father": "raja manickam",
        "mother": "poongudi"
    },
    {
        "fname": "akka",
        "lname": "",
        "gender": "F",
        "_age": 38,
        "spouse": "muthu",
        "children": [],
        "father": "raja manickam",
        "mother": "poongudi"
    },
]

function Person(obj) {
    this.name = obj.fname + getLastName(obj.lname);
    this.fname = obj.fname;
    this.lname = obj.lname;
    this.gender = obj.gender === "M" ? GENDER.M : GENDER.F;
    this.image = getImage(obj.gender);
    this.spouse = obj.spouse || "";
    this.children = obj.children || [];
    this.siblings = obj.siblings;
    this.marital_status = this.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE; //TODO
    this.profession = obj.profession //private
    this.lifeSpan = obj.lifeSpan;
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
        createForeignText([person.name, person.spouse], rootSvgId, { id: personId, x: parentX, y: parentY });

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
        createForeignText([person.name], rootSvgId, { id: personId, x: parentX, y: parentY });
    }
}

const svg = document.getElementById('svg');
const treeStructure = document.getElementById('tree-structure');
const pickName = document.getElementById('pick-name');

pickName.addEventListener('submit', e => handleSearch(e));



const newJson = new Tree(sample);
newJson.setChildCount();
getDomTree("iyyam perumal", 'tree-structure');
// getDomTree("soundara pandian", 'tree-structure');
// getDomTree("mani", 'tree-structure');
// getDomTree("abinaya", 'tree-structure');
// getDomTree("sudaabi", 'tree-structure');
// getDomTree("sanvika", 'tree-structure');


function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = getPerson(rootName.value);
    console.log('va', person)

}