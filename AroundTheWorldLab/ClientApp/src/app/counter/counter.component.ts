import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
  public countries: Country[] = [
    { name: "Egypt", officialLanguage: "Arabic", primaryColor: "red" },
    { name: "Mexico", officialLanguage: "Spanish", primaryColor: "green" },
    { name: "Brazil", officialLanguage: "Portugese", primaryColor: "blue" },
    { name: "Italy", officialLanguage: "Italian", primaryColor: "purple" },
    { name: "Netherlands", officialLanguage: "Dutch", primaryColor: "yellow" },
  ]
  public OnClickedChangeCountry(): void
  {
    let countryFromUser: string|null = '';
    countryFromUser = prompt('Please enter the name of a country');
    let foundCountry: Country | null = null;
    for (let currCountry = 0; currCountry < this.countries.length; currCountry++)
    {
      if (countryFromUser == this.countries[currCountry].name) {
        foundCountry = this.countries[currCountry];
        break;
      }
    }
    let foundCountryName = document.getElementById("CountryName");
    foundCountryName!.innerText = foundCountry?.name;
   
    let foundCountryLanguage = document.getElementById("CountryOfficialLanguage");
    foundCountryLanguage!.innerText = foundCountry?.officialLanguage;

    let newColorString = "color:" + foundCountry?.primaryColor;
    foundCountryName.setAttribute("style", newColorString);

    foundCountryLanguage.setAttribute("style", newColorString);
  }
}

export class Country {
  public name: string = '';
  public officialLanguage: string = '';
  public primaryColor: string = '';

}
