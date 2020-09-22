import { Stack } from './stack';

export interface Project
{
    id : string;
    name : string;
    description : string;
    stack : Stack[];
}