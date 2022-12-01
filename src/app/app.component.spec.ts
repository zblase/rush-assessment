import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';

const id = '1';
const expectedUrl = 'https://jsonplaceholder.typicode.com/photos?id=${id}';

describe('ImageService', () => {
  let httpTestingController: HttpTestingController;
  let imageService: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImageService],
    });
    imageService = TestBed.inject(ImageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('searches for photo', () => {
    imageService.getImageId(id).subscribe((photos) => {
      expect(photos.length).toEqual(1);
    });

  })
});
