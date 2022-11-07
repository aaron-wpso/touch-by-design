import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailsService {

  constructor() { }

  portfolioDetails = [
    {
      id: 1,
      projectName: "Kensington Park",
      projectLocation: "Kensington Park Dr, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/8 Kensington Park 12-01/8.jpg",
      sideImages:[
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/6.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/7.jpg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/0.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/2.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/3.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/4.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/5.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/6.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/7.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/8.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/9.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/10.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/11.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/12.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/13.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/14.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/15.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/16.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/17.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/18.jpg", 
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/19.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/20.jpg",
        "assets/images/06_Completed Projects/8 Kensington Park 12-01/21.jpg"
      ]
    },
    {
      id: 2,
      projectName: "Bartly Residence",
      projectLocation: "Lor How Sun, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/5.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/2.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/4.jpeg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/1.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/2.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/3.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/4.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/5.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/6.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/7.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/8.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/9.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/10.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/11.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/12.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/13.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/14.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/15.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/16.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/17.jpeg", 
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/18.jpeg",
        "assets/images/06_Completed Projects/7A Lorong How Sun @ Bartley Residences/19.jpeg", 
      ]
    },
    {
      id: 3,
      projectName: "Lake Grande",
      projectLocation: "Jurong Lake Link, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/8 Lake Grande/5.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/8 Lake Grande/1.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/2.jpeg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/8 Lake Grande/1.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/2.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/3.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/4.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/5.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/6.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/7.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/8.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/9.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/10.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/11.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/12.jpeg",
        "assets/images/06_Completed Projects/8 Lake Grande/13.jpeg",
      ] 
    },
    {
      id: 4,
      projectName: "The Asana",
      projectLocation: "17 Queen's Rd, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/17 Queens Road @ The Asana/4.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/1.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/2.jpeg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/1.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/2.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/3.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/4.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/5.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/6.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/7.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/8.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/9.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/10.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/11.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/13.jpeg",
        "assets/images/06_Completed Projects/17 Queens Road @ The Asana/14.jpeg",
      ] 
    },
    {
      id: 5,
      projectName: "Trevista",
      projectLocation: "25 Lorong 3 Toa Payoh, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/2.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/4.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/7.jpeg",
      ],
      projectImages: [
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/1.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/2.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/3.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/4.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/5.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/6.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/7.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/8.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/9.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/10.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/11.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/12.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/13.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/14.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/15.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/16.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/17.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/18.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/23.jpeg",
        "assets/images/06_Completed Projects/25 Lorong 3 Toa Payoh @ Trevista/24.jpeg",
      ] 
    },
    {
      id: 6,
      projectName: "The Trilinq",
      projectLocation: "28 Jln Lempeng, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/28 The Trilinq/1.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/28 The Trilinq/2.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/4.jpeg",
      ],
      projectImages: [
        "assets/images/06_Completed Projects/28 The Trilinq/1.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/2.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/3.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/4.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/5.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/6.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/7.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/8.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/9.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/10.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/11.jpeg",
        "assets/images/06_Completed Projects/28 The Trilinq/12.jpeg",
      ] 
    },
    {
      id: 7,
      projectName: "Inz Residence",
      projectLocation: "68 Choa Chu Kang, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/68 CCK @ Inz Residence/1.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/2.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/4.jpeg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/1.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/2.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/3.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/4.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/5.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/6.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/7.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/8.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/9.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/10.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/11.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/12.jpeg",
        "assets/images/06_Completed Projects/68 CCK @ Inz Residence/13.jpeg",
      ] 
    },
    {
      id: 8,
      projectName: "Bukit Batok",
      projectLocation: "Bukit Batok, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/296C Bukit Batok/IMG_8007.jpg",
      sideImages:[
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8008.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8009.jpg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8006.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8007.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8008.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8009.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8010.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8011.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8012.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8013.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8014.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8015.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8016.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8017.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8018.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8019.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8020.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8024.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8025.jpg",
        "assets/images/06_Completed Projects/296C Bukit Batok/IMG_8026.jpg",
      ] 
    },
    {
      id: 9,
      projectName: "Pasir Ris One",
      projectLocation: "530 Pasir Ris Dr 1, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/530A Pasir Ris One/3.jpeg",
      sideImages:[
        "assets/images/06_Completed Projects/530A Pasir Ris One/5.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/6.jpeg"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/530A Pasir Ris One/1.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/2.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/3.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/4.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/5.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/6.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/7.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/8.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/9.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/10.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/11.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/12.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/13.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/14.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/15.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/16.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/17.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/18.jpeg",
        "assets/images/06_Completed Projects/530A Pasir Ris One/19.jpeg",
      ] 
    },
    {
      id: 10,
      projectName: "Sumang Lane",
      projectLocation: "Sumang Lane, Singapore",
      projectThumbnail:"assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0334.JPG",
      sideImages:[
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0335.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0336.JPG"
      ],
      projectImages: [
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0334.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0335.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0336.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0337.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0338.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0339.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_0340.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_03341.JPG",
        "assets/images/06_Completed Projects/Blk 231B Sumang Lane/IMG_03342.JPG",
      ]
    },
  ]
}
