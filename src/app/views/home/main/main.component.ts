import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription | null = null;
  // private observable: Observable<number>;
  private subject: Subject<number>;
  private content: any;

  constructor(public cartService: CartService) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++)
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.error('world')
    }, 5000);


    // this.observable = from([1, 2, 3, 4, 5])
    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.error('world')
    //   }, 5000);
    //   const timeout2 = setTimeout(() => {
    //     observer.complete()
    //   }, 4000)
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //
    //     }
    //   }
    // })
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {
    this.subscription = this.subject
      .subscribe({
        next: (param: number) => {
          console.log('subscriber 1: ', param)
        },
        error: (error: string) => {
          console.log('ERROR!!! :', error)
        }
      })
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {


    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param)
      })
  }

}
