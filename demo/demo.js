/* eslint-env browser */
import ManilaFodder from "../src/element";
import render from "../src/template";

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
			this._files = state === "settled" ? FILES : null;
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

	setState(state) {
		super.setState(state);
		let files = this._files;
		if(files) { // re-render to inject dummy files
			render(this, { field: this.field, note: this.note }, this.messages,
					{ state, files });
		}
	}
});
