import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTresComponent } from './top-tres.component';

describe('TopTresComponent', () => {
  let component: TopTresComponent;
  let fixture: ComponentFixture<TopTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
