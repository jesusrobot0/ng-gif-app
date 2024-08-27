import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyimageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit() {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
