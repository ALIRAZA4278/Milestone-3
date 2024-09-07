var _a, _b, _c;
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
var profilePictureInput = document.getElementById("profilePicture");
var profilePicturePreview = document.getElementById("profilePicturePreview");
var educations = [];
var workExperiences = [];
var skills = [];
var profilePictureURL = undefined;
var renderResume = function () {
    resumeOutput.innerHTML = "\n    <div class=\"resume-container\">\n      <h2 class=\"resume-title\">Resume</h2>\n      \n      <h3 class=\"section-title\">Personal Information</h3>\n      <div class=\"personal-info\">\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n        <p><strong>Name:</strong> ").concat(document.getElementById("name").value, "</p>\n        <p><strong>Email:</strong> ").concat(document.getElementById("email").value, "</p>\n        <p><strong>Phone:</strong> ").concat(document.getElementById("phone").value, "</p>\n      </div>\n\n      <h3 class=\"section-title\">Education</h3>\n      <ul class=\"education-list\">\n        ").concat(educations
        .map(function (edu) { return "\n            <li class=\"education-item\">\n              ".concat(edu.school, " - ").concat(edu.degree, ", ").concat(edu.field, " (").concat(edu.years, ")\n            </li>\n          "); })
        .join(''), "\n      </ul>\n\n      <h3 class=\"section-title\">Skills</h3>\n      <ul class=\"skills-list\">\n        ").concat(skills
        .map(function (skill) { return "\n            <li class=\"skills-item\">\n              ".concat(skill.name, " (").concat(skill.level, ")\n            </li>\n          "); })
        .join(''), "\n      </ul>\n      \n      <h3 class=\"section-title\">Work Experience</h3>\n      <ul class=\"work-experience-list\">\n        ").concat(workExperiences
        .map(function (exp) { return "\n            <li class=\"work-experience-item\">\n              ".concat(exp.company, " - ").concat(exp.jobTitle, " (").concat(exp.years, ")\n              <br><span class=\"work-description\">").concat(exp.description, "</span>\n            </li>\n          "); })
        .join(''), "\n      </ul>\n    </div>\n  ");
};
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var field = document.getElementById("field").value;
    var years = document.getElementById("years").value;
    if (school && degree && field && years) {
        educations.push({ school: school, degree: degree, field: field, years: years });
        renderResume();
    }
});
(_b = document.getElementById("addExperience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    e.preventDefault();
    var company = document.getElementById("company").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var years = document.getElementById("years").value;
    var description = document.getElementById("jobDescription").value;
    if (company && jobTitle && years && description) {
        workExperiences.push({ company: company, jobTitle: jobTitle, years: years, description: description });
        renderResume();
    }
});
(_c = document.getElementById("add-Skills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (e) {
    e.preventDefault();
    var name = document.getElementById("text").value;
    var level = document.getElementById("option").value;
    if (name && level) {
        skills.push({ name: name, level: level });
        renderResume();
    }
});
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    renderResume();
});
profilePictureInput.addEventListener("change", function (event) {
    var _a;
    var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicturePreview.src = profilePictureURL;
            profilePicturePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});
