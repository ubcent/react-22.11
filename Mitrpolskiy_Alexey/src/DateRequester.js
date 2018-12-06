'use strict';

export default class DataRequester {
	constructor() {
		this._months = [
			'January', 'February', 'March', 'April',
			'May', 'June', 'Jule', 'August',
			'September', 'October', 'November', 'December'
		];
	}

	render() {
		let buttonTime = this._buildHTMLElement('button', 'btnRequestTime', [], 'Check Time');
		buttonTime.onclick = (e) => alert(this._getCurrentDate());
		document.body.appendChild(buttonTime);
	}

	_getCurrentDate() {

		let dateObj = new Date();
		return `${dateObj.getDate()} ${this._months[+dateObj.getMonth()]} ${dateObj.getFullYear()}`;
	}

	/**
	 * Creates HTMLElement based on arguments
	 * @param {string} tag - HTML tag
	 * @param {string} id - Element ID
	 * @param {string[]} classes - Classes to set for object
	 * @param {string} innerHTML - HTML of created tag
	 * @returns {HTMLElement} DOM Object
	 */
	_buildHTMLElement(tag, id = '', classes = [], innerHTML = '', attributes = []) {
		let retElement = document.createElement(tag);
		if (innerHTML.length > 0) {
			retElement.innerHTML = innerHTML;
		}
		if (id.length > 0) {
			retElement.id = id;
		}
		if (classes.length > 0) {
			retElement.className = classes.join(' ');
		}
		if (attributes.length > 0) {
			for (const attrib of attributes) {
				retElement.setAttribute(attrib.name, attrib.value);
			}
		}
		return retElement;
	}
}
