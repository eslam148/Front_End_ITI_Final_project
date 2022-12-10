export interface IUser {
  success: boolean;
  message: String;
  data: {
    id: String;
    firstName: String;
    lastName: String;
    profileImage: String;
    email: String;
    roles: [];
  },
  token: String;
}


export interface IUserLogIn {
  userName: String;
  password: String;
  rememberMe: boolean;
  returnUrl: String;
}

export interface IUserRegister {
  firstName: String;
  lastName: String;
  userName: String;
  email: String;
  phoneNumber: String;
  password: String;
  confirmPassword: String;
}

