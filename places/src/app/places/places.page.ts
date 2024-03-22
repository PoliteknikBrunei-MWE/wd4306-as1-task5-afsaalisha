import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: '../auth/auth.page.html',
  styleUrls: ['../auth/auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class AuthPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}