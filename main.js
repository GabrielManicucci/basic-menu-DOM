const TOPICS_lIST = {
  HTML: [
    {
      title: 'Fundamentos',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Tags',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Forms',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Atributos',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Inputs',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
  ],
  CSS: [
    {
      title: 'Semântica',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Especificidade',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'PseudoClasses',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'PseudoElements',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Responsiviadade',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
  ],
  JavaScript: [
    {
      title: 'Fundamentos',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Funções',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Arrays',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Objetos',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
    {
      title: 'Estruturas de Controle',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    },
  ],
  React: [
    {
      title: 'Componentes',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quae. Dolores laborum quod suscipit nihil. Necessitatibus labore consectetur dolores eum praesentium autem mollitia soluta fugit voluptas quis dolorum, facilis ipsam?'
    }
  ],
}

// MAIN PAGE
const MAIN_PAGE = document.querySelector('.fundamentos')
const BUTTON_MAINPAGE = document.querySelectorAll('.Buttons_MainPage')

// SUBPAGE 
const SUBPAGE = document.querySelector('.subpage')
const TITTLE_SUBPAGE = document.querySelector('.subPage_tittle')
const SUBPAGE_BUTTONS = document.querySelector('.subPage_topics')

// FINAL PAGE
const FINAL_PAGE = document.querySelector('.content_page ')
const TITTLE_FINALPAGE = document.querySelector('.title_topic')
const CONTENT_FINALPAGE = document.querySelector('.content_topic')

// BACK BUTTON
const BACK_BUTTON = document.querySelector('button')
const BACK_FINALBUTTON = document.getElementById('return_finalPage')

function secondaryBackButton () {
  FINAL_PAGE.classList.add('hide')
  SUBPAGE.classList.remove('hide')
}

function mainBackButton () {

  SUBPAGE.classList.add('hide')
  MAIN_PAGE.classList.remove('hide')
  SUBPAGE_BUTTONS.innerHTML = ''
  // document.location.reload(true)
}


function renderContent () {
  SUBPAGE.classList.add('hide')
  FINAL_PAGE.classList.remove('hide')
  
  TITTLE_FINALPAGE.innerHTML = this.innerHTML

  TOPIC_LIST.forEach( obj => {
    CONTENT_FINALPAGE.innerHTML = obj.content
  })
}

function renderJsButton () {
  // console.log('deu certo')

  MAIN_PAGE.classList.add('hide')
  SUBPAGE.classList.remove('hide')


  TOPIC_LIST = TOPICS_lIST[this.innerHTML]
  TITTLE_SUBPAGE.innerHTML = this.innerHTML

  TOPIC_LIST.forEach( obj => {
    let element = document.createElement('div')
    element.classList.add('buttons')

    element.innerHTML = obj.title
    SUBPAGE_BUTTONS.appendChild(element)

    element.addEventListener('click', renderContent)
   
  })

  BACK_BUTTON.addEventListener('click', mainBackButton)
  BACK_FINALBUTTON.addEventListener('click', secondaryBackButton)
  

}

BUTTON_MAINPAGE.forEach( button => {
  button.addEventListener('click', renderJsButton)
})







