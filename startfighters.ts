import {SpaceCraft, ContainerShip} from './base-ships'

export class MillenniumFalcon extends SpaceCraft implements ContainerShip {
    
    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        } else {
            console.log('Faied to jump into hyperspace')
        }
    }
}