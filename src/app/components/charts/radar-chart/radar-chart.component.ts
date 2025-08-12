import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from "primeng/chart";

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss'
})
export class RadarChartComponent {

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.initChart();
  }

 initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

            this.data = {
                labels: ['ATT', 'TEC', 'TAC', 'DEF', 'CRE'],
                datasets: [
                    {
                        label: 'Attributs',
                        borderColor: documentStyle.getPropertyValue('--p-green-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--p-green-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        data: [86,95,62,35,85]
                    }
                ]
            };

            this.options = {
                plugins: {
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
        // this.cd.markForCheck()
    }

}
