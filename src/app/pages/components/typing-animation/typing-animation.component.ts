import { Component, Injectable } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { TypingAnimationService } from './typing-animation.service';

export class TypeWriterComponent {}

@Component({
  selector: 'typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.css'],
  animations: [
    trigger('typing', [
      transition(':enter', [
        animate(
          '2s steps(10)', // Adjust the speed of typing
          keyframes([
            style({ width: '0', overflow: 'hidden' }),
            style({ width: '*' }),
          ])
        ),
      ]),
    ]),
  ],
})
@Injectable({
  providedIn: 'root',
})
export class TypingAnimationComponent {
  typedText = '';
  index = 0;
  constructor(private typingService: TypingAnimationService) {}

  ngOnInit() {
    this.typingService.startTyping('hiiii animation', (text) => {
      this.typedText = text;
    });
  }

  startTyping(text: string) {
    const interval = setInterval(() => {
      if (this.index < text.length) {
        this.typedText += text[this.index];
        this.index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
}
