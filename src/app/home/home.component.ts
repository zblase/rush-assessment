import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Image } from '../image.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Image[] = [];
  albums: string[] = [];
  orders: string[] = ['Id', 'Title'];

  headerForm: FormGroup = this.formBuilder.group({
    album: '1',
    order: 'Id'
  });

  constructor(private imageService: ImageService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(res => {
      this.images = res.filter(i => i.albumId == '1');
      this.albums = [...new Set(res.map(i => i.albumId))];
    });
  }

  getAlbum(id: string) {
    this.imageService.getImageAlbum(id).subscribe(res => {
      this.images = res;
      this.orderList(this.headerForm.get('order')!.value);
    });
  }

  orderList(order: string) {
    this.images.sort((a, b) => (a[order.toLowerCase() as keyof typeof Image] > b[order.toLowerCase() as keyof typeof Image]) ? 1 : ((b[order.toLowerCase() as keyof typeof Image] > a[order.toLowerCase() as keyof typeof Image]) ? -1 : 0));
  }

  compareFn(obj1: any, obj2: any) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }
}
