export interface BiitLoginServiceSupport {
  checkUserName(userName: string): Promise<boolean>;
}
