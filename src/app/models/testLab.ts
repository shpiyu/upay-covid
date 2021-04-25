import { Resource } from './resource';

export interface TestLab extends Resource {
    description: string,
    availableFacilities: string,
    cost: string,
    conditions: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}