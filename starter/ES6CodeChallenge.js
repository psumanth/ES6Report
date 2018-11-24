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
}

class Streets extends Elements{
    constructor(name,buildYear,length,size){
	super(name,buildYear)
	this.length=length;
	this.size=size;
    }
}







