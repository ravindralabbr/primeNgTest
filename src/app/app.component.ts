
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, NgControl,FormGroup, FormControl,FormsModule } from '@angular/forms';
import { CountryService } from './validation.service';
import 'rxjs/add/operator/toPromise';
import {MenuItem} from 'primeng/components/common/api';
import {SelectItem, Message} from 'primeng/primeng';

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [CountryService],
})


export class AutoCompleteDemo {

    date1: Date;

    date2: Date;

    date3: Date;

    date4: Date;

    date5: Date;

    date6: Date;
    
    date7: Date;
    
    date8: Date;
    
    date9: Date;
    
    minDate: Date;
    
    maxDate: Date;

    country: any;
    
    countries: any[];

    filteredCountriesSingle: any[];

    es: any;
    vehicle;

    msgs: Message[];
    invalidDates: Array<Date>
    cars: SelectItem[];
    types: SelectItem[];
    selectedType: string;
    selectedTypes:string[]=['Apartment', 'Studio' ];
    constructor(public countryService: CountryService){
        this.cars = [];
        this.cars.push({label:'Audi',value:'Audi'});
        this.cars.push({label:'Maruti',value:'Maruti'});
        this.cars.push({label:'Suzuki',value:'Suzuki'});
        this.cars.push({label:'Benz',value:'Benz'});
        this.cars.push({label:'Skoda',value:'Skoda'});

        this.types=[];
        this.types.push({label:'Apartment',value:'Apartment'})
        this.types.push({label:'House',value:'House'})
        this.types.push({label:'Studio',value:'Studio'})

        this.vehicle = [];
        this.vehicle = [
            {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
            {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
            {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
            {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
            {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
            {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
            {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
            {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
            {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
        ];


    }
    filterCountrySingle(event) {
    console.log('api test');
        let query = event.query;        
        // this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, this.countryService.getCountries());
        // });
    }
         filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
      clear() {
        console.log('in clear funstion')
        this.selectedType = null;
        this.selectedTypes = [];
    }
     selectCar(vehicle) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + vehicle.vin});
    }
    ngOnInit() {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
        }
        
        // this.tr = {
        //     firstDayOfWeek : 1
        // }
        
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    }
}


export class InputWsitchDemo extends AutoCompleteDemo {
    checked1 : boolean = false;
    checked2 : boolean = true;
}

export class MultiSelectDemo extends AutoCompleteDemo{
    cars: SelectItem[];
    selectedCars:string[] = [];
    
}

// export class ApiDemo extends AutoCompleteDemo{


// }

export class SelectButtonDemo extends AutoCompleteDemo{
    selectedType: string;
    selectedTypes:string[]=['Apartment', 'Studio' ];
    
    // clear() {
    //     console.log('in clear funstion')
    //     this.selectedType = null;
    //     this.selectedTypes = [];
    // }
}

export class chipsDemo extends AutoCompleteDemo{
    values1: string[];
    values2: string[];
}

export class carouseDemo extends AutoCompleteDemo{
     
   
}