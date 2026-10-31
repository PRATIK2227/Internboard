
/*{INTERNBOARD HOME PAGE JAVASCRIPT} */

document.addEventListener("DOMContentLoaded", function () {

/*{SEARCH PANEL} */

    const searchButton =
        document.getElementById("searchButton");

    const searchOverlay =
        document.getElementById("searchOverlay");

    const closeSearch =
        document.getElementById("closeSearch");

    const internshipSearch =
        document.getElementById("internshipSearch");


    /* OPEN SEARCH */

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            searchOverlay.classList.add("show");

            document.body.style.overflow = "hidden";

            setTimeout(function () {

                internshipSearch.focus();

            }, 150);

        });

    }


    /* CLOSE SEARCH */

    function closeSearchPanel() {

        searchOverlay.classList.remove("show");

        document.body.style.overflow = "";

    }


    if (closeSearch) {

        closeSearch.addEventListener(
            "click",
            closeSearchPanel
        );

    }


    /* CLOSE WHEN CLICKING OUTSIDE */

    if (searchOverlay) {

        searchOverlay.addEventListener(
            "click",
            function (event) {

                if (event.target === searchOverlay) {

                    closeSearchPanel();

                }

            }
        );

    }


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                searchOverlay.classList.contains("show")
            ) {

                closeSearchPanel();

            }

        }
    );


    /*{SEARCH SUGGESTIONS} */

    const popularButtons =
        document.querySelectorAll(
            ".search-suggestions button"
        );

    if (popularButtons.length) {
        popularButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                if (internshipSearch) {
                    internshipSearch.value = button.textContent.trim();
                    internshipSearch.focus();
                }
            });
        });
    }


    /*{EXPLORE INTERNSHIPS BUTTON} */

    const exploreBtn =
        document.getElementById("exploreBtn");


    if (exploreBtn) {

        exploreBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "Browse.html";

            }
        );

    }

    /*{VIEW ALL INTERNSHIPS} */

    const viewAllBtn =
        document.getElementById("viewAllBtn");


    if (viewAllBtn) {

        viewAllBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "Browse.html";

            }
        );

    }

    /*{GET STARTED BUTTON} */

    const getStartedBtn =
        document.querySelector(
            ".get-started-btn"
        );


    if (getStartedBtn) {

        getStartedBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "register.html";

            }
        );

    }

    /*{LOGIN BUTTON} */

    const loginBtn =
        document.querySelector(
            ".login-btn"
        );


    if (loginBtn) {

        loginBtn.addEventListener(
            "click",
            function () {

                window.location.href = "login.html";

            }
        );

    }



    /*{WATCH VIDEO MODAL} */

    const watchVideoBtn =
        document.getElementById(
            "watchVideoBtn"
        );

    const videoModal =
        document.getElementById(
            "videoModal"
        );

    const closeVideo =
        document.getElementById(
            "closeVideo"
        );


    if (watchVideoBtn) {

        watchVideoBtn.addEventListener(
            "click",
            function () {

                try {
                    const studentProfile = window.localStorage.getItem("internboard.studentProfile");
                    if (!studentProfile) {
                        window.location.href = "login.html";
                        return;
                    }

                    const parsedProfile = JSON.parse(studentProfile);
                    if (!parsedProfile || typeof parsedProfile.name !== "string" ||
                        typeof parsedProfile.email !== "string") {
                        throw new Error("The saved student profile is invalid.");
                    }
                } catch (error) {
                    console.error("Could not verify the InternBoard student sign-in.", error);
                    window.alert("Please sign in again to access this video.");
                    window.location.href = "login.html";
                    return;
                }

                videoModal.classList.add(
                    "show"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    }


    if (closeVideo) {

        closeVideo.addEventListener(
            "click",
            function () {

                videoModal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "";

            }
        );

    }


    if (videoModal) {

        videoModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === videoModal
                ) {

                    videoModal.classList.remove(
                        "show"
                    );

                    document.body.style.overflow =
                        "";

                }

            }
        );

    }

    /*{VIEW RESULT BUTTONS} */

    const viewButtons =
        document.querySelectorAll(
            ".view-result"
        );


    viewButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(
                        ".internship-result"
                    );


                const title =
                    card.querySelector(
                        "h3"
                    ).textContent;


                alert(
                    "Opening internship: " +
                    title.trim()
                );

            }
        );

    });
    /*{KEYBOARD SHORTCUT
     CTRL + K / CMD + K
    } */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                (event.ctrlKey ||
                    event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                searchOverlay.classList.add(
                    "show"
                );

                document.body.style.overflow =
                    "hidden";

                setTimeout(function () {

                    internshipSearch.focus();

                }, 100);

            }

        }
    );
       /*{CONSOLE MESSAGE} */
    console.log(
        "InternBoard Home Page Loaded Successfully."
    );

});