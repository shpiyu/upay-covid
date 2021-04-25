import { Resource } from './resource';

export interface Meal extends Resource{
    description: string,
    availableQuanity: string,
    cost: string,
    conditions: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}