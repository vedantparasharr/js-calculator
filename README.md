# Casio Style Calculator

A web-based calculator inspired by the classic Casio fx-82MS design, featuring a retro aesthetic with modern web technologies.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Keyboard Support**: Full keyboard functionality for faster calculations
  - Number keys (0-9) and decimal point
  - Operator keys (+, -, *, /)
  - Enter or = to calculate
  - Backspace to delete last character
  - Escape to clear all
- **Persistent Storage**: Calculations are saved using localStorage and persist across sessions
- **Responsive Design**: Adapts to different screen sizes
- **Retro Casio Design**: Authentic calculator aesthetics with gradient LCD display

## Technologies Used

- HTML5
- CSS3 (with gradients, shadows, and animations)
- Vanilla JavaScript
- localStorage API

## File Structure

```
calculator/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and visual design
└── script.js           # Calculator logic and functionality
```

## How to Use

1. **Clone or Download** the repository
2. **Open** `index.html` in any modern web browser
3. **Calculate** using either:
   - Click buttons with your mouse
   - Type numbers and operators on your keyboard
   - Press Enter or = to evaluate
   - Press Escape or click CLEAR to reset

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operators |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Escape` | Clear display |

## Known Limitations

- Uses `eval()` for calculation (not recommended for production)
- Limited error handling for edge cases
- No scientific calculator functions
- No calculation history

## Future Improvements

- [ ] Replace `eval()` with a safer expression parser
- [ ] Add calculation history
- [ ] Implement parentheses support
- [ ] Add memory functions (M+, M-, MR, MC)
- [ ] Improve error messages
- [ ] Add percentage calculations

## Learning Notes

This project was created as part of my web development learning journey. The CSS styling was developed with AI assistance to achieve the authentic Casio calculator aesthetic, while I implemented the core functionality and logic myself.

## Author

**Vedant**  
Beginner Developer | Learning Web Development

---

*Feel free to use this project for learning purposes or as a base for your own calculator implementation!*
