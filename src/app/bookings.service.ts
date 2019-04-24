import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookingUrl ='http://192.168.0.69:3001/api/booking';
  private movieUrl= 'http://192.168.0.69:3001/api/movies';
  constructor(private http: HttpClient) { }

  addRemoteBooking(booking):Observable<any>{
  	return this.http.post(this.bookingUrl,booking);
 }

 
 getMovieId(id):Observable<any>{
   return this.http.get<[]>(this.movieUrl+"/"+id)
 }

getRemoteBooking():Observable<[]>{
  return this.http.get<[]>(this.bookingUrl);
}

}
