export interface ILogin {
  "username": string,
  "password": string
};

export interface ILoginResult {
  "id": number,
  "username": string,
  "email": string
  "roles": [],
  "accessToken": string,
  "tokenType": string
}