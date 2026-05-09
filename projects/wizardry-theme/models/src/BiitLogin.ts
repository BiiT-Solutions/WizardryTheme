export class BiitLogin {
  username: string;
  password: string;
  remember: boolean;

  constructor(username?: string, password?: string, remember?: boolean) {
    if (username){
      this.username = username;
    }
    if (password) {
      this.password = password;
    }
    if (remember) {
      this.remember = remember;
    }
  }

}
