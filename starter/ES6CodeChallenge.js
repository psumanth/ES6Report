class Parks{
    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }  
}
class Streets{
    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }
}

class Park extends Parks{
    constructor(name,buildYear,parkArea,numTrees){
        super(name,buildYear)
        this.parkArea=parkArea;
        this.numTrees=numTrees;
    }
}








