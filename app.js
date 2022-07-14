
const navToggle = document.querySelector(".nav-toggle");
const links =document.querySelector(".links");
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
    }
    else
    {
        navbar.classList.remove("nav-fixed");
    }

});

const filter = document.querySelector(".filter .icons");
const filterLinks = document.querySelector(".filter-links");
filter.addEventListener("click", function()
{
    filterLinks.classList.toggle("show-filter-links");

});

const newsletter = document.querySelector("#newsletter");
console.log(newsletter);

const menu = [
    {
        id: 1,
        day: "Friday",
        month: "Feburary",
        date: "26",
        year: "2020",
        title: "Name1",
        img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
        para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
                Quasi voluptatibus rerum vitae eum  `,
      },
      {
        id: 2,
        day: "Friday",
        month: "March",
        date: "26",
        year: "2021",
        title: "Name2",
        img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
        para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
                Quasi voluptatibus rerum vitae eum  `,
      },{
        id: 3,
        day: "Friday",
        month: "august",
        date: "26",
        year: "2021",
        title: "Name3",
        img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
        para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
                Quasi voluptatibus rerum vitae eum  `,
      },{
        id: 4,
        day: "Friday",
        month: "September",
        date: "26",
        year: "2021",
        title: "Name4",
        img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
        para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
                Quasi voluptatibus rerum vitae eum  `,
      },{
        id: 5,
        day: "Friday",
        month: "January",
        date: "26",
        year: "2021",
        title: "Name5",
        img: `./godwin-angeline-benjo-dvolLfbkzrs-unsplash.jpg`,
        para: `lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure ab, facilis cum modi doloribus debitis perspiciatis assumenda!
                Quasi voluptatibus rerum vitae eum  `,
      },
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
         
          return  `<div class="container" data-aos="fade-right" data-aos-delay="300">
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
                            <h1 class="blog-post_title">Technical Club</h1>
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
           
            return  `<div class="container"  data-aos="fade-right" data-aos-delay="300">
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
                            <h1 class="blog-post-dark_title">Technical Club</h1>
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

 







