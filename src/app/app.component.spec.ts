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