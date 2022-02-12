import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SignInForm';
import {JwtReponse} from '../model/JwtReponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Khai báo biến API_LOCAL
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  // Muốn liên kết với nhau p thông qua HttpClient của Angular mới gọi đc các method của FE để ghép nối
  constructor(private http: HttpClient) { }
  // Trước khi triển khai ta p có Model(SignUpForm) để hứng dữ liệu (qua kiểu Json), FE hứng giống hệt BE.
  // BE chỗ SignUpForm trong dto
  // Observable như 1 hàng chờ, chờ dữ liệu của BE chui vào đây, sau khi truy xuất qua phương thức ... thì nó mới truy xuất ra
  // sau đây tiêm service này sang component, thì mới giao tiếp đc với nhau
  singUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<JwtReponse>{
    return this.http.post<JwtReponse>(this.API_SIGNIN, signInForm);
  }

}
