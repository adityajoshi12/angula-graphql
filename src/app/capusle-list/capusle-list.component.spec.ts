import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapusleListComponent } from './capusle-list.component';

describe('CapusleListComponent', () => {
  let component: CapusleListComponent;
  let fixture: ComponentFixture<CapusleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapusleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapusleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
