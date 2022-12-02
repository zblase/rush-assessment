import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const id = '1';
const expectedUrl = 'https://jsonplaceholder.typicode.com/photos?id=${id}';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule, AppRoutingModule]
    });
  });

  it('should create the app', async() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

/*
describe('ImageService', () => {
  let httpTestingController: HttpTestingController;
  let imageService: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
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

  });
});


describe('AppComponent', () => {
  let http: HttpClient;
  let httpTestingController: HttpTestingController;
  let imageService: ImageService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ImageService]
    }).compileComponents();

    imageService = TestBed.inject(ImageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rush-assessment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rush-assessment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rush-assessment app is running!');
  });
});
*/