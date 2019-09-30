import { Dep } from "./dep";

export class Bill {
  IdBill: string;
  SanPham: Dep[];
  TongTien: number;
  NgayXuat: Date;
  Status: string;

  constructor(sanpham: Dep[], ngayxuat: Date) {
    this.SanPham = sanpham;
    this.NgayXuat = ngayxuat;
  }
}
