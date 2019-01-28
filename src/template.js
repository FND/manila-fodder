import { html, render } from "lit-html";

export default (container, field, note, messages, state) => {
	render(template(field, note, messages, state), container);
};

function template(field, note, { hint, reset, error }, state) {
	let files = [...field.files];
	let rejected = state === "rejected";
	return html`
${field}
${optional(reset && (rejected || files.length > 0) &&
		html`<button type="button">${reset}</button>`)}

${optional(hint &&
		html`<p class="hint">${hint}</p>`)}
${note}

${optional(state === "settled" && renderFiles(...files))}

${optional(rejected && error &&
		html`<p class="error">${error}</p>`)}
	`;
}

function renderFiles(...files) {
	return html`
<ul>
	${files.map(({ name, size }) => {
		size = Math.round(size / 1024);
		return html`<li>
			<code>${name}</code>
			<small>(${size} kB)</small>
		</li>`;
	})}
</ul>
	`;
}

function optional(val) {
	return val === false ? null : val;
}
