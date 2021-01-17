# Description

This app intends to represent an E-commerce application. The user can add mock items (comming from an API) to their mock shopping cart.

The state of this application (products on shopping cart and respective data) is mannaged by ngrx.

When adding products to the shopping cart from the home page, if the respective product already exists, the count will be incremented, and the subtotal updated as well.
While on shopping cart page, the user can add or remove the quantity of each product and remove not intend products.

The state of the ngrx is also on the local storage of the browser in order to fill the sate whenever the user refreshes the page.

Due to the size of the application, SSR was not included, but it is definitely something worthy to look at in in the future since server rendering offers great advantages, like pre-rendering our app on the fly which will help users on low networks, as well improving SEO crawlers to index our app.

Regarding future work, some reducers can be improved by using @Effects for instance but again, for the purpose of the application I've choosen to keep as it is.

The default tests created along with the compoents were adjusted by importing the necessary modules and are OK.
I've also included test for the reducer and they are OK as well.
In fact, creating the tests was the most difficult part of this project since I'm not as familiar whith those as I am with Angular itself. It's somthing to be improved.

# NgECommerceLite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
