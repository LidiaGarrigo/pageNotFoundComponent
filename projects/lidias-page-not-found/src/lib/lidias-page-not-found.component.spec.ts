import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidiasPageNotFoundComponent } from './lidias-page-not-found.component';

describe('LidiasPageNotFoundComponent', () => {
  let component: LidiasPageNotFoundComponent;
  let fixture: ComponentFixture<LidiasPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LidiasPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LidiasPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
