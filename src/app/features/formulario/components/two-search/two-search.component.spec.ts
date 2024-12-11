import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSearchComponent } from './two-search.component';

describe('TwoSearchComponent', () => {
  let component: TwoSearchComponent;
  let fixture: ComponentFixture<TwoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
