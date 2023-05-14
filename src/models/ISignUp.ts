export interface ISignUp {
  "username": string,
  "firstname": string,
  "lastname": string,
  "email": string,
  "password": string,
  "roles": [
    {
      "id": number,
      "name": string
    }
  ]
}