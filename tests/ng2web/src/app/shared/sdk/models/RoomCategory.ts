/* tslint:disable */
import {
  Category,
  Room
} from '../index';

declare var Object: any;
export interface RoomCategoryInterface {
  "id"?: any;
  "CategoryId": any;
  "RoomId": any;
}

export class RoomCategory implements RoomCategoryInterface {
  "id": any;
  "CategoryId": any;
  "RoomId": any;
  constructor(data?: RoomCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RoomCategory`.
   */
  public static getModelName() {
    return "RoomCategory";
  }
  /**
  * @method factory
  * @author João Ribeiro
  * @license MIT
  * This method creates an instance of RoomCategory for dynamic purposes.
  **/
  public static factory(data: RoomCategoryInterface): RoomCategory{
    return new RoomCategory(data);
  }
  /**
  * @method getModelDefinition
  * @author João Ribeiro
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'RoomCategory',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "CategoryId": {
          name: 'CategoryId',
          type: 'any'
        },
        "RoomId": {
          name: 'RoomId',
          type: 'any'
        }
      }
    }
  }
}
