import Route from "../bootstrap/Route";
import HomeController from "../app/Controllers/HomeController";

Route.get('/', HomeController.index)
Route.get('/:id', HomeController.show)

export default Route;
