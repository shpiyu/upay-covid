export interface DialogTable {
    id?: string,
    shop?: string,
    name?: string,
    phone?: string,
    location?: string,
    conditions?: string,
    preRequirement?: string,
    source?: string,
    verifiedAt?: string,
    verifiedBy?: string,
    oxygen?: string,
    nonOxygen?: string,
    icu?: string,
    ventilators?: string,
    availableQuanity?: string,
    cost?: string,
    bloodGroup?: string,
    covidNegativeOn?: string,
    donorVolunteer?: string,
    availableFacilities?: string,
    description?: string,
    direction?: string
}

export const ignoredFields = ['id', 'direction']