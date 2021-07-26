import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = usestate(0);
	const [text, setText] = useState([]);

	return (
		<section className="section-center">
			<h3>Lorem Ipsum Generator</h3>
		</section>
	);
}

export default App;
