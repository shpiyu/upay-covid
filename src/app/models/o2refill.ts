import { Resource } from './resource';

export interface O2Refill extends Resource{
    description: string,
    availableQuanity: string,
    cost: string,
    conditions: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}