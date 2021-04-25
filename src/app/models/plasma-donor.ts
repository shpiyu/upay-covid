import { Resource } from './resource';

export interface PlasmaDonor extends Resource {
    donorVolunteer: string,
    bloodGroup: string,
    covidNegativeOn: string,
    conditions: string,
    source: string,
    verifiedAt: string,
    verifiedBy: string
}