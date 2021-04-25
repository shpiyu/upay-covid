export interface Helpline {
  name: string;
  contactNumber: string;
  address: string;
  lastVerified: Date;
}

export const defaulHelpline: Helpline = {
  name: 'NA',
  contactNumber: 'xxxxxxxxxx',
  //address: 'Flat No, Street name, Locality, City12345',
  address: 'NA',
  lastVerified: new Date(),
};
