import { Injectable, EventEmitter } from "@angular/core";
import { Dep } from "./dep";

@Injectable({
  providedIn: "root"
})
export class SanphamService {
  SanPhamChange = new EventEmitter<Dep[]>();
  constructor() {}

  ListSanPham: Dep[] = [
    new Dep(
      "Dép Adidas Adilette Shower Blue",
      "", //mô tả
      [
        [37, 25000, 0, 0],
        [38, 25000, 0, 0],
        [39, 25000, 0, 0],
        [40, 25000, 0, 0],
        [41, 25000, 0, 0]
      ],
      [
        "https://cdn.vortexs.io/api/images/2a67ff0f-15ec-4d26-a348-b558d2024c4b/1140/w/hang-chinh-hang-dep-adidas-adilette-shower-blue-2019.jpeg",
        "https://cdn.vortexs.io/api/images/46e22ac2-a45f-48d1-9660-36142524f07d/1140/w/hang-chinh-hang-dep-adidas-adilette-shower-blue-2019.jpeg",
        "https://cdn.vortexs.io/api/images/16aa2b08-326a-49ee-9b44-6e4a22f1388a/1140/w/hang-chinh-hang-dep-adidas-adilette-shower-blue-2019.jpeg",
        "https://cdn.vortexs.io/api/images/517843f8-fdfb-478f-acf2-4cf58e2d43df/1140/w/hang-chinh-hang-dep-adidas-adilette-shower-blue-2019.jpeg",
        "https://cdn.vortexs.io/api/images/517843f8-fdfb-478f-acf2-4cf58e2d43df/1140/w/hang-chinh-hang-dep-adidas-adilette-shower-blue-2019.jpeg"
      ],
      "Dép thể thao",
      "Adidas"
    ),
    new Dep(
      "Nike Benassi White/Black", //tên
      "", //mô tả
      [
        [37, 25000, 0, 0],
        [38, 25000, 0, 0],
        [39, 25000, 0, 0],
        [40, 25000, 0, 0],
        [41, 25000, 0, 0]
      ],
      [
        "https://cdn.vortexs.io/api/images/94374f05-97f1-48cf-93b0-dfc75fe37eb5/1140/w/hang-chinh-hang-dep-nike-benassi-white-black-2019.jpeg",
        "https://cdn.vortexs.io/api/images/bb3b6b14-ae61-42f8-9c8e-750ff38849da/1140/w/hang-chinh-hang-dep-nike-benassi-white-black-2019.jpeg",
        "https://cdn.vortexs.io/api/images/cbd946f1-8088-4ca4-b9f5-078466e1c1ae/1140/w/hang-chinh-hang-dep-nike-benassi-white-black-2019.jpeg",
        "https://cdn.vortexs.io/api/images/5f0febe1-f69b-470e-a38f-2e70032d8b1d/1140/w/hang-chinh-hang-dep-nike-benassi-white-black-2019.jpeg"
      ], //hình
      "Dép thể thao", //loại
      "Nike" //hãng
    ),
    new Dep(
      "Dép Đúc Adidas Adilette Aqua Slides Allblack/white", //tên
      "", //mô tả
      [
        [37, 25000, 0, 0],
        [38, 25000, 0, 0],
        [39, 25000, 0, 0],
        [40, 25000, 0, 0],
        [41, 25000, 0, 0]
      ],
      [
        "https://cdn.vortexs.io/api/images/12240bd5-91d2-47fc-b65c-ba6c24803a4a/1140/w/hang-chinh-hang-dep-duc-adidas-adilette-aqua-slides-allblack-white-2019.jpeg",
        "https://cdn.vortexs.io/api/images/08333bb0-5063-4444-b57d-2d4de0c55e7b/1140/w/hang-chinh-hang-dep-duc-adidas-adilette-aqua-slides-allblack-white-2019.jpeg",
        "https://cdn.vortexs.io/api/images/99737d82-f62c-448c-b973-27ab2fb762b2/1140/w/hang-chinh-hang-dep-duc-adidas-adilette-aqua-slides-allblack-white-2019.jpeg",
        "https://cdn.vortexs.io/api/images/d9dcfcdf-e1cf-40da-b632-5c4c151211a5/1140/w/hang-chinh-hang-dep-duc-adidas-adilette-aqua-slides-allblack-white-2019.jpeg"
      ], //hình
      "Dép thể thao", //loại
      "Adidas" //hãng
    ),
    new Dep(
      "DÉP CROCS LITERIDE BLACK/GREY/WHITE LOGO 2019", //tên
      "", //mô tả
      [
        [37, 25000, 0, 0],
        [38, 25000, 0, 0],
        [39, 25000, 0, 0],
        [40, 25000, 0, 0],
        [41, 25000, 0, 0]
      ],
      [
        "https://cdn.vortexs.io/api/images/85191436-6def-4179-8cfd-b9c52b714174/1140/w/hang-chinh-hang-dep-crocs-literide-black-grey-white-logo-2019.jpeg",
        "https://cdn.vortexs.io/api/images/9ea043d5-7851-44af-997b-5b5c2750bcd3/1140/w/hang-chinh-hang-dep-crocs-literide-black-grey-white-logo-2019.jpeg",
        "https://cdn.vortexs.io/api/images/88e8ae44-5597-466e-9cfa-5960023d36f9/1140/w/hang-chinh-hang-dep-crocs-literide-black-grey-white-logo-2019.jpeg",
        `https://cdn.vortexs.io/api/images/816adf77-1446-40ab-994a-52e26957830a/1140/w/hang-chinh-hang-dep-crocs-literide-black-grey-white-logo-2019.jpeg`
      ], //hình
      "Dép Crocs", //loại
      "Crocs" //hãng
    )
  ];


  getSanPham() {
    return this.ListSanPham.slice();
  }

  getSanPhambyID(i: number) {
    return this.ListSanPham[i];
  }

  upDateSanPham(sanpham: Dep[]) {
    this.ListSanPham = sanpham;
    this.SanPhamChange.emit(this.ListSanPham.slice());
  }
}
