export class SignUpRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
  team: string;
  organization: string;
  constructor() {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.team = null;
  }
}
