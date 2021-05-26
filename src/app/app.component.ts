import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multiSelectAlternatives';

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
      content: 'Argentina',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Philippines',
      selected: true,
    },
    {
      content: 'Brazil',
      selected: true,
    },
    {
      content: 'China',
      selected: false,
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
      content: 'Brazil',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'Brazil',
      selected: true,
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
      content: 'Brazil',
      selected: true,
    },
    {
      content: 'Portugal',
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
      content: 'Greece',
      selected: false,
    },
    {
      content: 'Madagascar',
      selected: true,
    },
    {
      content: 'Kazakhstan',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'Colombia',
      selected: true,
    },
    {
      content: 'United States',
      selected: true,
    },
    {
      content: 'Philippines',
      selected: false,
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
      content: 'Japan',
      selected: true,
    },
    {
      content: 'Portugal',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: false,
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
      content: 'Philippines',
      selected: true,
    },
    {
      content: 'Malawi',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'China',
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
      content: 'Philippines',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'United States',
      selected: false,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Greece',
      selected: true,
    },
    {
      content: 'Brazil',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: true,
    },
    {
      content: 'Brazil',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: true,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Mexico',
      selected: false,
    },
    {
      content: 'China',
      selected: false,
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
      content: 'Portugal',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Yemen',
      selected: true,
    },
    {
      content: 'China',
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
      content: 'China',
      selected: true,
    },
    {
      content: 'Macedonia',
      selected: true,
    },
    {
      content: 'Croatia',
      selected: false,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Botswana',
      selected: true,
    },
    {
      content: 'Colombia',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Portugal',
      selected: false,
    },
    {
      content: 'Greece',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: true,
    },
    {
      content: 'Brazil',
      selected: false,
    },
    {
      content: 'China',
      selected: false,
    },
    {
      content: 'Japan',
      selected: true,
    },
    {
      content: 'Poland',
      selected: false,
    },
    {
      content: 'Russia',
      selected: true,
    },
    {
      content: 'United States',
      selected: true,
    },
    {
      content: 'China',
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
      content: 'China',
      selected: true,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Sweden',
      selected: false,
    },
    {
      content: 'China',
      selected: true,
    },
    {
      content: 'Indonesia',
      selected: false,
    },
    {
      content: 'Indonesia',
      selected: true,
    },
    {
      content: 'Canada',
      selected: false,
    },
    {
      content: 'Philippines',
      selected: true,
    },
    {
      content: 'Tanzania',
      selected: true,
    },
    {
      content: 'Russia',
      selected: true,
    },
    {
      content: 'Malaysia',
      selected: true,
    },
    {
      content: 'Poland',
      selected: false,
    },
  ];

  updateSelected(event: any) {
    console.log(event);
  }
}
