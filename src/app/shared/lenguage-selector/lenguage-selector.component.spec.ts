import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageSelectorComponent } from './lenguage-selector.component';

describe('LenguageSelectorComponent', () => {
  let component: LenguageSelectorComponent;
  let fixture: ComponentFixture<LenguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenguageSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
