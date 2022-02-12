import { Injectable } from '@angular/core';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const ROLE_KEY = 'Role_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor() { }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name: string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string{
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setRole(role: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }
  public getRole(): string[]{
    this.roles = [];
    // nếu có Token
    if (sessionStorage.getItem(TOKEN_KEY)){
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        // push role này vào role bên trên khởi tạo ra, show ra thằng admin ở bên trong
        this.roles.push(role.authority);
      });
    }
    return this.roles;
  }
  public logOut(){
    window.sessionStorage.clear();
    window.location.reload();
  }
}
