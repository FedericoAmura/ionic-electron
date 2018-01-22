import { Injectable } from '@angular/core';
import * as electron from 'electron';

/*
  Generated class for the ElectronProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ElectronProvider {
  currentZoom: number = 0;

  constructor() {
  }

  zoomIn() {
    electron.webFrame.setZoomLevel(++this.currentZoom);
  }

  zoomOut() {
    electron.webFrame.setZoomLevel(--this.currentZoom);
  }

}
