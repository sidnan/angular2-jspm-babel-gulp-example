import {Component, View} from 'angular2/angular2'
/*
* angular2/angular2 => 'anuglae2' before '/'
* should match the name specified in package.json
* "jspm.dependency" attribute
'angular2' after '/' is the name of the dependency file
* downloaded which in this case is 'angular2.js'
*/

@Component({
  selector: 'one'
})
@View({
  template: `<h1>component 1</h1>`
})
export class One {

}
