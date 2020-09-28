import { Stack } from './stack';

export interface Project
{
    id : string;
    logo : string;
    name : string;
    description : string;
    stack : Stack[];
}

export class ProjectRow
{
    constructor(public position:number, public projects: Project[]) { }
}