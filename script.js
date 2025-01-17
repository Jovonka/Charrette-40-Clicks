document.addEventListener("DOMContentLoaded", () => {
    // Existing Event Listeners (no changes here)
    const bubbleDiv = document.getElementById('bubbleEffectDiv');
    bubbleDiv.addEventListener('mouseenter', () => {
        bubbleDiv.classList.add('bubble-loop');
    });
    bubbleDiv.addEventListener('mouseleave', () => {
        bubbleDiv.classList.remove('bubble-loop');
    });
    document.querySelector('.background-toggle').addEventListener('click', function() {
        document.body.classList.toggle('white-bg');
    });
    // Add event listeners for other animations (e.g., background toggle, explode)
    document.querySelector('.circle-animation').addEventListener('click', function() {
        this.classList.add('clicked');
    });
    document.querySelector('.circle-animation').addEventListener('mouseleave', function() {
        this.classList.remove('clicked');
    });
    document.querySelector('.fireworks').addEventListener('click', function() {
        this.classList.add('clicked');
    });
    document.querySelector('.horizontal-line').addEventListener('click', function() {
        this.classList.add('clicked');
    });
    document.querySelector('.popup').addEventListener('click', function() {
        this.classList.add('clicked');
    });
    document.querySelector('.shape-shift').addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
  
    
    
    
        // Glowing Rotate
        document.querySelector('.glowing-rotate').addEventListener('mouseenter', function() {
            this.classList.add('glowing-rotate');
        });
    
      
       
    
        // Zoom Bounce
        document.querySelector('.zoom-bounce').addEventListener('mouseenter', function() {
            this.classList.add('zoom-bounce');
        });
    
       
    });

  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    // Reference the "disappearDiv"
    const disappearDiv = document.getElementById("disappearDiv");

    // Add an event listener for the click event
    disappearDiv.addEventListener("click", () => {
        // Select all divs with the class "interactive-div"
        const allDivs = document.querySelectorAll(".interactive-div");

        // Fade out all divs
        allDivs.forEach(div => {
            div.style.opacity = "0";
        });

        // Optional: Completely hide them after the fade-out (cleanup)
        setTimeout(() => {
            allDivs.forEach(div => {
                div.style.display = "none";
            });
        }, 500); // Matches the CSS transition time
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const controlDiv = document.getElementById("controlDiv");
    const container = controlDiv.parentElement; // Assuming all divs are direct children of the body

    // Save the original order
    const originalOrder = Array.from(container.children);

    // Shuffle the divs
    const shuffleDivs = () => {
        const divs = Array.from(container.children);
        const shuffled = divs.sort(() => Math.random() - 0.5);
        container.innerHTML = ""; // Clear the container
        shuffled.forEach(div => container.appendChild(div)); // Append in new order
    };

    // Restore the original order
    const restoreOrder = () => {
        container.innerHTML = ""; // Clear the container
        originalOrder.forEach(div => container.appendChild(div)); // Append in original order
    };

    // Add click event to the control div
    controlDiv.addEventListener("click", () => {
        if (container.children[0] !== originalOrder[0]) {
            restoreOrder(); // Restore the original order if randomized
        } else {
            shuffleDivs(); // Shuffle the divs if in the original order
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  
    const shakeAndDropDiv = document.getElementById("shakeAndDropDiv");
    const allDivs = document.querySelectorAll(".interactive-div");
    const body = document.body;

    const shakeScreen = () => {
        body.classList.add("shake");
        setTimeout(() => {
            body.classList.remove("shake"); // Remove the shake effect after animation
        }, 500); // Duration of shake (matches CSS)
    };

    const dropDivs = () => {
        allDivs.forEach(div => {
            // Randomize X and Y positions for the divs to fall into
            const randomX = Math.random() * (window.innerWidth - div.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - div.offsetHeight);

            // Apply random movement to make the div "fall"
            div.style.transform = `translate(${randomX}px, ${randomY}px)`;
            div.classList.add('drop');
        });
    };

    const resetDivPositions = () => {
        allDivs.forEach(div => {
            div.style.transform = 'translate(0, 0)';
        });
    };

    // When the control div is clicked, first shake, then drop the divs
    shakeAndDropDiv.addEventListener("click", () => {
        shakeScreen(); // Trigger shake effect
        setTimeout(dropDivs, 500); // Trigger drop after shake
    });

    // Optional: Reset positions when the 'shake and drop' div is clicked
    shakeAndDropDiv.addEventListener("click", () => {
        resetDivPositions(); // Reset all divs back to their original positions
    });
});
// Select the black hole and other interactive elements
const blackHole = document.querySelector('.interactive-div.blackhole');
const elements = document.querySelectorAll('.interactive-div'); // All elements except the black hole

// Function to apply the sucking effect based on distance
function applySuckingEffect() {
    elements.forEach((element) => {
        const rect = blackHole.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calculate distance between the center of the black hole and the element
        const distX = Math.abs(rect.left + rect.width / 2 - (elementRect.left + elementRect.width / 2));
        const distY = Math.abs(rect.top + rect.height / 2 - (elementRect.top + elementRect.height / 2));
        const distance = Math.sqrt(distX * distX + distY * distY);

        const maxDistance =300; // Max distance for the sucking effect

        // If the element is within the maxDistance from the black hole
        if (distance < maxDistance) {
            const scale = 1 - distance / maxDistance; // Scale factor based on proximity
            element.style.transform = `scale(${scale})`; // Scale elements closer to the black hole
            element.style.transition = 'transform 3s, opacity 3s ease-out'; // Smooth transition
            element.classList.add('element-sucked'); // Apply "sucked" effect
        } else {
            // Reset transform and opacity if not near the black hole
            element.style.transform = 'scale(1)';
            element.classList.remove('element-sucked');
        }
    });
}

// Add event listener for clicking on the black hole to start the sucking effect
blackHole.addEventListener('click', function() {
    // Continuously apply the sucking effect when the black hole is clicked
    setInterval(applySuckingEffect, 30); // Adjust the interval for smoother effects

    // Optionally, you can change the black hole appearance when clicked
    this.classList.add('active');
});

// Add event listener to stop the sucking effect when clicking anywhere else
document.addEventListener('click', function(event) {
    if (!blackHole.contains(event.target)) {
        // If the click is outside the black hole, stop the sucking effect
      
        blackHole.classList.remove('active'); // Reset black hole appearance
    }
}, true); // Capture the click event in the capturing phase to detect outside clicks


// Select the dance trigger button and the interactive elements
const danceTrigger = document.querySelector('.interactive-div.dance-trigger');
const elementsToDance = document.querySelectorAll('.div-container'); // All elements except the dance trigger

// Function to toggle the "dancing" effect
function toggleDanceEffect() {
    elementsToDance.forEach((element) => {
        // Toggle the 'dancing' class to start/stop the animation
        element.classList.toggle('dancing');
    });
}

// Add event listener to start the dance when the dance trigger is clicked
danceTrigger.addEventListener('click', toggleDanceEffect);
// Select the video container div
const videoContainerDiv = document.querySelector('.video-container');

// Add a hover effect for GIF
videoContainerDiv.addEventListener('mouseenter', function() {
    // Play the GIF by setting it as background image on hover
    this.style.backgroundImage = 'url("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNoeGI1eW5sajVoa3NkamlvZ290MDU5dHo3aXV3eGk5cTQ3a2xpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DMNwEOCIHouzu/giphy.gif")'; // Replace with your GIF path
    this.style.backgroundSize = 'cover';
    this.style.backgroundPosition = 'center';
});

// Reset the background on mouseout (optional)
videoContainerDiv.addEventListener('mouseleave', function() {
    this.style.backgroundImage = ''; // Clear the background image on hover out
});

// Add a click event to toggle the 'clicked' class and keep the GIF displayed
videoContainerDiv.addEventListener('click', function() {
    this.classList.toggle('clicked');  // Toggle the 'clicked' class to keep the GIF displayed
});

// Select the cursor-toggle div
const cursorToggleDiv = document.querySelector('.cursor-toggle');

// Add click event to toggle the custom cursor class
cursorToggleDiv.addEventListener('click', function() {
    // Toggle the 'custom-cursor' class to change the cursor
    this.classList.toggle('custom-cursor');
});

const morphDiv = document.querySelector('.morph');

const shapes = ['shape-circle', 'shape-triangle', 'shape-rhombus', 'shape-star'];

// Function to randomly select a shape and apply it
function morphShape() {
    // Remove any existing shape class
    morphDiv.classList.remove(...shapes);
    
    // Randomly select a shape class and add it to the div
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    morphDiv.classList.add(randomShape);
}

// Add click event listener to the div
morphDiv.addEventListener('click', morphShape);

const rainbowDiv = document.querySelector('.rainbow');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply rainbow colors to all divs
function changeColorsToRainbow() {
    const allDivs = document.querySelectorAll('.interactive-div');

    allDivs.forEach(div => {
        div.style.backgroundColor = getRandomColor();
    });
}

// Add click event listener to the rainbow div
rainbowDiv.addEventListener('click', changeColorsToRainbow);

// Select the perspective trigger div and all divs with the class "interactive-div"
const perspectiveDiv = document.querySelector('.perspective');
const allDivs = document.querySelectorAll('.interactive-div');

// Add event listener to trigger the 3D perspective effect when clicked
perspectiveDiv.addEventListener('click', function() {
    // Toggle the perspective effect on the container
    document.body.classList.toggle('perspective-active');
});


document.getElementById('redirectDiv').addEventListener('click', function () {
    window.open('https://www.omfgdogs.com/#', '_blank'); // Opens in a new tab
});

// Select the star spawner div
const starSpawner = document.querySelector('.interactive-div.star-spawner');

// Function to generate a random position
function getRandomPosition() {
    const randomX = Math.random() * window.innerWidth; // Random X within the viewport width
    const randomY = Math.random() * window.innerHeight; // Random Y within the viewport height
    return { x: randomX, y: randomY };
}

// Function to spawn a star
function spawnStar() {
    const { x, y } = getRandomPosition();

    // Create the star element
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Append the star to the body
    document.body.appendChild(star);

    // Remove the star after its animation
    setTimeout(() => {
        star.remove();
    }, 3000); // Matches the duration of the fade-out animation
}

// Add click event to the star spawner
starSpawner.addEventListener('click', function () {
    // Spawn multiple stars randomly
    for (let i = 0; i < 10; i++) { // Adjust the number of stars to spawn
        spawnStar();
    }
});
