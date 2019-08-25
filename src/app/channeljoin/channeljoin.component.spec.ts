import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanneljoinComponent } from './channeljoin.component';

describe('ChanneljoinComponent', () => {
  let component: ChanneljoinComponent;
  let fixture: ComponentFixture<ChanneljoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanneljoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanneljoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
