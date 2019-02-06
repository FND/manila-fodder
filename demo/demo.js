/* eslint-env browser */
import ManilaFodder from "../src/element";

let FILES = [{
	name: "minutes.txt",
	size: 32768
}, {
	name: "logo.png",
	size: 65536
}];

customElements.define("manila-fodder", class extends ManilaFodder {
	connectedCallback() {
		let state = this.getAttribute("state");
		if(state) {
			this._files = state === "settled" ? FILES : [];
			setTimeout(() => {
				this.setState(state);
			}, 1);
		}

		if(this.hasAttribute("pending")) {
			setTimeout(() => {
				this.setPending(true);
			}, 1);
		}

		super.connectedCallback();
	}

	render(state, files) {
		super.render(state, files || this._files);
	}
});
