import Vue from "vue";
import EmptyListPlaceholder from "./gui/empty-list-placeholder";
import IdleLogout from "./idle-logout";
import Modal from "./modal";
import ModalConfirm from "./modal-confirm";
import Navbar from "../home/navbar";
import LanguageSelector from "../login/language-selector";
import LoadingCover from "./gui/loaders/loading-cover";
import Flipper from "./tiles/flipper";
import SquareLink from "./tiles/square-link";
import SquareLinksGrid from "./tiles/square-links-grid";

Vue.component('emptyListPlaceholder', EmptyListPlaceholder);
Vue.component('idleLogout', IdleLogout);
Vue.component('modal', Modal);
Vue.component('modalConfirm', ModalConfirm);
Vue.component('navbar', Navbar);
Vue.component('languageSelector', LanguageSelector);
Vue.component('loadingCover', LoadingCover);
Vue.component('flipper', Flipper);
Vue.component('squareLink', SquareLink);
Vue.component('squareLinksGrid', SquareLinksGrid);
