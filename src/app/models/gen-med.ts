import { Resource } from './resource';

export interface GenMed extends Resource{
    shop: string,
    conditions: string,
    source: string,
    homeDelivery: string,
    verifiedAt: string,
    verifiedBy: string
}