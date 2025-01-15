const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar(media)

function downloadFile() {
  const link = document.createElement('a');
  link.href = 'https://cdn.discordapp.com/attachments/1326876271623536754/1326876329639022613/CV_-_Emilio_Yanvrent.pdf?ex=67810561&is=677fb3e1&hm=1509b0073350658c89d77fdf4987584603a046b72fd6ef41426b465bb755124f&';
  link.download = 'CV - Emilio Yanvrent.pdf';
  link.click();
}