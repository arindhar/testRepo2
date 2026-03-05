import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { Vehicle } from "./vehicle.js";
import { Service } from "./service.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// hoisting test //
//a = 420;

console.log(a);
var a = 4;
test();

function test() {
	console.log(a);

	{
		var x = 111;
	}
}

const o = {
	fn: function () {
		let x = 300;
		this.x = 500;
		console.log("xxx " + this);
	},
	fn2: () => {
		//console.log("yyy " + this.x);
	},
};
o.fn();
o.fn2();

const vehicle = new Vehicle();

vehicle.assert();
console.log(vehicle.name);

var greeting = "hi";
const obj = {
	greeting: "hey",
	fo() {
		const greeting = "hola";
		var fo2 = () => {
			const greeting = "hello";
			const arrowFo = () => {
				console.log(this.greeting);
			};
			arrowFo();
		};
		fo2();
	},
};
obj.fo();
// promiises

const service = new Service();

const data = await service.getData();

console.log(data);
