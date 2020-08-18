import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TresenrayaPage } from './tresenraya.page';

describe('TresenrayaPage', () => {
  let component: TresenrayaPage;
  let fixture: ComponentFixture<TresenrayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresenrayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TresenrayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
