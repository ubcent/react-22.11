'use strict';

export default class Person {
	constructor(name, middlename, surname) {
		this._name = name;
		this._middlename = middlename;
		this._surname = surname;
	}

	toString() {
		return `${this._name} ${this._middlename} ${this._surname}`;
	}
}