import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');

	const onTyping = (e) => {
		// TODO: Fix e not having .target.value on first char
		setText(e.target.value.trim().replace(/[\W|\d|\s]/g, ''));
	};

	const generateVarations = (text) =>
		// Filter duplicates
		[...new Set(...[...text].map((e, i) =>
			// Generate [length, length] Array
			new Array(text.length).fill()
				// Make combinations with varied x for e
				.map((e, i) => ([...(text.repeat(2))].splice(i + 1, text.length - 1))
					// Turn to strings again
					.reduce((c, v) => c + v, ''))
		))];


	const variationsToList = (variations) => (
		<div>
			{variations.map((v, i) => (<div key={i}>{v}</div>))}
		</div>
	);

	return (
		<div className="App">
			<div className="input">
				<input className="input" type="text" value={text} onChange={onTyping} />
			</div>
			<div className="output">
				{variationsToList(generateVarations(text))}
			</div>
		</div>
	);
}

export default App;
