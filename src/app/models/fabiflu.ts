import { Resource } from './resource';

export interface Fabiflu extends Resource{
    shop: string,
    conditions: string,
    preRequirement: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}