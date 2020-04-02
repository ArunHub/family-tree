const sample = [
    {
        "name": "iyyamperumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "M",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        "children": ["soundarapandian", "mani", "selvakumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "iyyamperumal",
        "mother": "thangammal"
    },
    {
        "name": "thangammal",
        "spouse": "iyyamperumal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": "F",
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        "children": ["soundarapandian", "mani", "selvakumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE },
        "father": "iyyamperumal",
        "mother": "thangammal"
    },
    {
        "name": "soundarapandian",
        "gender": "M",
        "_age": 58,
        "spouse": "thulasirani",
        "children": ["sudarshan", "abinaya", 'sudaabi'],
        // "children": ["abinaya"],
        "siblings": ["mani", "selvakumar"],
        "father": "iyyamperumal",
        "mother": "thangammal"
    },
    {
        "name": "thulasirani",
        "gender": "F",
        "_age": 58,
        "spouse": "soundarapandian",
        "children": ["sudarshan", "abinaya", 'sudaabi'],
        "siblings": ["mani", "selvakumar"],
        "father": "", //TODO
        "mother": ""
    },
    {
        "name": "abinaya",
        "gender": "F",
        "_age": 28,
        "spouse": "vijayaprabhu",
        "children": ["sanvika"],
        // "children": ["sanvika", "sandy"],
        "siblings": ["sudarshan", 'sudaabi'], //TODO: remove siblings
        "father": "soundarapandian",
        "mother": "thulasirani"
    },
    {
        "name": "vijayaprabhu",
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
        "name": "mani",
        "gender": "M",
        "_age": 54,
        "spouse": "sundari",
        "children": ["arun", "preethi"],
        "siblings": ["soundarapandian", "selvakumar"],
        "father": "iyyamperumal",
        "mother": "thangammal"
    },
    {
        "name": "sundari",
        "gender": "F",
        "_age": 54,
        "spouse": "mani",
        "children": ["arun", "preethi"],
        "father": "balsamy",
        "mother": "acchi" //TODO
    },
    {
        "name": "selvakumar",
        "gender": "M",
        "_age": 48,
        "spouse": "pushparani",
        // "spouse": "",
        "children": [],
        // "children": ["rashika"],
        "children": ["rashika", "shamdeepak"],
        "siblings": ["soundarapandian", "mani"],
        "father": "iyyamperumal",
        "mother": "thangammal"
    },
    {
        "name": "pushparani",
        "gender": "F",
        "_age": 48,
        "spouse": "selvakumar",
        // "spouse": "",
        "children": ["rashika", "shamdeepak"],
        "father": "srithath",//TODO
        "mother": "sriamma"
    },
    {
        "name": "sudarshan",
        "gender": "M",
        "isParent": true,
        "spouse": "",
        "_age": 31,
        "siblings": ['abinaya', 'sudaabi'],
        "father": "soundarapandian",
        "mother": "thulasirani"
    },
    {
        "name": "sudaabi",
        "gender": "M",
        "isParent": true,
        "spouse": "vijaya",
        "children": [],
        "_age": 31,
        "siblings": ['abinaya', 'sudarshan'],
        "father": "soundarapandian",
        "mother": "thulasirani"
    },
    {
        "name": "vijaya",
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
        "name": "sanvika",
        "gender": "F",
        "spouse": "",
        "_age": 0.5,
        "siblings": [],
        "father": "vijayaprabhu",
        "mother": "abinaya",
    },
    {
        "name": "arun",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['preethi'],
        "father": "mani",
        "mother": "sundari",
    },
    {
        "name": "shamdeepak",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['rashika'],
        "father": "selvakumar",
        "mother": "pushparani",
    },
    {
        "name": "sandy",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['rashika'],
        "father": "vijayaprabhu",
        "mother": "abinaya",
    },
    {
        "name": "preethi",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["arun"],
        "father": "mani",
        "mother": "sundari",
    },
    {
        "name": "rashika",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["shamdeepak"],
        "father": "selvakumar",
        "mother": "pushparani",
    },
]

function Person(obj) {
    this.name = obj.name;
    this.gender = obj.gender === "M" ? GENDER.M : GENDER.F;
    this.image = getImage(obj.gender);
    this.spouse = obj.spouse || "";
    this.children = obj.children || [];
    this.siblings = obj.siblings;
    this.marital_status = this.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE;
    this.profession = obj.profession //private
    this.lifeSpan = obj.lifeSpan;
    this.childCount = this.children.length;
    this.father = obj.father;
    this.mother = obj.mother;
    // this.initial = getInitial(obj);
    // this.anniversary = getAnniversary(obj.anniversary);
    // this.pathId = "";
}

function Tree(array) {
    this.data = getJson(array);
}

function getJson(array) {
    let data = {};
    array.forEach(t => {
        data = Object.assign(data, { [t.name]: new Person(t) })
    })

    return data;
}

function getPerson(personName) {
    return newJson.data[personName];
}

// function setPathId(name, id) {
//     newJson.data[name].pathId = id;
// }

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

function getInitial(person) {
    return person.gender === GENDER.M ? person.father.charAt() + person.mother.charAt() : person.spouse ? person.spouse.charAt() : person.father.charAt() + person.mother.charAt();
}

function getDomTree(name, rootId) {
    const person = getPerson(name);
    if (person.spouse) {
        const p1 = document.createElement('div');
        const id = name + getInitial(person);

        setAttributes(p1, { id });
        const spanList = getSpanList(person.name, person.spouse)
        p1.appendChild(spanList);
        const parentId = document.getElementById(rootId);
        parentId.appendChild(p1);

        if (person.childCount) {

            const childCount = person.children.map(t => getChildCount(t)).reduce((acc, curr) => acc + curr);

            const treeWeight = childCount / 2;
            const cL = person.childCount;
            const currentParentID = document.getElementById(id);
            const parentWidth = Object.values(currentParentID.children).reduce((acc, curr) => acc + curr.offsetWidth, 0);
            const hTotalW = parentWidth + mL;
            const quarter = (hTotalW) / 4;
            const hMidPt = (hTotalW) / 2;


            const hPathWidth = hTotalW * treeWeight;

            const docWidth = document.defaultView.innerWidth;
            // const hStartPt = cL > 1 ? (docWidth - (hPathWidth)) / 2 : ((docWidth - (hPathWidth)) / 2) + quarter;
            const hStartPt = cL > 1 ? (docWidth - (hPathWidth)) / 2 : ((docWidth - (hTotalW)) / 2) + hMidPt;

            const svgElOne = `<svg id="svg1-${id}" xmlns="${xmlns}" version="${version}" viewBox="-8 0 ${hTotalW} ${hMidPt}" width="${hTotalW}" height="${hMidPt}"
      preserveAspectRatio="${preserveAspectRatio}">
      <path d="M ${quarter} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/> 
      <path d="M ${quarter * 3} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/>`;

            const svgElTwo = `<svg id="svg2-${id}" xmlns="${xmlns}" version="${version}" width="100%" height="100vh"
      preserveAspectRatio="${preserveAspectRatio}">
      ${cL > 1 ? `<path d="M ${hStartPt} ${strWidth} H ${(hPathWidth) + hStartPt}" stroke="${strGreen}" stroke-width="${strWidth}" /> ` : ""}
      `;
            //first horizontal path
            currentParentID.innerHTML += svgElOne;
            currentParentID.innerHTML += svgElTwo;

            // if (cL > 1) {
            //     const pathOffset = getPathList(`svg2-${id}`, hPathWidth, hMidPt, cL, strWidth);
            //     console.log('path', pathOffset);
            // }
            // person.children.forEach((t, i) => {
            //     setPathId(t, `path-svg2-${id}-${i}`);
            //     getDomTree(t, id, i + 1);
            // })

            person.children.forEach((t, i) => {
                // setPathId(t, `path-svg2-${id}-${i}`);
                drawSvg(t, i, `svg2-${id}`, { hPathWidth, vPathHeight: hMidPt, hMidPt: 0, cL, hStartPt, vPathY: 0, step: 0 });
            })
        } else {
            //TODO:he/she is waiting hehe
            //newly married/waiting for child for long according with marriage date
        }
    } else {
        const child = document.createElement('div');
        const id = name + getInitial(person);
        setAttributes(child, { id })
        child.innerHTML = name;
        document.getElementById(rootId).appendChild(child);
    }
}

function drawSvg(name, index, svgId, extraParams) {
    const person = getPerson(name);
    const vPathPosition = extraParams.cL > 1 ? extraParams.hPathWidth / (extraParams.cL - 1) : extraParams.hMidPt;
    const hStartPt = extraParams.cL > 1 ? (vPathPosition * index) + extraParams.hStartPt : vPathPosition + extraParams.hStartPt;

    const parentOneId = name + getInitial(person);
    if (person.spouse) {
        //first child vertical path
        createPath(svgId, { d: `M ${hStartPt} ${(extraParams.vPathHeight + extraParams.hMidPt) * extraParams.step} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

        //parent one
        createText(person.name, svgId, { id: parentOneId, x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });

        const pathId1 = document.getElementById(parentOneId);
        const p1Dimension = pathId1.getClientRects()[0];
        //parent two
        const parentTwoId = person.gender === GENDER.M ? person.spouse + getInitial(getPerson(person.spouse)) : person.spouse + getInitial(person);
        createText(person.spouse, svgId, { id: parentTwoId, x: (hStartPt) + p1Dimension.width, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });

        const pathId2 = document.getElementById(parentTwoId);
        const p2Width = pathId2.getClientRects()[0].width;

        const hTotalW = p1Dimension.width + p2Width;
        const hMidPt = (hTotalW) / 2;
        const newHstart = hStartPt - hMidPt;

        setAttributesNs(pathId1, { x: newHstart });
        setAttributesNs(pathId2, { x: newHstart + p1Dimension.width });

        if (person.childCount) {
            const childCount = person.children.map(t => getChildCount(t)).reduce((acc, curr) => acc + curr);

            const treeWeight = childCount / 2;
            const cL = person.childCount;

            const quarter = (hTotalW) / 4;
            const hPathWidth = hTotalW * treeWeight;

            //parent one slanting path
            createPath(svgId, { d: `M ${(newHstart) + quarter} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight} L ${(newHstart) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

            //parent two slanting path
            createPath(svgId, { d: `M ${(newHstart) + quarter * 3} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight} L ${(newHstart) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

            const defaultVpathY = extraParams.vPathY ? extraParams.vPathHeight + hMidPt + extraParams.vPathY : extraParams.vPathHeight + hMidPt;

            // horizontal path
            cL > 1 && createPath(svgId, { d: `M ${newHstart} ${defaultVpathY} H ${(hPathWidth) + newHstart}`, stroke: `${strGreen}`, strokeWidth: `${strWidth}` })

            //looping children
            person.children.forEach((t, i) => {
                drawSvg(t, i, svgId, { hPathWidth, vPathHeight: extraParams.vPathHeight, cL, hStartPt: newHstart, vPathY: defaultVpathY, hMidPt, step: extraParams.step + 1 })
            })
        }


    } else {
        if (extraParams.cL > 1) {
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });
        } else {
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });
        }

        createText(person.name, svgId, { id: parentOneId, x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });

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
getDomTree("iyyamperumal", 'tree-structure');
// getDomTree("soundarapandian", 'tree-structure');
// getDomTree("mani", 'tree-structure');
// getDomTree("abinaya", 'tree-structure');
// getDomTree("sudaabi", 'tree-structure');


function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = getPerson(rootName.value);
    console.log('va', person)

}