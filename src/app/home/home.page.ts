import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: any;
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = '';
  colorDark: string = '#000000ff';
  colorLight: string = '#ffffffff';

  constructor() {
    // this.myAngularxQrCode = 'Your QR code data';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  generate() {
    this.myAngularxQrCode = this.value;
  }
}
