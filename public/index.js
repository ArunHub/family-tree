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
        "children": ["rashika", "shamdeepak"],
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
    this.marital_status = obj.spouse ? MARITAL_STATUS.MARRIED : obj.marital_status ? obj.marital_status : MARITAL_STATUS.SINGLE;
    this.profession = obj.profession //private
    this.lifeSpan = obj.lifeSpan;
    // this.anniversary = getAnniversary(obj.anniversary);
}

function Tree() {
    this.data = {};
    this.level = 0;
    this.rootId = "tree-structure";
}

function Search(person) {
    this.person = person;
}

Tree.prototype.getJson = function (array) {
    let data = {};
    array.forEach(t => {
        data = Object.assign(this.data, { [t.name]: new Person(t) })
    })

    this.data = data;
}

Tree.prototype.getPerson = function (personName) {
    return this.data[personName];
}

Tree.prototype.getDomTree = function (name, rootId, level = 0) {
    const person = this.getPerson(name);
    if (person.spouse) {
        const p1 = document.createElement('div');
        const id = name + '-tree-' + level;
        setAttributes(p1, { id });
        const spanList = getSpanList(person.name, person.spouse)
        p1.appendChild(spanList);
        const parentId = document.getElementById(rootId);
        parentId.appendChild(p1);

        if (person.children && person.children.length) {
            const cL = person.children.length;
            const currentParentID = document.getElementById(id);
            const pWidth = Object.values(currentParentID.children).reduce((acc, curr) => acc + curr.offsetWidth, 0);
            const mL = 10;
            const totalW = pWidth + mL;
            const parts = (totalW) / 4;
            const midPt = (totalW) / 2;
            const strWidth = 2
            console.log('totalW', cL);

            const svgElOne = `<svg id="svg1-${id}" class="svg-${id}" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${totalW} ${midPt}" width="${totalW}" height="${midPt}"
      preserveAspectRatio="xMidYMid meet">
      <path d="M ${parts} 0 L ${midPt} ${midPt}" stroke="orange" stroke-width="${strWidth}"/> 
      <path d="M ${parts * 3} 0 L ${midPt} ${midPt}" stroke="orange" stroke-width="${strWidth}"/>`;

            const svgElTwo = `<svg id="svg2-${id}" class="svg-${id}" xmlns="http://www.w3.org/2000/svg" version="1.1"        viewBox="0 0 ${totalW * cL} ${midPt}" width="${totalW * cL}" height="${midPt}"
      preserveAspectRatio="xMidYMid meet">
      ${cL > 1 ? `<path d="M 0 ${strWidth} H ${totalW * cL}" stroke="green" stroke-width="${strWidth}" /> ` : `<path d="M ${midPt} ${strWidth} V ${midPt}" stroke="green" stroke-width="${strWidth}" />`}
      `;

            currentParentID.innerHTML += svgElOne;
            currentParentID.innerHTML += svgElTwo;
            (cL > 1) && getPathList(`svg2-${id}`, totalW * cL, midPt, cL, strWidth);
            person.children.forEach((t, i) => {
                this.getDomTree(t, id, i + 1);
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

const svg = document.getElementById('svg');
const treeStructure = document.getElementById('tree-structure');
const pickName = document.getElementById('pick-name');

pickName.addEventListener('submit', e => handleSearch(e));



const newJson = new Tree();
newJson.getJson(sample);
newJson.getDomTree("iyyamperumal", 'tree-structure');




function handleSearch(e) {
    e.preventDefault();
    const rootName = document.getElementById('root-name');
    const person = newJson.getPerson(rootName.value);
    console.log('va', person)

}