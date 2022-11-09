import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllProductGalleryRes } from 'src/app/dto/product-gallery/find-all-gallery-res';
import { InsertProductGalleryReq } from 'src/app/dto/product-gallery/gallery-req';
import { ProductGalleryReqData } from 'src/app/dto/product-gallery/gallery-req-data';
import { FileService } from 'src/app/service';
import { ProductGallerService } from 'src/app/service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  idParam!: number
  galleries: InsertProductGalleryReq = new InsertProductGalleryReq
  gallery: ProductGalleryReqData = new ProductGalleryReqData
  data: FindAllProductGalleryRes = new FindAllProductGalleryRes

  constructor(
    private fileService: FileService,
    private activateRoute: ActivatedRoute,
    private galleryService: ProductGallerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      const resultTemp: any = res
      this.idParam = resultTemp.id

      this.initData(this.idParam)
    })
  }

  initData(productId: number): void {
    this.galleryService.findAllByProduct(productId).subscribe(res => {
      this.data = res
    })
  }

  onChangeFile(event: any): void {
    let gal: ProductGalleryReqData[] = []
    this.galleries.galleries = gal
    for (const file of event.files) {
      this.fileService.uploadAsBase64(file).then(res => {
        this.gallery.fileName = res[0]
        this.gallery.fileExtension = res[1]

        gal.push(this.gallery)
      })
    }
  }

  addPhoto(): void {
    this.galleries.productId = this.idParam
    this.galleryService.insert(this.galleries).subscribe(res => {
        this.router.navigateByUrl('/products')
    })
  }

}
