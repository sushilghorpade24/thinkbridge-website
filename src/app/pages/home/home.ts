import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header,NgClass,NgStyle,NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 cards = [
    {
      highlight: 'Top recruiting firm increases hires per recruiter by 75% plus a...',
      stats: [
        { value: '42%', text: 'Reduction In HR And IT Support Tickets', color: '#fde8dc', textColor: 'text-danger' },
        { value: '62%', text: 'Lower Inference Costs', color: '#eef2f9', textColor: 'text-primary' }
      ]
    },
    {
      highlight: 'AI-driven platform cuts operational costs significantly...',
      stats: [
        { value: '58%', text: 'Improved Workflow Efficiency', color: '#fff3cd', textColor: 'text-warning' },
        { value: '70%', text: 'Faster Deployment Cycles', color: '#e8f5e9', textColor: 'text-success' }
      ]
    },
    {
      highlight: 'Retail company enhances personalization at scale...',
      stats: [
        { value: '80%', text: 'Customer Retention Increase', color: '#e3f2fd', textColor: 'text-primary' },
        { value: '45%', text: 'Reduced Marketing Costs', color: '#fffde7', textColor: 'text-warning' }
      ]
    }
  ];

  ngAfterViewInit() {
  const video: HTMLVideoElement | null = document.querySelector('.approach-video');
  if (video) {
    video.muted = true;
    video.play().catch(() => {
      document.body.addEventListener('click', () => video.play(), { once: true });
    });
  }
}


}
