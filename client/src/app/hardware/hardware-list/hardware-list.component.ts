import { Component, OnInit } from '@angular/core';
import { HardwareApiService } from '../../service/hardware-api.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {

  Hardware: any = [];

  constructor(private hardwareApiService: HardwareApiService) { 
    this.readHardware();
  }

  ngOnInit() {
  }

  readHardware() {
    this.hardwareApiService.getHardwares().subscribe((data) => {
      this.Hardware = data;
    })
  }

}
