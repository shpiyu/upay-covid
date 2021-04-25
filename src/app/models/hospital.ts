import { Resource } from './resource';

export interface Hospital extends Resource{
    poc: string,
    oxygen: string,
    nonOxygen: string,
    icu: string,
    ventilators: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}