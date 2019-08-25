import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Rest/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-channeljoin',
  templateUrl: './channeljoin.component.html',
  styleUrls: ['./channeljoin.component.css']
})
export class ChanneljoinComponent implements OnInit {
  @Input() showProgress:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
