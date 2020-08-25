import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

//create your first component
export function Home() {
	const { actions, store } = useContext(Context);
	return (
		<div className="container">
			<div className="bg-light offset-2 col-8 mt-5 rounded border shadow">
				<h1 className="text-center">Diligence´s</h1>
				<div className="ml-3">
					<label className="font-weight-bold">New task :</label>
					<input onKeyPress={e => actions.addTask(e)} className="ml-1 border-0" type="text" />
				</div>
				<ol>
					{store.title.map((task, index) => {
						if (task.done == true)
							return (
								<li
									className="d-flex border justify-content-sm-between p-2 align-items-center"
									key={index}>
									<span className="text-muted">{task["label"]}</span>
									<span
										onClick={() => {
											actions.removeTask(index);
										}}
										className="text-danger">
										<i className="fa fa-times" aria-hidden="true" />
									</span>
								</li>
							);
					})}
				</ol>
				<footer className="border-top row p-2"> {store.item} task </footer>
			</div>
		</div>
	);
}
