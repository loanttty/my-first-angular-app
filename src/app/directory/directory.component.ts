import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service'
import { Bookmark } from '../models/Bookmark';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  linkList: Bookmark[] = [];

  // Inject your Bookmark service into the constructor below
  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

}
