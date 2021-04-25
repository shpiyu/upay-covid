import { Resource } from './resource';

export interface Remdesivir extends Resource {
    shop: string,
    conditions: string,
    preRequirement: string,
    verifiedAt: string,
    verifiedBy: string
}