import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'Vu',
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212836222_349167693320996_4104300366066468988_n.png?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_ohc=wOPdpG9APJYAX_uScDg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=69c156dc6a703bb1e3ff2480d87e1d41&oe=60F5AB19'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
