class Elements{
    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }  
}

class Parks extends Elements{
    constructor(name,buildYear,parkArea,numTrees){
        super(name,buildYear)
        this.parkArea=parkArea;
        this.numTrees=numTrees;
    }

    treeAge(){
	console.log(`The age of ${this.name} park is ${2018-this.buildYear}`);
    }
}

class Streets extends Elements{
    constructor(name,buildYear,length,size){
	super(name,buildYear)
	this.length=length;
	this.size=size;
    }
}

const Park1=new Parks("Anish",1986,474,1050);
const Park2=new Parks("Bandipur",1974,870,1250);
const Park3=new Parks("Bannerghatta",1987,104,400);
Park1.treeAge();
Park2.treeAge();
Park3.treeAge();







