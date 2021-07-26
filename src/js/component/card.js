import React from "react";

export function Card() {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					src="https://www.nicepng.com/png/detail/430-4308859_bang-boom-clipart.png"
					className="card-img-top"
					alt=".."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industrys
						standard dummy text ever since the 1500s.
					</p>
					<a href="#" className="btn btn-primary">
						Fin Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
