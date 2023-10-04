import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[CoolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() CoolInputDefaultBgColor: string = 'white';
  @Input() CoolInputFocusBgColor: string = 'orange';


  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  private _backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;

  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.CoolInputFocusBgColor)
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.CoolInputDefaultBgColor)
    this._isOnFocus = false;

  }

  @HostListener('click', ['$event'])
  onClick(target: HTMLElement) {
  }

  ngOnInit() {
    // this.rend.setAttribute(this.el.nativeElement, 'placeholder', '*');
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;

  }


}
