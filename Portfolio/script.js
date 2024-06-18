document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const skillInput = document.getElementById('new-skill');
    const addSkillButton = document.getElementById('add-skill');
    const skillsList = document.getElementById('skills-list');
    const collegeInput = document.getElementById('college-name');
    const durationInput = document.getElementById('duration');
    const cgpaInput = document.getElementById('cgpa');
    const subjectInput = document.getElementById('subject');
    const addEducationButton = document.getElementById('add-education');
    const educationList = document.getElementById('education-list');

    // Dark mode toggle
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    // Add new skill
    addSkillButton.addEventListener('click', function() {
        const skill = skillInput.value.trim();
        if (skill) {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill';
            skillElement.textContent = skill;
            skillsList.appendChild(skillElement);
            skillInput.value = '';
        }
    });

    // Add new education entry
    addEducationButton.addEventListener('click', function() {
        const college = collegeInput.value.trim();
        const duration = durationInput.value.trim();
        const cgpa = cgpaInput.value.trim();
        const subject = subjectInput.value.trim();
        if (college && duration && cgpa && subject) {
            const educationElement = document.createElement('div');
            educationElement.className = 'education';
            educationElement.innerHTML = `
                <h3>${college}</h3>
                <p>Duration: ${duration}</p>
                <p>CGPA: ${cgpa}</p>
                <p>Subject: ${subject}</p>
            `;
            educationList.appendChild(educationElement);
            collegeInput.value = '';
            durationInput.value = '';
            cgpaInput.value = '';
            subjectInput.value = '';
        }
    });
});


