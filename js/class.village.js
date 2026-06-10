"use strict";

import Building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";
import Citizen from "./class.citizen.js";
import NobleCitizen from "./class.nobleCitizen.js";

/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

export default class Village {
    constructor(name) {
        this.name = name;
        this.buildings = []
        this.citizens = []
    }
    addBuilding(name, capacity, noble = false) {
        this.buildings.push(noble ? new NobleBuilding(name, capacity) : new Building(name, capacity));
    }
    addCitizen(name, noble = false) {
        let citizen = noble ? new NobleCitizen(name) : new Citizen(name)
        this.citizens.push(citizen);
        this.shelterCitizen(citizen);
    }
    shelterTheWorthy(){
        for(const citizen of this.citizens){
            if(citizen.home == null){
                this.shelterCitizen(citizen);
            }
        }
    }

    printCitizenDirectory(){
        for(const building of this.buildings){
            building.listAllResidents()
        }
        this.listHomeless()
    }

    listHomeless(){
        console.log("%c Homeless People of " + this.name, 'background-color:#A91317')
        for(const citizen of this.citizens){
            if(citizen.home == null){
                console.log(String(citizen))
            }
        }
    }

    shelterCitizen(citizen){
        for(const building of this.buildings){
            if(building.addResident(citizen))return
        }
    }
}