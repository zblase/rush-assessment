import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { ImageService } from "./image.service";
import { data } from "./test-data"

describe('ImageService', () => {
    let service: ImageService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });

        service = TestBed.inject(ImageService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return all images', () => {
        service.getImages().subscribe(result => {
            expect(result).toBeTruthy();
            expect(result.length).toBeGreaterThan(1);
        });

        const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
        expect(req.request.method).toBe('GET');
        req.flush(data);
    });

    it('should return single image', () => {
        service.getImageId('1').subscribe(result => {
            expect(result).toBeTruthy();
            expect(result.length).toBe(1);
        });

        const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos?id=1');
        expect(req.request.method).toBe('GET');
        req.flush(data.filter(i => i.id == 1));
    });

    it('should return single album', () => {
        service.getImageAlbum('1').subscribe(result => {
            expect(result).toBeTruthy();
            expect(result.length).toBeGreaterThan(0);
        });

        const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos?albumId=1');
        expect(req.request.method).toBe('GET');
        req.flush(data.filter(i => i.albumId == 1));
    });
})