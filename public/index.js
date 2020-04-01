const sample = [
    {
        "name": "iyyamperumal",
        "spouse": "thangammal",
        "marital_status": MARITAL_STATUS.MARRIED,
        "gender": GENDER.M,
        "_age": 68,
        "lifeSpan": { bornOn: "01-01-1940" },
        "children": ["soundarapandian", "mani", "selvakumar"],
        "anniversary": { type: ANNIVERSARY_TYPE.MARRIAGE }
    },
    {
        "name": "soundarapandian",
        "gender": "M",
        "_age": 58,
        "spouse": "thulasirani",
        "children": ["sudarshan", "abinaya", 'sudaabi'],
        "siblings": ["mani", "selvakumar"]
    },
    {
        "name": "abinaya",
        "gender": "F",
        "_age": 28,
        "spouse": "vijayaprabhu",
        "children": ["sanvika"],
        "siblings": ["sudarshan", 'sudaabi']
    },
    {
        "name": "vijayaprabhu",
        "gender": "M",
        "isParent": true,
        "spouse": "abinaya",
        "_age": 31,
        "children": ["sanvika"],
        "siblings": []
    },
    {
        "name": "mani",
        "gender": "M",
        "_age": 54,
        "spouse": "sundari",
        "children": ["arun", "preethi"],
        "siblings": ["soundarapandian", "selvakumar"]
    },
    {
        "name": "selvakumar",
        "gender": "M",
        "_age": 48,
        "spouse": "pushparani",
        "children": ["rashika",],
        "siblings": ["soundarapandian", "mani"]
    },
    {
        "name": "sudarshan",
        "gender": "M",
        "isParent": true,
        "spouse": "",
        "_age": 31,
        "siblings": ['abinaya', 'sudaabi']
    },
    {
        "name": "sudaabi",
        "gender": "M",
        "isParent": true,
        "spouse": "vijaya",
        "_age": 31,
        "siblings": ['abinaya', 'sudarshan']
    },
    {
        "name": "vijaya",
        "gender": "F",
        "isParent": true,
        "spouse": "sudaabi",
        "_age": 31,
        "children": [],
        "siblings": []
    },
    {
        "name": "sanvika",
        "gender": "F",
        "spouse": "",
        "_age": 0.5,
        "siblings": []
    },
    {
        "name": "arun",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['preethi']
    },
    {
        "name": "shamdeepak",
        "gender": "M",
        "spouse": "",
        "_age": 31,
        "siblings": ['rashika']
    },
    {
        "name": "preethi",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["arun"]
    },
    {
        "name": "rashika",
        "gender": "F",
        "_age": 28,
        "spouse": "",
        "children": [],
        "siblings": ["shamdeepak"]
    },
]

function Person(obj) {
    this.name = obj.name;
    this.gender = obj.gender;
    this.image = getImage(obj.gender);
    this.spouse = obj.spouse || "";
    this.children = obj.children || [];
    this.siblings = obj.siblings;
    this.marital_status = this.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE;
    this.profession = obj.profession //private
    this.lifeSpan = obj.lifeSpan;
    this.childCount = this.children.length;
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

function getDomTree(name, rootId, level = 0) {
    const person = getPerson(name);
    if (person.spouse) {
        const p1 = document.createElement('div');
        const id = name + '-tree-' + level;
        // if (level > 0) {
        //     const pathElem = document.getElementById(person.pathId);
        //     const position = pathElem.getClientRects();
        //     const { left, top, height } = position[0];
        //     setAttributes(p1, { id, left, top, height });
        // }
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
            const hStartPt = (docWidth - (hPathWidth)) / 2;

            const svgElOne = `<svg id="svg1-${id}" class="svg-${id}" xmlns="${xmlns}" version="${version}" viewBox="-8 0 ${hTotalW} ${hMidPt}" width="${hTotalW}" height="${hMidPt}"
      preserveAspectRatio="${preserveAspectRatio}">
      <path d="M ${quarter} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/> 
      <path d="M ${quarter * 3} 0 L ${hMidPt} ${hMidPt}" stroke="${strOrange}" stroke-width="${strWidth}"/>`;

            const svgElTwo = `<svg id="svg2-${id}" class="svg-${id}" xmlns="${xmlns}" version="${version}" width="100%" height="100vh"
      preserveAspectRatio="${preserveAspectRatio}">
      ${cL > 1 ? `<path d="M ${hStartPt} ${strWidth} H ${(hPathWidth) + hStartPt}" stroke="${strGreen}" stroke-width="${strWidth}" /> ` : ""}
      `;
            //first horizontal path or TODO: single child vertical path
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
                drawSvg(t, i, `svg2-${id}`, { hPathWidth, vPathHeight: hMidPt, hMidPt, cL, hStartPt, vPathY: 0, step: 0 });
            })
        } else {
            //TODO:he/she is waiting hehe
            //newly married/waiting for child for long according with marriage date
        }
    } else {
        const child = document.createElement('div');
        const id = name + '-tree-' + level;
        setAttributes(child, { id })
        child.innerHTML = name;
        document.getElementById(rootId).appendChild(child);
    }
}

