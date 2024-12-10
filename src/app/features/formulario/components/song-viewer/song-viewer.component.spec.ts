import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongViewerComponent } from './song-viewer.component';

describe('SongViewerComponent', () => {
  let component: SongViewerComponent;
  let fixture: ComponentFixture<SongViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
