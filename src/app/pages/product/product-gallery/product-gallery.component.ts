import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FindAllProductGalleryRes } from 'src/app/dto/product-gallery/find-all-gallery-res';
import { InsertProductGalleryReq } from 'src/app/dto/product-gallery/gallery-req';
import { ProductGalleryReqData } from 'src/app/dto/product-gallery/gallery-req-data';
import { BASE_URL, FileService } from 'src/app/service';
import { ProductGallerService } from 'src/app/service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css'],
  providers: [ConfirmationService]
})
export class ProductGalleryComponent implements OnInit, OnDestroy {

  galleries: InsertProductGalleryReq = new InsertProductGalleryReq
  data: FindAllProductGalleryRes = new FindAllProductGalleryRes
  gallery: ProductGalleryReqData = new ProductGalleryReqData
  deleteSubscription?: Subscription
  galleryDialog: boolean = false
  idParam!: number
  idDelete!: number
  baseUrl: string = BASE_URL

  constructor(
    private fileService: FileService,
    private activateRoute: ActivatedRoute,
    private galleryService: ProductGallerService,
    private router: Router, 
    private confirmationService: ConfirmationService
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

  openDialog(): void {
    this.galleries = new InsertProductGalleryReq
    this.galleryDialog = true
  }

  hideDialog(): void {
    this.galleryDialog = false
    this.initData(this.idParam)
  }


  onChangeFile(event: any): void {
    let gal: ProductGalleryReqData[] = []
    this.galleries.galleries = gal
    for (let i = 0; i < event.files.length; i++) {
      this.fileService.uploadAsBase64(event.files[i]).then(res => {
        const file: ProductGalleryReqData = new ProductGalleryReqData
        file.fileName = res[0]
        file.fileExtension = res[1]

        gal.push(file)
      })
    }
  }

  addPhoto(): void {
    this.galleries.productId = this.idParam
    this.galleryService.insert(this.galleries).subscribe(res => {
        this.router.navigateByUrl('/products')
    })
  }

  onDelete(id: number): void {
    this.idDelete = id
  }

  delete(): void {
    this.deleteSubscription = this.galleryService.delete(this.idDelete).subscribe(res => {
      this.initData(this.idParam)
    })
  }

  confirm(id: number) {
    this.idDelete = id
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete()
      }
    });
  }

  ngOnDestroy(): void {
   this.deleteSubscription?.unsubscribe()
  }

}
