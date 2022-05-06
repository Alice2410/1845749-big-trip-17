import FilterView from '../view/fiter-view.js';
import EditView from '../view/edit-event-view.js';
import ListItemView from '../view/event-item-view.js';
import EventsListView from '../view/events-list-view.js';
import NewEventView from '../view/new-event-form-view.js';
import SortingView from '../view/sorting-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';

const routePointItemCounter = 3;
const filterElement = document.querySelector('.trip-controls__filters');
const eventsSection = document.querySelector('.trip-events');

export default class TripPresenter {
  tripList = new EventsListView();
  tripListItem = new ListItemView();

  init = () => {
    render(new FilterView, filterElement);
    render(new SortingView(), eventsSection);
    render(this.tripList, eventsSection);
    render(new EditView(), this.tripList.getElement());
    render(new NewEventView(), this.tripList.getElement());

    for(let i = 0; i < routePointItemCounter; i++) {
      render(new PointView(), this.tripList.getElement());
    }
  };
}
