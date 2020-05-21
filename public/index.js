const sample = [
    {
        "fname": "iyyam",
        "lname": "perumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        // "children": ["poongudi", "soundara pandian", "mani", "selva kumar"],
        "children": ["soundara pandian", "mani", "selva kumar"],
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
        "children": ["sanvika", "sandy"],
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
        // "children": ["arun kumar", "preethi",'sanvika','sandy','rajavel','rashika'],
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
        "spouse": "",
        "_age": 31,
        "siblings": ['abinaya', 'sudaabi'],
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
        num++;
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
    if (hTotalW > hWidthLimit) {
        const newHtmlWidth = hTotalW / middleRatio;
        const svgEl = document.getElementById(rootSvgEl);
        setAttributesNs(svgEl, { width: newHtmlWidth });
        const newX = (newHtmlWidth - parentWidth) / 2;
        setAttributesNs(parentOneId, { x: newX });
    }

    const lX2 = (screenWidth / 2);
    const lY2 = 0;

    generateTree(person, 0, lX2, lY2, hTotalW, 0);

    if (false && person.spouse) {
        createForeignText([person.name, person.spouse], rootSvgId, { id: personId, x: 0, y: 0 });
        const parentOneEl = document.getElementById(personId);
        const p1Dimension = parentOneEl.getClientRects()[0];
        const parentWidth = p1Dimension.width;
        const parentHeight = p1Dimension.height;
        const parentX = lX2 - p1Dimension.width / 2;
        const parentY = 0;//default
        setAttributesNs(parentOneEl, { x: parentX, y: parentY });

        const cL = person.childCount;

        //if parent has child 
        if (cL) {
            const quarter = (parentWidth) / 4;
            const hMidPt = (parentWidth) / 2;
            if (false) {

            } else {
                //first path 
                const fMx1 = parentX + quarter;
                const fMy1 = parentY + parentHeight;
                const fLx2 = parentX + hMidPt;
                const fLy2 = parentY + parentHeight + hMidPt;

                //second path
                const sMx1 = parentX + (quarter * 3);
                const sMy1 = fMy1;
                const sLx2 = fLx2;
                const sLy2 = fLy2;

                //horizontal path
                const hMx1 = sLx2 - (hTotalW / 2) * Math.min(1, cL - 1);
                const hMy1 = sLy2;
                const hLx2 = sLx2 + (hTotalW / 2) * Math.min(1, cL - 1);
                const hLy2 = sLy2;

                //from quarter one
                createPath(rootSvgId, { d: `M ${fMx1}  ${fMy1} L ${fLx2} ${fLy2}`, stroke: `${strOrange}` })
                //from quarter two
                createPath(rootSvgId, { d: `M ${sMx1}  ${sMy1} L ${sLx2} ${sLy2}`, stroke: `${strOrange}` })
                //horizontal line
                createPath(rootSvgId, { d: `M ${hMx1} ${hMy1} L ${hLx2} ${hLy2}`, stroke: `${strOrange}` });

                person.children.forEach((child, i) => {
                    generateChildTree(child, i, { parentX, parentY, parentHeight, parentWidth, quarter, hMidPt, hTotalW, cL });
                })

            }
        }
    } else {
        // createForeignText([person.name], rootSvgId, { id: personId, x: 0, y: 0 });
        // const parentOneEl = document.getElementById(personId);
        // const p1Dimension = parentOneEl.getClientRects()[0];
        // const lX2 = (screenWidth / 2);
        // const x = lX2 - p1Dimension.width / 2;
        // const y = 0;
        // setAttributesNs(parentOneEl, { x, y });
    }
}

function generateTree(person, i, lX2, lY2, hTotalW, hMidPt) {
    //TODO: going local culture now as spouse required to check children contrary to modern culture
    const personId = (person.fname + person.lname) + "-" + getInitial(person);

    const cL = person.childCount;

    const hMx1 = lX2 - (hTotalW / 2) * Math.min(1, cL - 1);
    const hLy2 = lY2;
    //lines above child
    const lMx1 = hMx1 + (i && (hTotalW / (cL - 1)) * i); // getting -1 here so line is getting drawn reversely
    const lMy1 = hLy2;
    const lLx2 = hMx1 + (i && (hTotalW / (cL - 1)) * i);
    const lLy2 = hLy2 + hMidPt;


    if (person.spouse) {
        const parentWidth = getTextWidth();
        const quarter = parentWidth / 4;
        const newHmidPt = parentWidth / 2;
        const parentHeight = textHeight;
        const parentX = lX2 - newHmidPt;
        const parentY = lY2;

        createPath(rootSvgId, { d: `M ${lMx1} ${lMy1} L ${lLx2} ${lLy2}`, stroke: `${strOrange}` });
        createForeignText([person.name, person.spouse], rootSvgId, { id: personId, x: parentX, y: parentY });

        if (cL) {
            //first path 
            const fMx1 = parentX + quarter;
            const fMy1 = parentY + parentHeight;
            const fLx2 = parentX + newHmidPt;
            const fLy2 = parentY + parentHeight + newHmidPt;

            //second path
            const sMx1 = parentX + (quarter * 3);
            const sMy1 = fMy1;
            const sLx2 = fLx2;
            const sLy2 = fLy2;

            //horizontal path
            const newHMx1 = sLx2 - (hTotalW / 2) * Math.min(1, cL - 1);
            const hMy1 = sLy2;
            const hLx2 = sLx2 + (hTotalW / 2) * Math.min(1, cL - 1);
            const hLy2 = sLy2;

            // //from quarter one
            createPath(rootSvgId, { d: `M ${fMx1}  ${fMy1} L ${fLx2} ${fLy2}`, stroke: `${strOrange}` })
            // //from quarter two
            createPath(rootSvgId, { d: `M ${sMx1}  ${sMy1} L ${sLx2} ${sLy2}`, stroke: `${strOrange}` })
            // //horizontal line
            createPath(rootSvgId, { d: `M ${newHMx1} ${hMy1} L ${hLx2} ${hLy2}`, stroke: `${strOrange}` });

            person.children.forEach((child, i) => {
                const nextPerson = getPerson(child);
                // const parentWidth = nextPerson.spouse ? getTextWidth() : getTextWidth(1);

                const newHTotalW = cL > 1 ? person.treeWeight * parentWidth : 0;
                generateTree(nextPerson, i, sLx2, sLy2, newHTotalW, newHmidPt);
            })
        }

    } else {
        const parentWidth = getTextWidth(1);
        const parentX = lLx2 - parentWidth / 2;
        const parentY = lLy2;
        createPath(rootSvgId, { d: `M ${lMx1} ${lMy1} L ${lLx2} ${lLy2}`, stroke: `${strOrange}` });
        createForeignText([person.name], rootSvgId, { id: personId, x: parentX, y: parentY });
    }
}

function generateChildTree(name, i, attrs) {

    const person = getPerson(name);
    //TODO: going local culture now as spouse required to check children contrary to modern culture
    const personId = (person.fname + person.lname) + "-" + getInitial(person);

    const { parentX, parentY, parentHeight, quarter, hMidPt, hTotalW, cL, parentWidth } = attrs;

    //first path 
    const fMx1 = parentX + quarter;
    const fMy1 = parentY + parentHeight;
    const fLx2 = parentX + hMidPt;
    const fLy2 = parentY + parentHeight + hMidPt;

    //second path
    const sMx1 = parentX + (quarter * 3);
    const sMy1 = fMy1;
    const sLx2 = fLx2;
    const sLy2 = fLy2;

    //horizontal path
    const hMx1 = sLx2 - (hTotalW / 2) * Math.min(1, cL - 1);
    const hMy1 = sLy2;
    const hLx2 = sLx2 + (hTotalW / 2) * Math.min(1, cL - 1);
    const hLy2 = sLy2;

    //lines above child
    const lMx1 = hMx1 + (i && (hTotalW / (cL - 1)) * i);
    const lMy1 = hLy2;
    const lLx2 = hMx1 + (i && (hTotalW / (cL - 1)) * i);
    const lLy2 = hLy2 + hMidPt;

    // //from quarter one
    // createPath(rootSvgId, { d: `M ${fMx1}  ${fMy1} L ${fLx2} ${fLy2}`, stroke: `${strOrange}` })
    // //from quarter two
    // createPath(rootSvgId, { d: `M ${sMx1}  ${sMy1} L ${sLx2} ${sLy2}`, stroke: `${strOrange}` })
    // //horizontal line
    // createPath(rootSvgId, { d: `M ${hMx1} ${hMy1} L ${hLx2} ${hLy2}`, stroke: `${strOrange}` });
    //above line
    createPath(rootSvgId, { d: `M ${lMx1} ${lMy1} L ${lLx2} ${lLy2}`, stroke: `${strOrange}` });

    if (person.spouse) {
        // const newParentX = lLx2 - (parentWidth / 2);
        // const newParentY = lLy2;
        // createForeignText([person.name, person.spouse], rootSvgId, { id: personId, x: newParentX, y: newParentY });
    } else {
        const newParentX = lLx2 - (textWidth / 2);
        const newParentY = lLy2;
        createForeignText([name], rootSvgId, { id: personId, x: newParentX, y: newParentY });
    }
}

function drawSvg(name, index, svgId, extraParams) {
    const person = getPerson(name);
    const vPathPosition = extraParams.cL > 1 ? extraParams.hPathWidth / (extraParams.cL - 1) : extraParams.hMidPt;
    const hStartPt = extraParams.cL > 1 ? (vPathPosition * index) + extraParams.hStartPt : vPathPosition + extraParams.hStartPt;

    const parentOneId = (person.fname + person.lname) + "-" + getInitial(person);
    if (person.spouse) {
        //first child vertical path
        createPath(svgId, { d: `M ${hStartPt} ${(extraParams.vPathHeight + extraParams.hMidPt) * extraParams.step} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}` });

        //parent one
        createText(nameCapitalized(person.name), svgId, { id: parentOneId, x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight + textHeight });

        const pathId1 = document.getElementById(parentOneId);
        const p1Dimension = pathId1.getClientRects()[0];


        //parent two
        const parentTwoId = person.gender === GENDER.M ? person.spouse + "-" + person.name.charAt() : person.spouse + "-" + getInitial(getPerson(person.spouse));

        createText(nameCapitalized(person.spouse), svgId, { id: parentTwoId, x: (hStartPt) + p1Dimension.width, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight + textHeight });

        const pathId2 = document.getElementById(parentTwoId);
        const p2Width = pathId2.getClientRects()[0].width;

        const hTotalW = p1Dimension.width + p2Width;
        const hMidPt = (hTotalW) / 2;
        const newHstart = hStartPt - hMidPt;

        setAttributesNs(pathId1, { x: newHstart });
        setAttributesNs(pathId2, { x: newHstart + p1Dimension.width + textHeight / 2 });

        if (person.childCount) {
            // const childCount = person.children.map(t => getChildCount(t)).reduce((acc, curr) => acc + curr);

            const treeWeight = person.treeWeight / 2;
            const cL = person.childCount;

            const quarter = (hTotalW) / 4;
            const hPathWidth = hTotalW * treeWeight;

            //parent one slanting path
            createPath(svgId, { d: `M ${(newHstart) + quarter} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight + textHeight} L ${(newHstart) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}` });

            //parent two slanting path
            createPath(svgId, { d: `M ${(newHstart) + quarter * 3} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight + textHeight} L ${(newHstart) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}` });

            const defaultVpathY = extraParams.vPathY ? extraParams.vPathHeight + hMidPt + extraParams.vPathY : extraParams.vPathHeight + hMidPt;

            // horizontal path
            cL > 1 && createPath(svgId, { d: `M ${newHstart} ${defaultVpathY} H ${(hPathWidth) + newHstart}`, stroke: `${strGreen}` })

            //looping children
            person.children.forEach((t, i) => {
                drawSvg(t, i, svgId, { hPathWidth, vPathHeight: extraParams.vPathHeight, cL, hStartPt: newHstart, vPathY: defaultVpathY, hMidPt, step: extraParams.step + 1 })
            })
        }
    } else {
        if (extraParams.cL > 1) {//path for adult
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}` });
        } else {//path for child
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY + (textHeight / 2)} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}` });
        }

        createText(nameCapitalized(person.name), svgId, { id: parentOneId, x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight + textHeight });

        //after creating text, move little backwards to middle
        const pathId = document.getElementById(parentOneId);
        const width = pathId.getClientRects()[0].width;

        const hMidPt = (width) / 2;
        const newHstart = hStartPt - hMidPt;
        setAttributesNs(pathId, { x: newHstart });
    }
}

const svg = document.getElementById('svg');
const treeStructure = document.getElementById('tree-structure');
const pickName = document.getElementById('pick-name');

pickName.addEventListener('submit', e => handleSearch(e));



const newJson = new Tree(sample);
newJson.setChildCount();
// getDomTree("iyyam perumal", 'tree-structure');
// getDomTree("soundara pandian", 'tree-structure');
// getDomTree("mani", 'tree-structure');
getDomTree("abinaya", 'tree-structure');
// getDomTree("sudaabi", 'tree-structure');
// getDomTree("sanvika", 'tree-structure');


function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = getPerson(rootName.value);
    console.log('va', person)

}