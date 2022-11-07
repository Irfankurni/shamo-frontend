import { Component, OnInit } from '@angular/core';
import { ProductGalleryReq } from 'src/app/dto/product-gallery/gallery-req';
import { ProductGalleryReqData } from 'src/app/dto/product-gallery/gallery-req-data';
import { FileService } from 'src/app/service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  galleries: ProductGalleryReq = new ProductGalleryReq
  gallery: ProductGalleryReqData = new ProductGalleryReqData

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  onChangeFile(event: any): void {
    let gal: ProductGalleryReqData[] = []
    this.galleries.gallery = gal
    for (const file of event.files) {
      this.fileService.uploadAsBase64(file).then(res => {
        this.gallery.fileName = res[0]
        this.gallery.fileExtension = res[1]

        gal.push(this.gallery)
      })
    }
  }
  log(): void {
    console.log(this.galleries);
  }

}
