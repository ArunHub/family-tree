const sample = [
    {
        "fname": "iyyam",
        "lname": "perumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
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
        // "children": ["sanvika"],
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
    if (person.spouse) {
        const p1 = document.createElement('div');
        const id = (person.fname + person.lname) + "-" + getInitial(person);

        setAttributes(p1, { id });
        const spanList = getSpanList(nameCapitalized(person.name), nameCapitalized(person.spouse));
        p1.appendChild(spanList);
        const parentId = document.getElementById(rootId);
        parentId.appendChild(p1);

        if (person.childCount) {

            // const childCount = person.children.map(t => getChildCount(t)).reduce((acc, curr) => acc + curr);

            const treeWeight = person.treeWeight / 2;
            const cL = person.childCount;
            const currentParentID = document.getElementById(id);
            const parentWidth = Object.values(currentParentID.children).reduce((acc, curr) => acc + curr.offsetWidth, 0);
            const hTotalW = parentWidth + mL;
            const quarter = (hTotalW) / 4;
            const hMidPt = (hTotalW) / 2;


            const hPathWidth = hTotalW * treeWeight;

            const docWidth = document.defaultView.innerWidth;
            const hStartPt = cL > 1 ? (docWidth - (hPathWidth)) / 2 : ((docWidth - (hTotalW)) / 2) + hMidPt;

            const svgElOne = `<svg id="svg1-${id}" xmlns="${xmlns}" version="${version}" viewBox="-8 0 ${hTotalW} ${hMidPt}" width="${hTotalW}" height="${hMidPt}"
      preserveAspectRatio="${preserveAspectRatio}">
        <defs>
            
        </defs>
      <path d="M ${quarter} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/> 
      <path d="M ${quarter * 3} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/>
      `;
            //   <path d="M0,0 L2,4 4,0 Z" />


            const svgElTwo = `<svg id="svg2-${id}" xmlns="${xmlns}" version="${version}" width="100%" height="100vh"
      preserveAspectRatio="${preserveAspectRatio}">
      ${cL > 1 ? `<path d="M ${hStartPt} ${strWidth} H ${(hPathWidth) + hStartPt}" stroke="${strGreen}" stroke-width="${strWidth}" /> ` : ""}
      `;
            //first horizontal path
            currentParentID.innerHTML += svgElOne;
            currentParentID.innerHTML += svgElTwo;

            person.children.forEach((t, i) => {
                drawSvg(t, i, `svg2-${id}`, { hPathWidth, vPathHeight: hMidPt, hMidPt: 0, cL, hStartPt, vPathY: 0, step: 0 });
            })
        } else {
            //TODO:he/she is waiting hehe
            //newly married/waiting for child for long according with marriage date
        }
    } else {
        const child = document.createElement('div');
        const id = (person.fname + person.lname) + "-" + getInitial(person);
        setAttributes(child, { id })
        child.innerHTML = name;
        document.getElementById(rootId).appendChild(child);
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
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY + textHeight / 2} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}` });
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
getDomTree("iyyam perumal", 'tree-structure');
// getDomTree("soundara pandian", 'tree-structure');
// getDomTree("mani", 'tree-structure');
// getDomTree("abinaya", 'tree-structure');
// getDomTree("sudaabi", 'tree-structure');


function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = getPerson(rootName.value);
    console.log('va', person)

}