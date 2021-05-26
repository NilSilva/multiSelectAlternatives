import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multiSelectAlternatives';
  model = '';

  countryForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  separatorKeysCodes: number[] = [ENTER, COMMA];
  countryCtrl = new FormControl();

  countries = [
    'Mexico',
    'Philippines',
    'Argentina',
    'Brazil',
    'Nigeria',
    'Barbados',
    'Croatia',
    'Tanzania',
    'Madagascar',
    'Turkmenistan',
    'Portugal',
    'Macedonia',
  ];

  selectedCountries = ['Madagascar', 'Turkmenistan', 'Portugal'];

  filteredCountries: Observable<string[]>;

  items = [
    {
      content: 'Mexico',
      selected: true,
    },
    {
      content: 'Philippines',
      selected: false,
    },
    {
      content: 'Argentina',
      selected: false,
    },
    {
      content: 'Brazil',
      selected: true,
    },
    {
      content: 'Nigeria',
      selected: false,
    },
    {
      content: 'Barbados',
      selected: false,
    },
    {
      content: 'Croatia',
      selected: false,
    },
    {
      content: 'Tanzania',
      selected: false,
    },
    {
      content: 'Madagascar',
      selected: true,
    },
    {
      content: 'Turkmenistan',
      selected: false,
    },
    {
      content: 'Portugal',
      selected: true,
    },
    {
      content: 'Macedonia',
      selected: false,
    },
    {
      content: 'Kazakhstan',
      selected: true,
    },
    {
      content: 'Colombia',
      selected: true,
    },
    {
      content: 'Panama',
      selected: true,
    },
    {
      content: 'North Korea',
      selected: true,
    },
    {
      content: 'Taiwan',
      selected: true,
    },
    {
      content: 'Albania',
      selected: false,
    },
    {
      content: 'Malawi',
      selected: true,
    },
    {
      content: 'Swaziland',
      selected: true,
    },
    {
      content: 'Poland',
      selected: false,
    },
    {
      content: 'Canada',
      selected: true,
    },
    {
      content: 'United States',
      selected: false,
    },
    {
      content: 'Greece',
      selected: true,
    },
    {
      content: 'Venezuela',
      selected: false,
    },
    {
      content: 'Lebanon',
      selected: false,
    },
    {
      content: 'Yemen',
      selected: true,
    },
    {
      content: 'Morocco',
      selected: true,
    },
    {
      content: 'Pakistan',
      selected: false,
    },
    {
      content: 'Botswana',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: true,
    },
    {
      content: 'Japan',
      selected: false,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Sweden',
      selected: false,
    },
    {
      content: 'Russia',
      selected: true,
    },
    {
      content: 'Malaysia',
      selected: true,
    },
  ];

  @ViewChild('countryInput') countryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  updateSelected(event: any) {}

  selectChange(event: any) {
    this.selectedCountries.push(event)
    this.countryForm.controls['name'].setValue('default');
  }

  constructor() {
    this.filteredCountries = this.countryCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.countries.slice()));
  }

  teste(event: any) {
    console.log('remove - ' + event);
    let index = this.selectedCountries.indexOf(event);

    if (index >= 0) {
      this.selectedCountries.splice(index, 1);
    }
    this.countryForm.controls['name'].setValue('default');
  }

  remove(country: any): void {
    let index = this.selectedCountries.indexOf(country);

    if (index >= 0) {
      this.selectedCountries.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.items.push({
        content: value,
        selected: true,
      });
    }

    // Clear the input value
    event.chipInput!.clear();

    this.countryForm.controls['name'].setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCountries.push(event.option.viewValue);
    this.countryInput.nativeElement.value = '';
    this.countryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.toLowerCase().indexOf(filterValue) === 0);
  }
}
