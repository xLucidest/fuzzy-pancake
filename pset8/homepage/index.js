function hello() {
	document.querySelector(".response").style.display = "block"
	let name = document.querySelector("#name")
	let r = ""

	if (name.value === "" || name.value === " ") {
		r = "Please enter your name."
		document.getElementById("hi").innerHTML = r
		console.log(r)
		return false;
	}

	else {
		r = "Hello, " + name.value + "!"
		r += " I see you like the color"

		let color = document.querySelector("#color")
		if (color.value === " blue and black") {
			r += "s blue and black! What good taste you have!"
		}
		else {
			r += color.value + "."
		}

		let instruments = document.querySelector("#instruments")
		if (instruments.value === "0") {
			r += " Although you don't really play any instruments," +
					 " you should try learning one, they can be quite fun and gratifying."
		}
		else if (instruments.value === "1") {
			r += " Very cool! Unfortuantely, I can't hear you play."
		}
		else if (instruments.value === "2") {
			r += " Hm, it appears that you like to play music eh?"
		}
		else if (instruments.value === "3") {
			r += " Wow, planning to turn yourself into an entire band aren't you? That's a lot of instruments!"
		}

		let subject = document.querySelector("#subject")
		r += " What's that? You like " + subject.value + "? That's very cool! Thanks for telling me about you!"
		document.getElementById("hi").innerHTML = r
		console.log(r)
		return true;
	}
}