import ScrollSuave from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/navtab.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropdownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import Funcionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import ScrollAnima from './modules/scroll-animacao.js'
import SlideNav from './modules/slide.js'

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('.js-accordion dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const scrollAnima = new ScrollAnima('.js-scroll')
scrollAnima.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'aberto')
funcionamento.init()

fetchAnimais('./animaisapi.json', '.numeros-grid')

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')


const slide = new SlideNav('.slide', '.slide-display')

slide.init()
slide.addControl('.custom-controls')
