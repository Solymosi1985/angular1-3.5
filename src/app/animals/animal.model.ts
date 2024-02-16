export class Animal {
    name: string;
    type: string;
    details: string;
    imgUrl:string;
    isLoved:boolean;

    constructor(name:string, type:string, details:string, imgUrl:string, isLoved:boolean) {
        this.name=name;
        this.type=type;
        this.details=details;
        this.imgUrl=imgUrl;
        this.isLoved=isLoved;
      }
  }
  