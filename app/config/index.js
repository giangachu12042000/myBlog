export const apiEndpoint = process.env.NODE_ENV === "production" ? "" : "http://localhost:3333";

export const title = "NoiThatK2";
export const AUTH = {
  appFacebookId:"1775319475932443",
  clientIdGoogle: ""
}; 
export const ApiUploadImage = `${apiEndpoint}/api/upload/image`;
export const ApiUploadFile = `${apiEndpoint}/api/upload/file`;
export const URL_ROOT = `${apiEndpoint}/images/files/`;

 