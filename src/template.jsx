import createElement, { Fragment } from "complate-dom";

let { slice } = Array.prototype;

export default function({ field, note }, { hint, reset, error }, { state, files }) {
	let rejected = state === "rejected";
	files = slice.call(files);
	return <Fragment>
		{field}
		{reset && (rejected || files.length > 0) &&
				<button type="button">{reset}</button>}

		{hint &&
				<p class="hint">{hint}</p>}
		{note}

		{state === "settled" &&
				<ul>
					{files.map(({ name, size }) => (
						<li>
							<code>{name}</code>
							<small>({Math.round(size / 1024)} kB)</small>
						</li>
					))}
				</ul>}

		{rejected && error &&
				<p class="error">{error}</p>}
	</Fragment>;
}
