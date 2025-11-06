export class SignUpRequest {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  team: string;
  organization: string;
  constructor() {
    this.name = '';
    this.lastname = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.team = null;
  }
}
