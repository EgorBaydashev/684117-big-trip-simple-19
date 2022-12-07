import FilterView from "./view/filter-view.js";
import SortView from "./view/sort-view.js";
//import PointAddView from "./view/point-add-view.js";
import {render} from "./render.js";

const siteHeader = document.querySelector('.page-header');
const siteFiltersElement = siteHeader.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-body__page-main');
const siteMainSection = siteMain.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);
render(new SortView(), siteMainSection);
//render(new PointAddView(), siteMainSection);
