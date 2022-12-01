import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { Image } from './image.model'

@Injectable({providedIn: 'root'})
export class ImageService {

    constructor(private http: HttpClient) {

    }

    getImages() {
        return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos');
    }

    getImageId(id: string) {
        return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos?id=' + id);
    }

    getImageAlbum(id: string) {
        return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + id);
    }
}