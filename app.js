
const navToggle = document.querySelector(".nav-toggle");
const links =document.querySelector(".links");
const linksLi =document.querySelectorAll(".subLinks");

const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", function(){

    links.classList.toggle("show-link");
  
    
});

window.addEventListener("scroll", function()
{
   let navHeight= navbar.getBoundingClientRect().height;
   let scrollHeight = window.pageYOffset;
   if(navHeight  < scrollHeight)
    {
        navbar.classList.add("nav-fixed");
        linksLi.forEach(function(e)
        {
         e.classList.remove("color");
         e.classList.add("li-fixed");

        });
        

    }
    else
    {
        navbar.classList.remove("nav-fixed");
        linksLi.forEach(function(e)
        {
        e.classList.add("color");
        e.classList.remove("li-fixed");
        });


    }

});

const filter = document.querySelector(".filter");
const filterLinks = document.querySelector(".filter-links");
const filterContainer = document.querySelector(".filter-container");
filter.addEventListener("click", function()
{
    const heightfilterLinks = filterLinks.getBoundingClientRect().height;
    let heightfilterContainer = filterContainer.getBoundingClientRect().height;
    console.log(heightfilterLinks);
    console.log(heightfilterContainer);
    if(heightfilterContainer == 0)
    {
        filterContainer.style.height= `${heightfilterLinks}px`;
    }
    else
      filterContainer.style.height =0;


});

const newsletter = document.querySelector("#newsletter");
console.log(newsletter);

const menu = [
    {
        id: 1,
        day: "Monday",
        month: "August",
        date: "19",
        year: "2021",
        title: "TECHNIEK NEWSLETTER",
        img: `https://www.bitptechnical.org.in/TC-Event-page/posters/teckniek_issue_3.png`,
        para: `In the ever-evolving scientific and engineering community, every day, a lot is happening. All kinds of stuff are being researched, designed and engineered, leaving us stunned and curious. But it is tough for one person to keep an eye on everything happening around. A Newsletter is the best way to establish that medium because they have been for ages.
        First issue is out!!! `,
      },
      {
        id: 2,
        day: "Wednesday",
        month: "October",
        date: "13",
        year: "2021",
        title: "TECKNIEK ISSUE-2",
        img: `https://www.bitptechnical.org.in/TC-Event-page/posters/teckniek_issue_2.png`,
        para: `☢ So tell me, how does an RBMK reactor core Explodes?
        🔸 Nanotechnology is an idea that most people didn't believe.
        💻 Importance of Kubernetes in the world of DevOps.`,
      },{
        id: 3,
        day: "Monday",
        month: "December",
        date: "27",
        year: "2021",
        title: "TECKNIEK ISSUE-3",
        img: `https://www.bitptechnical.org.in/TC-Event-page/posters/techniek_issue_1.jpeg`,
        para: `👽 Is it realistic that people can live on another planet?
        💻 The web from 1991 to the future
        🎲 3D printing technology
        👛 Crypto Addiction: A modern - day epidemic ??   `,
      }
    //   ,{
    //     id: 4,
    //     day: "Friday",
    //     month: "September",
    //     date: "26",
    //     year: "2021",
    //     title: "Name4",
    //     img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
    //     para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
    //             Quasi voluptatibus rerum vitae eum  `,
    //   },{
    //     id: 5,
    //     day: "Friday",
    //     month: "January",
    //     date: "26",
    //     year: "2021",
    //     title: "Name5",
    //     img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
    //     para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
    //             Quasi voluptatibus rerum vitae eum  `,
    //   },
];

window.addEventListener("DOMContentLoaded", function()
{
    displayItems(menu);

});


filterLinks.addEventListener("submit", function(e)
{  
    e.preventDefault();
    console.log(e.currentTarget);
    let InputMon = document.querySelector("#month");
    let InputYear = document.querySelector("#year");
    InputMon = InputMon.value.toLowerCase();
    InputYear = InputYear.value.toLowerCase();
    
    console.log(InputMon);
    console.log(InputYear);

    console.log("map");
     let filtered= menu.filter(function(item)
    {
        console.log(item.month);
        console.log(item.year);
         if(item.month.toLowerCase()==InputMon && item.year==InputYear)
         {
            console.log("mathed");
            return item;
         }
         
    });
    console.log(filtered);
    displayItems(filtered);
 
});




function displayItems(menuItem)
{
    let flag=0;
    let displayMenu = menuItem.map(function(item)
    {
        
        if(flag==0)
        {
            flag=1;
         
          return  `<div class="container" data-aos="fade-right" data-aos-delay="350">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog-post">
                        <div class="blog-post_img">
                            <img src= ${item.img} alt="">
                        </div>
                        <div class="blog-post_info">
                            <div class="blog-post_date">
                                <span class="day">${item.day}</span>
                                <span class="month">${item.month} ${item.year} ${item.date}</span>
                            </div>
                            <h1 class="blog-post_title">${item.title}</h1>
                            <p class="blog-post_text">
                               ${item.para}
                            </p>
                            <a href="#" class="blog-post_cta">Read More</a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>` 

        }
        else
        {
            flag=0;
           
            return  `<div class="container" data-aos="fade-right" data-aos-delay="350">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog-post-dark">
                        <div class="blog-post-dark_img">
                            <img src= ${item.img} alt="">
                        </div>
                        <div class="blog-post_info">
                            <div class="blog-post-dark_date">
                                <span class="day">${item.day}</span>
                                <span class="month">${item.month} ${item.year} ${item.date}</span>
                            </div>
                            <h1 class="blog-post-dark_title">${item.title}</h1>
                            <p class="blog-post-dark_text">
                               ${item.para}
                            </p>
                            <a href="#" class="blog-post-dark_cta">Read More</a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>` 

        }
      
    });
    displayMenu =displayMenu.join("");
    newsletter.innerHTML = displayMenu;
};

const items= document.querySelectorAll(".deadline-format h4");

//future date is 20/7/2022 at 5:30pm

const futureDate = new Date(2022,6,20,17,30)
let futureTime = futureDate.getTime();
function getRemainingTime()
{
    const today = new Date();
    const t= futureTime - today.getTime();
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    let dayLeft = Math.floor(t/oneDay);
    let hoursLeft = Math.floor((t%oneDay)/oneHour);
    let minLeft= Math.floor((t%oneHour)/oneMin);
    let secLeft= Math.floor((t%oneMin)/oneSec);
    const array = [dayLeft,hoursLeft,minLeft,secLeft]
    
    function format(item) {
          if(item <0)
             return -1;
          else if (item < 10) {
              return (item = `0${item}`);
            }
           
             
            return item;
          }
    items.forEach(function(item,index)
    {
        
        if(format(array[index])==-1)
          {
            item.innerHTML=0;;
          }
          else
           item.innerHTML=format(array[index]);
      
    });


}

 setInterval(getRemainingTime, 1000);

 







