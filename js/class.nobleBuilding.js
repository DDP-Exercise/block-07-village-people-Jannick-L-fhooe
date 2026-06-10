"use strict";

import Building from "./class.building.js";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */

export default class NobleBuilding extends Building{
    constructor(name, capacity){
        super(name, capacity);
    }

    addResident(citizen){
        if(this.residents.length < this.capacity && citizen.rank === 1){
            this.residents.push(citizen);
            citizen.home = this;
            return true
        }else{
            return false;
        }
    }
}