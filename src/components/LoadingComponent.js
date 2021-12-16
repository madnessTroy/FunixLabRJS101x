import React from "react";

export const Loading = () => {
	return (
		<div className="text-center mt-5">
			<div className="col-12">
				<button class="btn btn-primary" type="button" disabled>
					<span class="spinner-border spinner-border-sm"></span>
					Loading . . .
				</button>
			</div>
		</div>
	);
};
