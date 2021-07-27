import React, { useState } from "react";
import SingleColor from "./SingleColor";

// special library for generating tint&shade colors
import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			let colors = new Values(color).all(10);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="#f12025"
						className={`${error ? "error" : null}`}
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
					<button type="submit" className="btn">
						submit
					</button>
				</form>
			</section>

			<section className="colors">
				<h4>Color Lists..</h4>
			</section>
		</>
	);
}

export default App;
