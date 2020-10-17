import { v4 as uuidv4 } from 'uuid';
import { Port } from "./Port";
import { Edge as EdgeInterface, ElementId } from "../../../../react-flow";

export class Edge implements EdgeInterface {
    id: string;
    source: ElementId;
    target: ElementId;

    constructor(source: Port, target: Port, id?: string){
        this.source = `${source.getNode().id}__${source.id}`;
        this.target = `${target.getNode().id}__${target.id}`;
        if(!id){
            id = 'e' + uuidv4();
        }
        this.id = id;
    }
}