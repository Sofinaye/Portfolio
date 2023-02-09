const menuIcon = document.querySelector('#menu-icon')
const menuToggle = document.querySelector('#menu-toggle')
const menuSection = document.querySelector('#menu-section')

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

const projectWindow = {
  0: {
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standar dummy text.",
    image: "./img/tonic2.png"
  },
  1: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  },
  2: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  },
  3: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  },
  4: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  },
  5: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  },
  6: {
    title: "Professional art printing data",
    description: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    image: "./img/art1.png"
  }
}