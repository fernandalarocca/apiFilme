import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {
  informacao! : any;

  constructor(private actRoute : ActivatedRoute, private filmeService : FilmesService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.filmeService.buscarDetalhado(id).subscribe(result => {
      this.informacao = result;
    });
  }

  abrirSite(){
    window.open(this.informacao.Website, '_blank');
  }
}
