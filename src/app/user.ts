export class User {
  constructor(public username: string,
              public location: string,
              public memberSince: Date,
              public followers: string,
              public following: string) {
  }
}
