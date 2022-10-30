import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {

  characters:any= []

  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
    this.pagination(1)

  }

  pagination(page:number){
    this.charactersService.getCharacters(page).subscribe((res:any) =>{
      console.log(res);

    this.characters= res.results;

  })
//   info(id: number){
//     this.charactersService.getInfo(id).subscribe(character => {

//       this.characters = character
// })

  }
}
