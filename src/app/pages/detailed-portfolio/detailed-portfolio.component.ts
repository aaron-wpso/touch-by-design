import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { PortfolioDetailsService } from 'src/app/services/portfolio-details.service';


@Component({
  selector: 'app-detailed-portfolio',
  templateUrl: './detailed-portfolio.component.html',
  styleUrls: ['./detailed-portfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedPortfolioComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service:PortfolioDetailsService, private gallery: Gallery) { }

  getPortfolioName: any;
  portfolioData: any;
  items: GalleryItem[];
  firstIndex: any;

  ngOnInit(): void 
  {
    this.param.params.subscribe(routeParams => {
      this.getPortfolioName = this.param.snapshot.paramMap.get('projectName');
    
      if(this.getPortfolioName)
      {
        this.portfolioData = this.service.portfolioDetails.filter((value) => 
        {
          return value.projectName == this.getPortfolioName;
        });
        this.items = this.portfolioData[0].projectImages.map(item => new ImageItem({src: item, thumb: item}));
      }
      this.firstIndex = this.items.findIndex((x) => x.data.src === this.portfolioData[0].projectThumbnail);

      this.gallery.ref().load(this.items); 
      this.gallery.ref().set(this.firstIndex);

      const header= document.getElementById('#header');
      header.scrollIntoView();
    });
  }
}
