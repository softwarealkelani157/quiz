import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypingAnimationService {
  constructor() {}

  startTyping(text: string, callback: (typedText: string) => void) {
    let index = 0;
    let typedText = '';

    const interval = setInterval(() => {
      if (index < text.length) {
        typedText += text[index];
        index++;
        callback(typedText);
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
}
