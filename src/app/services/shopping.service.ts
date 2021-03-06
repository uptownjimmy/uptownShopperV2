import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {Item} from '../components/item/item.model';

@Injectable()
export class ShoppingService {
    private getURL;
    private shoppingItems: Item[] = [];
    public shoppingItemListChanged = new Subject<Item[]>();
    private loading = false;

    constructor(
        private http: HttpClient,
        private toastr: ToastrService
    ) {
        this.getURL = 'http://localhost:5000/api/item';
    }


}
