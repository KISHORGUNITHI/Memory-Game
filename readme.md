# 🎮 Simon Game (Memory Game)

A browser-based implementation of the classic **Simon Memory Game**, built from scratch using **HTML, CSS, and JavaScript**.

This project focuses on **logic building, state management, and event-driven programming**, rather than framework usage.

---

## 📸 Game Preview

![Simon Game Preview](./58aab2e5-ebca-4523-bf13-2cd94ba5632e.png)

---

## 🧠 Game Concept

Simon is a memory game where:

1. The game generates a **random sequence of colors**
2. The player must **repeat the sequence in the correct order**
3. Each level adds **one new color** to the sequence
4. A wrong input results in **Game Over**
5. The game restarts when the user presses any key

---

## 🛠️ Technologies Used

- **HTML** – structure
- **CSS** – styling and animations
- **JavaScript** – game logic (event-driven)

No libraries or frameworks were used.

---

## ⚙️ How the Game Works (Logic Overview)

### Core State Variables

- `random_click[]` → stores the game-generated sequence  
- `user_click[]` → stores the user’s input sequence  
- `level` → tracks current level  
- `started` → controls game start / restart  

---

### Game Flow (Event-Driven)

1. **Game Start**
   - Triggered by a `keydown` event
   - Initializes the first random color

2. **Sequence Generation**
   - One random color is added per level
   - Button flashes visually using CSS classes

3. **User Interaction**
   - Button clicks are captured via event listeners
   - Each click is validated step-by-step

4. **Validation**
   - If input matches → continue
   - If entire sequence is matched → next level
   - If mismatch → Game Over

5. **Restart**
   - Game resets state
   - Waits for another key press

---

## 🧩 Key Learning Outcomes

- Difference between **loop-driven** and **event-driven** programming
- Importance of **state management**
- Avoiding multiple event listeners
- Understanding **asynchronous execution**
- Building logic independent of language syntax

---

## 🚀 How to Run Locally

1. Clone or download the repository
2. Open `index.html` in your browser
3. Press any key to start playing

---

## 📌 Future Improvements (Optional)

- Disable user input during sequence playback
- Add sound effects
- Add high-score tracking
- Improve mobile responsiveness

---

## 🧑‍💻 Author

Built as a **logic-first learning project**, focusing on understanding **how problems should be modeled and solved**, not just how to write code.

---

> “The biggest learning was shifting from procedural (C/C++) thinking to event-driven (JavaScript) thinking.”

