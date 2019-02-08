/* eslint-env browser */
import render from "./template";

export default class ManilaFodder extends HTMLElement {
	connectedCallback() {
		this.classList.add("augmented");
		this.setAttribute("aria-live", "polite");

		let field = this.field = this.querySelector("input[type=file]");
		this.note = this.querySelector(".note"); // TODO: customizable
		this.messages = { // TODO: use getters for bridging attributes?
			hint: this.getAttribute("hint"),
			reset: this.getAttribute("reset-label"),
			error: this.getAttribute("error-multi")
		};

		let init = () => {
			this.setState(field.files.length === 0 ? "idle" : "settled");
		};

		this.setPending(false);
		init();

		field.addEventListener("change", init);
		this.addEventListener("click", this.onReset);
		this.addEventListener("dragover", this.onEnter); // XXX: use `dragenter` instead?
		this.addEventListener("dragleave", this.onLeave);
		this.addEventListener("drop", this.onDrop);
	}

	onReset(ev) {
		if(ev.target.nodeName === "BUTTON") { // event delegation -- XXX: coupling WRT template
			this.reset();
		}
	}

	onDrop(ev) {
		ev.preventDefault(); // XXX: cargo-culted; might not be necessary

		let { files } = ev.dataTransfer;
		if(files.length < 2 || this.multiple) {
			try {
				this.field.files = files;
			} catch(err) { // `#files` is read-only in Internet Explorer
				this.setState("rejected"); // TODO: IE-specific error message
				return;
			}
			this.setState("settled");
		} else {
			this.reset();
			this.setState("rejected");
		}
		this.setPending(false);
	}

	onEnter(ev) {
		ev.preventDefault(); // XXX: cargo-culted; might not be necessary

		if(this._pending) { // throttle event (efficiency optimization)
			return;
		}
		ev.dataTransfer.dropEffect = "copy";
		this.setPending(true);
	}

	onLeave(ev) {
		this.setPending(false);
	}

	reset() {
		this.setState("idle");
		this.setPending(false);
	}

	setState(state) {
		// TODO: customizable class names
		// XXX: ideally container-class toggling should be handled within template
		switch(state) {
		case "idle":
			this.field.value = "";
			this.classList.remove("settled");
			this.classList.remove("rejected");
			break;
		case "settled": // TODO: rename?
			this.classList.add("settled");
			this.classList.remove("rejected");
			break;
		case "rejected":
			this.classList.remove("settled");
			this.classList.add("rejected");
			break;
		default:
			throw new Error(`unknown state: \`${state}\``);
		}

		this.render(state);
	}

	render(state, files = this.field.files) { // TODO: optimize via morphdom?
		this.innerHTML = "";
		let ui = render({ field: this.field, note: this.note }, this.messages,
				{ state, files });
		[].concat(ui).forEach(node => {
			this.appendChild(node);
		});
	}

	setPending(value) {
		this._pending = !!value;
		this.classList[value ? "add" : "remove"]("pending"); // TODO: customizable
	}

	get multiple() {
		return this.field.hasAttribute("multiple");
	}
}
