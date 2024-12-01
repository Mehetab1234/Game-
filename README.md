# Flappy Bird Game

Welcome to the **Flappy Bird Game** project! This is a fun and interactive browser game built using **HTML5**, **CSS3**, and **JavaScript**. Fly through the pipes, score points, and challenge yourself to achieve the highest score possible.

## 🚀 Live Demo

Play the game directly from your browser:  
[Flappy Bird Game](https://<your-username>.github.io/<repository-name>/)

---

## 🎮 How to Play

1. Open the game in your browser.  
2. Use your keyboard (any key) to make the bird jump.  
3. Avoid the pipes and the ground while navigating through the gaps.  
4. The longer you survive, the higher your score!  
5. Try to beat your high score and challenge your friends.

---

## 📂 Project Structure

Below is the structure of the project files:

```plaintext
/flappy-bird
  ├── index.html       # Main HTML file that sets up the canvas and loads scripts
  ├── style.css        # Styling for the game canvas and page layout
  ├── index.js         # Core game logic written in JavaScript
  ├── assets/          # Contains all game assets
  │   ├── bird.png         # Image of the bird character
  │   ├── bg.png           # Background image
  │   ├── pipe-top.png     # Top pipe image
  │   ├── pipe-bottom.png  # Bottom pipe image
  │   └── ground.png       # Ground image
  └── README.md        # Documentation for the project
```

---

## 🌟 Features

- **Dynamic Gameplay**: Pipes are procedurally generated for endless play.  
- **Responsive Design**: Works on both desktop and mobile browsers.  
- **Score Tracking**: The game keeps track of your score as you play.  
- **Lightweight Assets**: Optimized for quick loading and smooth gameplay.  
- **Simple Controls**: Tap or press a key to keep the bird airborne.

---

## 🛠 Technologies Used

This project uses the following web development technologies:

- **HTML5 Canvas**: Used for rendering graphics and animations.  
- **CSS3**: Basic styling for the game layout.  
- **JavaScript**: Core game logic, including physics, collision detection, and animations.

---

## 📸 Screenshots

### 1. Gameplay Screenshot
![Gameplay](assets/gameplay.png)

### 2. Game Over Screenshot
![Game Over](assets/gameover.png)

---

## 🧑‍💻 Development Setup

Follow these steps to set up the project locally:

### Prerequisites

- A modern web browser (Google Chrome, Firefox, etc.)  
- A text editor (e.g., Visual Studio Code)

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd flappy-bird
   ```

2. Open the project in your text editor.

3. Launch the game by opening `index.html` in your browser.

4. Start playing and have fun!

---

## 🚧 Game Mechanics

The game is built around the following mechanics:

1. **Bird Movement**:  
   - The bird is affected by gravity, causing it to fall.  
   - Pressing a key makes the bird jump (apply an upward velocity).

2. **Pipes**:  
   - Pipes are generated at regular intervals with a random vertical gap.  
   - The bird must navigate through the gaps without hitting the pipes.

3. **Collision Detection**:  
   - If the bird collides with a pipe or the ground, the game ends.

4. **Score System**:  
   - Each time the bird successfully passes through a pair of pipes, the score increases.

---

## 🎨 Assets

All the game assets are stored in the `assets/` directory. The following images are used:

1. **bird.png**: Represents the bird character.  
2. **bg.png**: Background image for the game.  
3. **pipe-top.png**: Image for the top pipe.  
4. **pipe-bottom.png**: Image for the bottom pipe.  
5. **ground.png**: Image for the ground.

---

## 🖥 Browser Compatibility

This game is compatible with the latest versions of:

- Google Chrome  
- Mozilla Firefox  
- Safari  
- Microsoft Edge

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and share it as you like.

---

## 🙌 Acknowledgments

- Inspired by the original **Flappy Bird** by Dong Nguyen.  
- Thanks to the open-source community for their valuable resources.

