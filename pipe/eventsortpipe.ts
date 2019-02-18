import { Pipe } from '@angular/core';

@Pipe({name: "sortEvents"})
export class EventSortPipe {
  transform(object: any, args: string): Array<any> {
    object.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return object;
  }
}
/**
 *   NOTE: urgent support - since urgent is not a 'category' we need instead to check 'status'
 *      the filter value for urgent is hardcoded as 1000 until we find a better way to handle since 3 is
 *      probably in use as a category.
 */
@Pipe({ name: "OpportunityPipe" })
export class OpportunityPipe {
    transform(object: any, args?: any): any {
        // console.log('args: ' + args);
        if (args < 1 || args === undefined) {
            return object;
        } else if (args != 1000) {
            // console.log('args not equal to 1000');
            return object.filter(param => param.category_id == args);
            // return object.filter(function(param){
            // 	if(param.category_id == args){
            // 		return param;
            // 	}
            // });
        } else {
           // console.log('Param: ' + JSON.stringify(object));
            return object.filter(param => param.status == 3);
        }
    }
}

@Pipe({name: "PreferencePipe"})
export class PreferencePipe {
  transform(objects: any, preferenceObj?: any): any {
		// when user is not logged in, preferenceObj gets set to undefined
			if(preferenceObj === undefined){
				return objects;
			} else if (preferenceObj.locations.length) {
				let preferredLocations = preferenceObj.locations.map( (location) => {
					return location.location_id;
				});
				return objects.filter((dfwEvent) => {
					if(preferredLocations.includes(dfwEvent.location_id)) {
						return dfwEvent;
					}
				});
			} else {
				// shows user all the events if user have no location preference
				return objects;
			} 
  }
}