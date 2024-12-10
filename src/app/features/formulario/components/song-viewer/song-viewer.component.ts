import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface ICancionSeleccionada {
  titulo: string
  cover: string
}


@Component({
  selector: 'app-song-viewer',
  standalone: true,
  imports: [],
  templateUrl: './song-viewer.component.html',
  styleUrl: './song-viewer.component.css'
})
export class SongViewerComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 
}
