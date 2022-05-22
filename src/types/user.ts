type AddressGeolocation = {
  lat: string;
  lng: string;
};

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeolocation;
};

type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};
