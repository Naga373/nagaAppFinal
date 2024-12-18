import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Add the animation class after a delay to trigger animations
    setTimeout(() => {
      const mainContent = document.querySelector('.main-content');
      const image = document.querySelector('.responsive-img');

      mainContent?.classList.add('animate');
      image?.classList.add('animate');
    }, 100); // Delay to allow initial DOM rendering
  }
}
