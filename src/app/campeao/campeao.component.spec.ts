import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeaoComponent } from './campeao.component';

describe('CampeaoComponent', () => {
  let component: CampeaoComponent;
  let fixture: ComponentFixture<CampeaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
