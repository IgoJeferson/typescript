"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("./base-ships");
var startfighters_1 = require("./startfighters");
var ship = new base_ships_1.SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new startfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
//# sourceMappingURL=app.js.map