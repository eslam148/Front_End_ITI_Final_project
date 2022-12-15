export interface IUser {
  success: boolean;
  message: String;
  data: IUserInfo;
  token: String;
}

export interface IUserInfo {
  id: String;
  firstName: String;
  lastName: String;
  profileImage: String;
  email: String;
  phoneNumber: String;
  roles: [];
  expires: Date;
}
export interface IChangePassword{
  id: string,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
}

export interface IUserLogIn {
  userName: String;
  password: String;
  rememberMe: boolean;
  returnUrl: String;
}

export interface IUserRegister {
  id?:string;
  firstName: String;
  lastName: String;
  userName: String;
  email: String;
  phoneNumber: String;
  password: String;
  confirmPassword: String;
}
