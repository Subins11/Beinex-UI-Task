import { Component } from '@angular/core';

@Component({
  selector: 'app-be-global',
  templateUrl: './be-global.component.html',
  styleUrls: ['./be-global.component.scss']
})
export class BeGlobalComponent {
  countries = [
    {
      name: 'UAE - Beinex',
      address: `506, BB01, Bay Square Business Bay
              P. O. Box 82940
              Dubai United Arab Emirates
              Phone: +971 4 243 9494
              Mobile: +971 52 695 0068
              Email: Info@beinex.com`,
      flag: '../../../../assets/icons/united-arab-emirates (2).svg',
    },
    {
      name: 'Beinex - Qatar',
      address: `Global Business Centre II,
    Office No. R19, 2nd floor Al Hitmi Village, Building No 40, Cornish Road, Doha, Qatar
    P.O Box 25422
    Office: +974 44023981
    Phone: +974 50682589
    Email: info@beinex.qa`,
      flag: '../../../../assets/icons/qatar.svg',
    },
    {
      name: 'Beinex - United Kingdom',
      address: `New Broad Street House
    35 New Broad St
    London England EC2M 1NH
    Phone: +44 7539 393552
    Email: UK@beinex.com`,
      flag: '../../../../assets/icons/UK.svg',
    },
    {
      name: 'Beinex - India (Kochi)',
      address: `#19, Ground Level
    Infopark TBC, JNI Stadium
    Kaloor, Kochi
    Kerala 682017, India
    Office: +91 484 4855800
    Mobile: +91 920 7204499
    Mobile: +91 952 6451099
    Email: Info@beinex.com`,
      flag: '../../../../assets/icons/india.svg',
    },
    {
      name: 'Beinex - Kenya',
      address: `#19, Ground Level
    Infopark TBC, JNI Stadium
    Kaloor, Kochi
    Kerala 682017, India
    Office: +91 484 4855800
    Mobile: +91 920 7204499
    Mobile: +91 952 6451099
    Email: Info@beinex.com`,
      flag: '../../../../assets/icons/kenya.svg',
    },
  ];
}
