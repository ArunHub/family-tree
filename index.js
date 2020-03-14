class Person {
    hbi=9;
    constructor(isParent) {
        this.isParent = isParent;
        // this._age = 3;
        this.isLate=isLate;
        this.gender = gender;
        this.spouse = spouse;
        this.children=children;
        this.siblings=siblings;
        this.name = name;
        this.profession = profession;
        this.diedOn = diedOn;
        this.birthday=birthday;
        this.anniversary=anniversary;
        this.image=image;
    }

}


const mani = new Person(true);
console.log('hello', mani)
