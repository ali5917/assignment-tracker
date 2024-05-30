// changing styles for navbar

window.addEventListener('scroll', function() {
  const featuresSection = document.getElementById('section-2')
  const featuresSectionTop = featuresSection.offsetTop
  const navbar = document.querySelector('.nav');
  const logoTitle = document.querySelector('.logo-title');
  const about = document.querySelector('.about');
  const signIn = document.querySelector('.sign-in');
  const contributers = document.querySelector('.dropdown-container p');
  const logoImg = document.querySelector('.logo img')
  const logoBlack = navbar.getAttribute('data-logo-black');
  const logoWhite = navbar.getAttribute('data-logo-white');
  const gitIcon = document.querySelector('.git i')
  const dropIcon = document.querySelector('.dropdown-container i')
  const dropContainer = document.querySelector('.dropdown-container')
  const dropContent = document.querySelector('.dropdown-content')
  const dropItem = document.querySelectorAll('.dropdown-content a')
  const startBox = document.querySelector('.start-box')
  const startText = document.querySelector('.start')


  if (window.scrollY >= featuresSectionTop) {
    navbar.style.backgroundColor = 'white'
    logoTitle.style.color = 'black'
    about.style.color = 'black'
    signIn.style.color = 'black'
    contributers.style.color = 'black'
    logoImg.src = logoBlack;
    gitIcon.style.color = 'black'
    dropIcon.style.color = 'black'

    startBox.style.border = 'solid 2px black'
    startText.style.color = 'white'
    startBox.style.backgroundColor = 'black'
    startBox.addEventListener('mouseenter', () => {
      startBox.style.backgroundColor = 'white'
      startText.style.color = 'black'
    })
    startBox.addEventListener('mouseleave', () => {
      startBox.style.backgroundColor = 'black'
      startText.style.color = 'white'
    })

    dropContainer.addEventListener('mouseenter', () => {
      dropItem.forEach (item => {
        item.style.color = 'white'
        item.style.backgroundColor = 'black'
      })
    }) 
    
    dropItem.forEach (item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'white'
        item.style.color = 'black'
        dropContent.style.border = 'solid 1px black'
      })
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'black'
        item.style.color = 'white'
      })
    })
  }
  else {
    navbar.style.backgroundColor = 'black'
    logoTitle.style.color = 'white'
    about.style.color = 'white'
    signIn.style.color = 'white'
    contributers.style.color = 'white'
    logoImg.src = logoWhite;
    gitIcon.style.color = 'white'
    dropIcon.style.color = 'white'

    startBox.style.backgroundColor = 'white'
    startBox.style.border = 'solid 2px white'
    startText.style.color = 'black'
    startBox.addEventListener('mouseenter', () => {
      startBox.style.backgroundColor = 'black'
      startText.style.color = 'white'
    })
    startBox.addEventListener('mouseleave', () => {
      startBox.style.backgroundColor = 'white'
      startText.style.color = 'black'
    })

    dropContainer.addEventListener('mouseenter', () => {
      dropItem.forEach (item => {
        item.style.color = 'black'
        item.style.backgroundColor = 'white'
      })
    }) 

    dropItem.forEach (item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'black'
        item.style.color = 'white'
        dropContent.style.border = 'solid 1px white'
      })
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'white'
        item.style.color = 'black'
      })
    })
  }
})