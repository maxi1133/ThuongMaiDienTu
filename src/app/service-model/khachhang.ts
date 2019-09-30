import { Dep } from "./dep";
import { Bill } from "./bill";

export class Khachhang {
  
  TK: string;
  MK: string;
  Role: string;
  IsLogIn : boolean

  IdKhachHang: string;
  Ten: string;
  SDT: string;
  DiaChi: string;
  Bill: Bill[];
  OrderList: Bill[];

  constructor(taikhoan:string, matkhau:string,role : string,islogin:boolean ,ten: string, sdt: string, dc: string) {
    this.TK= taikhoan
    this.MK = matkhau
    this.Role =role
    this.IsLogIn=islogin
    
    this.Ten = ten;
    this.SDT = sdt;
    this.DiaChi = dc;
    this.Bill = [];
    this.OrderList = [];
  }
}
