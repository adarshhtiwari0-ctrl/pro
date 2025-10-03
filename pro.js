// Proposal messages
const proposalMessages = [
  "Will you be mine?",
  "I promise to make you smile every day!",
  "You make my world complete!",
  "I can't imagine life without you!",
  "You're my everything!",
  "Please say yes! I like you so much!",
]

// State
let proposalIndex = 0
let musicStarted = false

// DOM Elements
const app = document.getElementById("app")
const bgMusic = document.getElementById("bgMusic")
const earphonePopup = document.getElementById("earphonePopup")
const proposalPopup = document.getElementById("proposalPopup")
const congratsScreen = document.getElementById("congratsScreen")
const getReadyScreen = document.getElementById("getReadyScreen")
const pressMeBtn = document.getElementById("pressMeBtn")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const proposalText = document.getElementById("proposalText")
const finalMessage = document.getElementById("finalMessage")
const floatingElements = document.getElementById("floatingElements")

// Event Listeners
pressMeBtn.addEventListener("click", handlePressMe)
yesBtn.addEventListener("click", handleYes)
noBtn.addEventListener("click", handleNo)

// Functions
function handlePressMe() {
  earphonePopup.classList.add("hidden")
  musicStarted = true
  app.classList.add("music-started")

  // Play music
  bgMusic.play().catch((err) => console.log("Audio play failed:", err))

  // Create floating elements
  createFloatingElements()

  // Show get ready screen
  getReadyScreen.classList.remove("hidden")

  // Show proposal after 2 seconds
  setTimeout(() => {
    getReadyScreen.classList.add("hidden")
    showProposal()
  }, 2000)
}

function showProposal() {
  proposalText.textContent = proposalMessages[proposalIndex]
  proposalPopup.classList.remove("hidden")

  if (proposalIndex >= 6) {
    noBtn.style.display = "none"
    finalMessage.classList.remove("hidden")
  }
}

function handleYes() {
  proposalPopup.classList.add("hidden")
  congratsScreen.classList.remove("hidden")
}

function handleNo() {
  if (proposalIndex < 5) {
    proposalIndex++
    proposalText.textContent = proposalMessages[proposalIndex]
  } else if (proposalIndex === 5) {
    // Last attempt - animate No button out
    noBtn.classList.add("slide-out")
    setTimeout(() => {
      proposalIndex = 6
      noBtn.style.display = "none"
      finalMessage.classList.remove("hidden")
    }, 500)
  }
}

function createFloatingElements() {
  // Create hearts
  for (let i = 0; i < 20; i++) {
    createFloatingHeart()
  }

  // Create flowers
  for (let i = 0; i < 15; i++) {
    createFloatingFlower()
  }

  // Create sparkles
  for (let i = 0; i < 10; i++) {
    createFloatingSparkle()
  }
}

function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.className = "floating-heart"
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDelay = Math.random() * 5 + "s"
  heart.style.animationDuration = 4 + Math.random() * 3 + "s"
  heart.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    `
  floatingElements.appendChild(heart)

  // Remove after animation
  setTimeout(
    () => {
      heart.remove()
      createFloatingHeart() // Create new one
    },
    (4 + Math.random() * 3) * 1000,
  )
}

function createFloatingFlower() {
  const flower = document.createElement("div")
  flower.className = "floating-flower"
  flower.style.left = Math.random() * 100 + "%"
  flower.style.animationDelay = Math.random() * 5 + "s"
  flower.style.animationDuration = 5 + Math.random() * 3 + "s"
  flower.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0 0 6 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0 0-6 3 3 0 0 0-3 3"></path>
        </svg>
    `
  floatingElements.appendChild(flower)

  setTimeout(
    () => {
      flower.remove()
      createFloatingFlower()
    },
    (5 + Math.random() * 3) * 1000,
  )
}

function createFloatingSparkle() {
  const sparkle = document.createElement("div")
  sparkle.className = "floating-sparkle"
  sparkle.style.left = Math.random() * 100 + "%"
  sparkle.style.animationDelay = Math.random() * 5 + "s"
  sparkle.style.animationDuration = 4 + Math.random() * 3 + "s"
  sparkle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v18M3 12h18M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34"></path>
        </svg>
    `
  floatingElements.appendChild(sparkle)

  setTimeout(
    () => {
      sparkle.remove()
      createFloatingSparkle()
    },
    (4 + Math.random() * 3) * 1000,
  )
}
