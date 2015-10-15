# example-angular2-jspm-babel-gulp

This is a simple example of using [Angular2](https://angular.io/) with [ES6](http://www.ecma-international.org/ecma-262/6.0/) syntax and compiling it all into a bundle using [JSPM](http://jspm.io/) and [Babel](https://babeljs.io/), and workflow using [Gulp](http://gulpjs.com/).



## Install dependencies

```
npm install

jspm install
```



## Steps to run

1.  .
    ```
    gulp
    ```
2. To view the simple brute force approach, visit the following link. View the developer tool, there is over 200 request made. So this is not production friendly.
    ```
    http://127.0.0.1:8080/index1.html
    ```
3. To view the bundled up approach, visit the following link. View the developer tool, the number of requests are reduced drastically. So this is production friendly.
    ```
    http://127.0.0.1:8080/index2.html
    ```
4. To view the SFX (Self Executable Bundle) approach, visit the following link. View the developer tool, the number of requests are reduced drastically. So this is production friendly.
    ```
    http://127.0.0.1:8080/index2.html
    ```



## Notes
### Gulp tasks
1. Following command is executed to create SFX bundle
    ```
    gulp jspm:bundle-sfx
    ```
2. Following command is executed to create normal bundle
    ```
    gulp jspm:bundle
    ```


### Angular 2
Angular2@2.0.0-alpha.40 requires the following dependencies (as of 10/14/15). Make sure to jspm install following:
1. "@reactivex/rxjs": "npm:@reactivex/rxjs@^5.0.0-alpha.2",
2. "es6-shim": "npm:es6-shim@^0.33.6"
3. "reflect-metadata": "npm:reflect-metadata@^0.1.2"


### jspm.config.js
We use Babel here. The code is return in ES6 which involves annotation. So add the following to "babelOptions" in jspm.config.js
1. "es7.decorators"


### others:
1. bootstrap can also be loaded dynamically thru jspm module loader
2. Reason to choose babel over traceur
    * http://kangax.github.io/compat-table/es6/
    * http://java.ociweb.com/mark/STLJS/ES6.pdf

