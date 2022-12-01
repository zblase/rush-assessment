import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../image.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  //id: string | null = '';
  image?: Image;

  constructor(private route: ActivatedRoute, private imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.imageService.getImageId(id).subscribe(res => {
      console.log(res);
      this.image = res[0];
    })
  }
}
