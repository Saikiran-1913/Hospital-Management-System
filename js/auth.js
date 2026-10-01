document
    .getElementById("loginForm")
    ?.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("role").value;


        if (email === "" || password === "" || role === "") {

            alert("Please fill all the fields.");

            return;
        }


        alert(
            "Login successful!\n\n" +
            "Role: " +
            role.toUpperCase()
        );


        /*
            Dashboard navigation will be connected
            after we create the dashboards.
        */

    });


document
    .getElementById("signupForm")
    ?.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("signupEmail").value;

        const phone =
            document.getElementById("phone").value;

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill all the fields.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert(
            "Account created successfully!\n\n" +
            "Welcome, " + name
        );


        window.location.href = "login.html";

    });