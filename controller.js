"use strict";

function TestApp() {
  const vm = this;

  vm.list = [
    {name: "Mike", age: 27, adult: true},
    {name: "Bill", age: 25, adult: true},
    {name: "Wanda", age: 17, adult: false},
    {name: "Cosmo", age: 37, adult: true},
    {name: "Sam", age: 13, adult: false}
  ];

  vm.add = (person) => {
    vm.list.push(vm.person);
    if (vm.person.age >= 18) {
      vm.person.adult = true;
    } else {
      vm.person.adult = false;
    }

    
    vm.person = [];
  }

  vm.remove = (person) => {
    vm.list.splice(person, 1);
  }

}






angular.module("MyApp").controller("TestApp", TestApp);