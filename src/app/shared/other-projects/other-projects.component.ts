import { Component, OnInit } from '@angular/core';
import { PortfolioDetailsService } from 'src/app/services/portfolio-details.service';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css']
})
export class OtherProjectsComponent implements OnInit {

  constructor(private service: PortfolioDetailsService) { }

  portfolioData : any;

  ngOnInit(): void {
    this.portfolioData = this.service.portfolioDetails.filter(x => x.isRecommendation);
  }
}
