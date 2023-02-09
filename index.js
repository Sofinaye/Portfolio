const showCaseProject = {
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standar dummy text.",
    image: "./img/tonic2.png",
    technologies: ["css", "html", "bootstrap", "Ruby"],
    technology: "See Project",
    seeLive: "#",
    seeSource: "#"
}
const projectsData = [
  
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    technologies: ["css", "html", "bootstrap"],
    seeLive: "#",
    seeSource: "#"
  },
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    technologies: ["css", "html", "bootstrap"],
    seeLive: "#",
    seeSource: "#"
  },
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    technologies: ["css", "html", "bootstrap"],
    seeLive: "#",
    seeSource: "#"
  },
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    technologies: ["css", "html", "bootstrap"],
    seeLive: "#",
    seeSource: "#"
  },
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    technologies: ["css", "html", "bootstrap"],
    seeLive: "#",
    seeSource: "#"
  },
 {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png",
    
  }
]
const menuIcon = document.querySelector('#menu-icon')
const menuToggle = document.querySelector('#menu-toggle')
const menuSection = document.querySelector('#menu-section')

const populateProjects = ()=>{
  console.log("tada")
  const projectsContainer = document.querySelector("#portfolio")
  
  const showCaseElement = document.createElement("div")
  showCaseElement.setAttribute("class", "project-list")
  projectsContainer.appendChild(showCaseElement)

  const showCaseElementBrand = document.createElement("div")
  showCaseElementBrand.setAttribute("class", "project-item")
  showCaseElement.appendChild(showCaseElementBrand)

  const showCaseElementImageContainer = document.createElement("div")
  showCaseElementImageContainer.setAttribute("class", "project-item-img")

  const showCaseElementImage = document.createElement("img")
  showCaseElementImage.setAttribute("class", "img")
  showCaseElementImage.setAttribute("src", showCaseProject.image)
  showCaseElementImage.setAttribute("alt", showCaseProject.title)
  showCaseElementImageContainer.appendChild(showCaseElementImage)
  showCaseElementBrand.appendChild(showCaseElementImageContainer)
  

  const showCaseDescription = document.createElement("div")
  showCaseDescription.setAttribute("class", "project-disc")
  showCaseElement.appendChild(showCaseDescription)

  const showCaseElementHeading = document.createElement("h2")
  showCaseElementHeading.setAttribute("class", "project-heading")
  showCaseElementHeading.textContent = showCaseProject.title;
  showCaseDescription.appendChild(showCaseElementHeading)


  const showCaseText = document.createElement("p")
  showCaseText.setAttribute("class", "project-disc-main")
  showCaseText.textContent = showCaseProject.description
  showCaseDescription.appendChild(showCaseText)


  const showCaseTechnology = document.createElement("ul")
  showCaseTechnology.setAttribute("class", "project-btns")
  showCaseDescription.appendChild(showCaseTechnology)

  showCaseProject.technologies.forEach((tech)=>{
  const showCaseTechnologyItem = document.createElement("li")
  showCaseTechnology.appendChild(showCaseTechnologyItem)
  const showCaseTechnologyItemList = document.createElement("button")
  showCaseTechnologyItemList.textContent = tech
  showCaseTechnologyItemList.setAttribute("class", "project-btns-list")
  showCaseTechnologyItem.appendChild(showCaseTechnologyItemList)
  })

  const showCaseBtnContainer = document.createElement("div")
  showCaseBtnContainer.setAttribute("class", "project-bttn")
  showCaseDescription.appendChild(showCaseBtnContainer)
  
  const showCaseBtn = document.createElement("button")
  showCaseBtn.setAttribute("class", "project-btn")
  showCaseBtn.textContent = showCaseProject.technology
  showCaseBtnContainer.appendChild(showCaseBtn)

  
  //  <div class="project-content">
  //         <h3 class="underlined">My Recent Works <span class="underlined-hr"></span> </h3>
  //       <div class="project-list">
  //         <div class="project-item">
  //           <div class="project-item-img">
  //         <img src="./img/tonic2.png" alt="" class="img">
  //       </div>
  //     </div>
  //     <div class="project-disc">
  //     <h2 class="project-heading">Multi-Post Stories</h2>
  //     <p class="project-disc-main">A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standar dummy text.</p>

  //     <ul class="project-btns">
  //       <li><button type="button" class="project-btns-list">css</button></li>
  //       <li><button type="button" class="project-btns-list">html</button></li>
  //       <li><button type="button" class="project-btns-list" id="bts">bootstrap</button></li>
  //       <li><button type="button" class="project-btns-list">Ruby</button></li>
        
  //     </ul>
  //     <div class="project-bttn">
  //       <button type="button" class="project-btn">See Project</button>
  //     </div>
  //     </div>
  //         </div>
  //       </div>

}
menuIcon.addEventListener('click', ()=>{
  menuSection.classList.add('menu-section-active')
  document.body.style.overflowY = 'hidden';
} )

menuToggle.addEventListener('click', ()=>{
  menuSection.classList.remove('menu-section-active')
  document.body.style.overflowY = 'scroll';
})

document.querySelectorAll('.menu-item a').forEach((item)=> {
  item.addEventListener('click', ()=>{
    menuSection.classList.remove('menu-section-active')
    document.body.style.overflowY = 'scroll';
  })
})


window.addEventListener("load", populateProjects)