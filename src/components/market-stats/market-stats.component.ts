import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import { Game } from '../../types';

@Component({
  selector: 'app-market-stats',
  standalone: true,
  imports: [],
  templateUrl: './market-stats.component.html',
  styleUrl: './market-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketStatsComponent {
  marketId = input.required<string>();
  game = input.required<Game>();

  tooltipOpen = signal(false);

  position = signal<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>(
    'top-right',
  );

  tooltipElement = inject(ElementRef<MarketStatsComponent>);

  @ViewChild('tooltipToggle') tooltipToggle:
    | ElementRef<HTMLButtonElement>
    | undefined;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    if (!this.tooltipElement.nativeElement.contains(event.target)) {
      this.tooltipOpen.set(false);
    }
  }

  private changeObserver: IntersectionObserver;

  constructor() {
    this.changeObserver = new IntersectionObserver(
      this.updatePosition.bind(this),
      {
        threshold: 0.2,
        rootMargin: '-140px 400px',
      },
    );

    effect((onCleanup) => {
      if (this.tooltipToggle?.nativeElement) {
        this.changeObserver.observe(this.tooltipToggle.nativeElement);
      }

      onCleanup(() => {
        this.changeObserver.disconnect();
      });
    });

    this.updatePosition();
  }

  updatePosition() {
    if (!this.tooltipToggle?.nativeElement) {
      return;
    }

    const rect = this.tooltipToggle.nativeElement.getBoundingClientRect();

    const { innerWidth, innerHeight } = window;

    const position = {
      top: rect.top,
      left: rect.left,
      right: innerWidth - rect.right,
      bottom: innerHeight - rect.bottom,
    };

    const max = Math.max(
      position.top,
      position.left,
      position.right,
      position.bottom,
    );

    if (max === position.top) {
      this.position.set(
        position.left > position.right ? 'top-left' : 'top-right',
      );
    } else if (max === position.left) {
      this.position.set(
        position.top > position.bottom ? 'top-left' : 'bottom-left',
      );
    } else if (max === position.right) {
      this.position.set(
        position.top > position.bottom ? 'top-right' : 'bottom-right',
      );
    } else {
      this.position.set(
        position.left > position.right ? 'bottom-left' : 'bottom-right',
      );
    }
  }
}
