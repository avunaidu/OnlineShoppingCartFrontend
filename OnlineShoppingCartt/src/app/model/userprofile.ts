export class UserProfile {
    profileId!: number;
    fullName!: string;
    emailId!: string;
    mobileNumber!: number;
    dateOfBirth!: Date;
    gender!: Address;
}
  export class Address {
    houseNumber!: number;
    streetName!: string;
    colonyName!: string;
    city!: string;
    state!: string;
    pincode!: number;
  }