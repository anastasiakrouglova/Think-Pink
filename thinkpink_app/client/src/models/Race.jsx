import uuid from "uuid";
import { decorate, action, observable, computed } from "mobx";

class Race {
  constructor(city, country, month, date, year, startLocation, startTime, description, sponsors, id = uuid.v4()) {
    this.id = id;
    this.city = city;
    this.country = country;
    this.month = month;
    this.date = date;
    this.year = year;
    this.startLocation = startLocation;
    this.startTime = startTime;
    this.description = description;
    this.sponsors = sponsors;
  }

    setId = value => (this.id = value);
    setCity = value => (this.city = value);
    setCountry = value => (this.country = value);
    setMonth = value => (this.month = value);
    setDate = value => (this.date = value);
    setYear = value => (this.year = value);
    setStartLocation = value => (this.startLocation = value);
    setStartTime = value => (this.startTime = value);
    setDescription = value => (this.description = value);
    setSponsors = value => (this.sponsors = value);

  updateFromServer = values => {
    if (values._id) {
      this.setId(values._id)
    }
      
    this.setCity (values.city);
    this.setCountry (values.country);
    this.setMonth (values.month);
    this.setDate (values.date);
    this.setYear (values.year);
    this.setStartLocation (values.startLocation);
    this.setStartTime (values.startTime);
    this.setDescription (values.description);
    this.setSponsors (values.sponsors);
  };

//   get values() {
//     return {product: this.product, prijs: this.prijs, persoon: this.persoon };
//   }

//   get totaal() {
//     return this.prijs;
//   }
}

decorate(Race, {
    id: observable,
    city: observable,
    country: observable,
    month: observable,
    date: observable,
    year: observable,
    startLocation: observable,
    startTime: observable,
    description: observable,
    sponsors: observable
//   values: computed,
//   totaal: computed,
//   setId: action,
//   setProduct: action,
//   setPrijs: action,
//   setPersoon: action
})

export default (Race);