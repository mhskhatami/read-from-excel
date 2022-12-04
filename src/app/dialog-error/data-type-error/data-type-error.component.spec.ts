import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeErrorComponent } from './data-type-error.component';

describe('DataTypeErrorComponent', () => {
  let component: DataTypeErrorComponent;
  let fixture: ComponentFixture<DataTypeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTypeErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTypeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
