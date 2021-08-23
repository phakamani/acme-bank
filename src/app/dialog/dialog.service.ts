import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogs: any[] = [];

  constructor() { }

  open(classString: string) {
    const dialog = document.querySelector('.' + classString) as HTMLElement;
    const dialogContainer = document.querySelector('.dialog-container') as HTMLElement;
    dialog.style.display = 'block';
    dialogContainer.style.display = 'block';
    const overlay = document.querySelector('.active-elements-overlay') as HTMLElement;
    overlay.style.display = 'block';
  }



  close(classString: string) {
    const dialog = document.querySelector('.' + classString) as HTMLElement;
    const dialogContainer = document.querySelector('.dialog-container') as HTMLElement;
    dialog.style.display = 'none';
    dialogContainer.style.display = 'none';
    const overlay = document.querySelector('.active-elements-overlay') as HTMLElement;
    overlay.style.display = 'none';
  }
}
