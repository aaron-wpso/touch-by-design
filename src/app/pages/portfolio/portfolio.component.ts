import { Component, OnInit } from '@angular/core';
import { PortfolioDetailsService } from 'src/app/services/portfolio-details.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private service: PortfolioDetailsService) { }

  portfolioData : any;

  ngOnInit(): void {
    this.portfolioData = this.service.portfolioDetails;
  }

}
