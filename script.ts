// Get DOM elements
const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement | null;
const resumeContainer = document.getElementById("resume-container") as HTMLDivElement | null;
const formContainer = document.querySelector(".form-container") as HTMLDivElement | null;

// Event listener for the "Generate Resume" button
generateResumeButton?.addEventListener("click", function() {
    // Collect user input data
    const nameInput = (document.getElementById("name") as HTMLInputElement | null)?.value || "";
    const emailInput = (document.getElementById("email") as HTMLInputElement | null)?.value || "";
    const phoneInput = (document.getElementById("phone") as HTMLInputElement | null)?.value || "";
    const addressInput = (document.getElementById("address") as HTMLTextAreaElement | null)?.value || "";
    const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement | null)?.value.split(',').map(s => s.trim());
    const experienceInput = (document.getElementById("experience") as HTMLTextAreaElement | null)?.value || "";

    // Handle profile picture upload
    const photoInput = document.getElementById("photo") as HTMLInputElement | null;
    let photoURL = "";
    if (photoInput?.files && photoInput.files[0]) {
        photoURL = URL.createObjectURL(photoInput.files[0]); // Create a temporary URL for the image file
    }

    // Generate the resume HTML content
    const generatedResume = document.getElementById("generated-resume") as HTMLDivElement | null;
    if (generatedResume) {
        generatedResume.innerHTML = `
            <div class="resume-header">
                ${photoURL ? `<img src="${photoURL}" alt="Profile Picture" class="profile-pic">` : ""}
                <h2>${nameInput}</h2>
                <p class="contact-info">Email: ${emailInput}</p>
                <p class="contact-info">Phone: ${phoneInput}</p>
            </div>
            <div class="section">
                <h3>Address</h3>
                <p>${addressInput}</p>
            </div>
            <div class="section">
                <h3>Skills</h3>
                <ul class="skills-list">
                    ${skillsInput.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="section">
                <h3>Experience</h3>
                <p>${experienceInput}</p>
            </div>
        `;

        // Generate and set the shareable link
        const shareableLink = `${window.location.origin}/resume?user=${encodeURIComponent(nameInput)}`;
        const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement | null;
        if (shareableLinkElement) {
            shareableLinkElement.href = shareableLink;
            shareableLinkElement.innerText = shareableLink;
        }

        // Show resume container and hide form container
        resumeContainer!.style.display = "block";
        formContainer!.style.display = "none";
    }
});