function drawSvg(name, index, svgId, extraParams) {
    const person = getPerson(name);
    const vPathPosition = extraParams.cL > 1 ? extraParams.hPathWidth / (extraParams.cL - 1) : extraParams.hMidPt;
    const hStartPt = extraParams.cL > 1 ? (vPathPosition * index) + extraParams.hStartPt : vPathPosition + extraParams.hStartPt;

    if (person.spouse) {
        //first child vertical path
        createPath(svgId, { d: `M ${hStartPt} ${(extraParams.vPathHeight + extraParams.hMidPt) * extraParams.step} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

        //parent one
        createText(person.name, svgId, { id: name + "-path", x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });

        const pathId1 = document.getElementById(`${name}-path`);
        const p1Dimension = pathId1.getClientRects()[0];
        //parent two
        createText(person.spouse, svgId, { id: person.spouse + "-path", x: (hStartPt) + p1Dimension.width, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });

        if (person.childCount) {
            const pathId2 = document.getElementById(`${person.spouse}-path`);
            const p2Width = pathId2.getClientRects()[0].width;
            const childCount = person.children.map(t => getChildCount(t)).reduce((acc, curr) => acc + curr);

            const treeWeight = childCount / 2;
            const cL = person.childCount;

            const hTotalW = p1Dimension.width + p2Width;
            const quarter = (hTotalW) / 4;
            const hMidPt = (hTotalW) / 2;
            const hPathWidth = hTotalW * treeWeight;

            // createSvg(svgId, { id: `svg1-${name}`, viewBox: `${-quarter} ${-vPathHeight} ${hMidPt} ${hMidPt}`, width: hMidPt, height: hMidPt});
            // createPath(`svg1-${name}`, { d: `M 0 0 L ${quarter} ${quarter}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` })

            //parent one slanting path
            createPath(svgId, { d: `M ${(hStartPt) + quarter} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight} L ${(hStartPt) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

            //parent two slanting path
            createPath(svgId, { d: `M ${(hStartPt) + quarter * 3} ${((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight} L ${(hStartPt) + hMidPt} ${hMidPt + ((extraParams.vPathHeight * 2) * extraParams.step) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });

            // horizontal path
            cL > 1 && createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathHeight + hMidPt} H ${(hPathWidth) + hStartPt}`, stroke: `${strGreen}`, strokeWidth: `${strWidth}` }) //TODO: second level

            // `${
            //     cL > 1 ?

            //         createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathHeight + hMidPt} H ${(hPathWidth) + hStartPt}`, stroke: `${strGreen}`, strokeWidth: `${strWidth}` })

            //         :
            //         // null
            //     createPath(svgId, { d: `M ${hStartPt + hMidPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step))} L ${hMidPt}`, stroke: `${strGreen}`, strokeWidth: `${strWidth}` })
            //     }`

            person.children.forEach((t, i) => {
                drawSvg(t, i, svgId, { hPathWidth, vPathHeight: extraParams.vPathHeight, cL, hStartPt, vPathY: extraParams.vPathHeight + hMidPt + extraParams.vPathY, hMidPt, step: extraParams.step + 1 })
            })
        }


    } else {
        if (extraParams.cL > 1) {
            createPath(svgId, { d: `M ${hStartPt} ${(extraParams.vPathHeight + extraParams.hMidPt) * extraParams.step} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });
        } else {//extraParams.vPathHeight * 3 + midpt
            createPath(svgId, { d: `M ${hStartPt} ${extraParams.vPathY} L ${hStartPt} ${((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight}`, stroke: `${strOrange}`, strokeWidth: `${strWidth}` });
        }

        createText(person.name, svgId, { id: name + "-path", x: hStartPt, y: ((extraParams.vPathHeight + extraParams.hMidPt) * (extraParams.step)) + extraParams.vPathHeight });
    }
}

const svg = document.getElementById('svg');
const treeStructure = document.getElementById('tree-structure');
const pickName = document.getElementById('pick-name');

pickName.addEventListener('submit', e => handleSearch(e));



const newJson = new Tree(sample);
getDomTree("iyyamperumal", 'tree-structure');




function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = getPerson(rootName.value);
    console.log('va', person)

}