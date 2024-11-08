// Get DOM elements
var generateResumeButton = document.getElementById("generate-resume");
var resumeContainer = document.getElementById("resume-container");
var formContainer = document.querySelector(".form-container");
// Event listener for the "Generate Resume" button
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f;
    // Collect user input data
    var nameInput = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
    var emailInput = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
    var phoneInput = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || "";
    var addressInput = ((_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.value) || "";
    var skillsInput = (_e = document.getElementById("skills")) === null || _e === void 0 ? void 0 : _e.value.split(',').map(function (s) { return s.trim(); });
    var experienceInput = ((_f = document.getElementById("experience")) === null || _f === void 0 ? void 0 : _f.value) || "";
    // Handle profile picture upload
    var photoInput = document.getElementById("photo");
    var photoURL = "";
    if ((photoInput === null || photoInput === void 0 ? void 0 : photoInput.files) && photoInput.files[0]) {
        photoURL = URL.createObjectURL(photoInput.files[0]); // Create a temporary URL for the image file
    }
    // Generate the resume HTML content
    var generatedResume = document.getElementById("generated-resume");
    if (generatedResume) {
        generatedResume.innerHTML = "\n            <div class=\"resume-header\">\n                ".concat(photoURL ? "<img src=\"".concat(photoURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : "", "\n                <h2>").concat(nameInput, "</h2>\n                <p class=\"contact-info\">Email: ").concat(emailInput, "</p>\n                <p class=\"contact-info\">Phone: ").concat(phoneInput, "</p>\n            </div>\n            <div class=\"section\">\n                <h3>Address</h3>\n                <p>").concat(addressInput, "</p>\n            </div>\n            <div class=\"section\">\n                <h3>Skills</h3>\n                <ul class=\"skills-list\">\n                    ").concat(skillsInput.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"section\">\n                <h3>Experience</h3>\n                <p>").concat(experienceInput, "</p>\n            </div>\n        ");
        // Generate and set the shareable link
        var shareableLink = "".concat(window.location.origin, "/resume?user=").concat(encodeURIComponent(nameInput));
        var shareableLinkElement = document.getElementById("shareable-link");
        if (shareableLinkElement) {
            shareableLinkElement.href = shareableLink;
            shareableLinkElement.innerText = shareableLink;
        }
        // Show resume container and hide form container
        resumeContainer.style.display = "block";
        formContainer.style.display = "none";
    }
});
