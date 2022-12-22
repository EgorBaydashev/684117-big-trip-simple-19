import PointListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointAddView from '../view/point-add-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  listComponent = new PointListView();

  constructor({listContainer, pointsModel}) {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];
    this.offersByType = [...this.pointsModel.getOffersByType()];
    this.blankPoint = this.pointsModel.getBlankPoint();

    render(this.listComponent, this.listContainer);
    render(new PointEditView({point: this.blankPoint, destinations: this.destinations, offers: this.offers, offersByType: this.offersByType}), this.listComponent.getElement());
    render(new PointAddView({point: this.blankPoint, destinations: this.destinations, offers: this.offers, offersByType: this.offersByType}), this.listComponent.getElement());

    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i], destinations: this.destinations, offers: this.offers}), this.listComponent.getElement());
    }
  }
}
