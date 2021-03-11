const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('a');
  navItems.forEach((item, index) => {
  item.innerText = siteContent['nav'][`nav-item-${index + 1}`];
  item.style.color = 'green';
})

let h1 = document.querySelector('h1')
h1.innerHTML = '<h1>DOM<br> Is<br> Awesome</h1>'

let buttonItem = document.querySelector('button');
buttonItem.innerHTML = siteContent['cta']['button'];

let headerImage = document.querySelector("#cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

let h4TextMainContent = document.querySelectorAll(".top-content .text-content h4");
h4TextMainContent[0].innerText = siteContent['main-content']['features-h4'];
h4TextMainContent[1].innerText = siteContent['main-content']['about-h4'];

let pMainContent = document.querySelectorAll(".top-content .text-content p");
pMainContent[0].innerText = siteContent['main-content']['features-content'];
pMainContent[1].innerText = siteContent['main-content']['about-content'];

let middleImage = document.querySelector('#middle-img')
middleImage.src = siteContent['main-content']['middle-img-src']

let h4BottomTextContentServices = document.querySelectorAll('.bottom-content .text-content h4');
h4BottomTextContentServices[0].innerText = siteContent['main-content']['services-h4']
h4BottomTextContentServices[1].innerText = siteContent['main-content']['product-h4']
h4BottomTextContentServices[2].innerText = siteContent['main-content']['vision-h4']

let pBottomTextContentServices = document.querySelectorAll('.bottom-content .text-content p');
pBottomTextContentServices[0].innerText = siteContent['main-content']['services-content']
pBottomTextContentServices[1].innerText = siteContent['main-content']['product-content']
pBottomTextContentServices[2].innerText = siteContent['main-content']['vision-content']

let h4ContactSection = document.querySelector('.contact h4');
h4ContactSection.innerText = siteContent['contact']['contact-h4']

let pContactSection = document.querySelectorAll('.contact p');
pContactSection[0].innerText = siteContent['contact']['address'];
pContactSection[1].innerText = siteContent['contact']['phone'];
pContactSection[2].innerText = siteContent['contact']['email'];

let pFooter = document.querySelector('footer p');
pFooter.innerText = siteContent['footer']['copyright'];

let nav = document.querySelector('nav');
let newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Our Facebook'
newNavItem1.style.color = 'blue';
newNavItem1.setAttribute('href', 'https://www.facebook.com')
let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Meet our Team'
newNavItem2.style.color = 'green';
newNavItem2.setAttribute('href', '#')
nav.appendChild(newNavItem1)
nav.prepend(newNavItem2)