import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MaterialModule } from '../../common/material.module';
import { TypingAnimationService } from '../components/typing-animation/typing-animation.service';

@Component({
  selector: 'home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private typingService: TypingAnimationService
  ) {}
  message = 'hello mester in Omran Quiz';
  goToUserList() {
    this.router.navigate(['/user-list']);
  }
  ngOnInit(): void {
    this.typingService.startTyping(this.message, (text) => {
      this.message = text;
    });
  }
}
