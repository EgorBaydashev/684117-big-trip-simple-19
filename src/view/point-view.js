import {DateFormat} from '../const.js';
import {createElement} from '../render.js';
import {humanizePointDate} from '../utils.js';

function createPointTemplate(point) {

  const {base_price, date_from, date_to, destination, type} = point;

  const datePoint = humanizePointDate(date_from, DateFormat.DATE_FORMAT);
  const startTime = humanizePointDate(date_from, DateFormat.TIME_FORMAT);
  const endTime = humanizePointDate(date_to, DateFormat.TIME_FORMAT);

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${datePoint}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${startTime}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${endTime}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${base_price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class PointView {
  constructor({point}) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
