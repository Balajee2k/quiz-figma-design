A modern, interactive quiz application. The application implements a pixel-perfect design based on the provided Figma specifications with smooth animations and full accessibility support.


## 🛠️ Tech Stack

### Required Stack (Implemented)
- **React** with **TypeScript** - Type-safe component development
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Modern ES6+** JavaScript features

### Bonus Stack (Implemented)
- **Next.js 15** - React framework with App Router for optimized performance
- **Framer Motion** - Smooth animations and micro-interactions

## ✨ Key Features Implemented

### Design Accuracy
- Pixel-perfect implementation matching Figma specifications
- Custom gradient backgrounds with layered effects
- Playfair Display font for elegant typography
- Responsive card layout with proper spacing and shadows
- Custom cat paw mascot with "Best of Luck!" speech bubble

### Interactive Elements
- Smooth hover states on answer options
- Scale and lift animations on button interactions
- Progress bar with animated fill transitions
- Seamless question transitions with slide animations
- Pulsating mascot animation

### Quiz Functionality
- Multi-question quiz with 4 sample questions
- Answer selection with visual feedback
- Navigation between questions (Previous/Next)
- Score calculation and percentage display
- Results screen with restart functionality

### Accessibility (WCAG 2.1)
- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles for screen readers
- Keyboard navigation support:
  - Arrow keys for navigation between questions
  - Number keys (1-3) for quick answer selection
  - Enter key to proceed to next question
- Focus visible states for all interactive elements
- Screen reader announcements for question changes
- Color contrast ratios meeting AA standards

### Performance Optimizations
- Next.js App Router for optimized rendering
- Font optimization with next/font
- Component-based architecture for code splitting
- Efficient re-renders with React hooks (useCallback, useMemo)

## 📁 Project Structure

```
quiz-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page component
│   ├── components/
│   │   ├── Quiz.tsx           # Main quiz container
│   │   ├── ProgressBar.tsx    # Animated progress indicator
│   │   ├── QuestionCard.tsx   # Question display component
│   │   ├── OptionButton.tsx   # Answer option button
│   │   ├── NavigationButtons.tsx # Previous/Next controls
│   │   ├── ResultsScreen.tsx  # Final score display
│   │   ├── CatPawMascot.tsx   # Animated mascot component
│   │   └── index.ts           # Component exports
│   └── data/
│       └── quizData.ts        # Quiz questions and answers
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 📝 Assumptions Made

1. **Desktop-Only Design**: As specified, the implementation focuses on desktop screens (800px+ width). Mobile responsiveness was not included per requirements.

2. **Sample Questions**: Used sample questions from the Figma design. The quiz data structure allows easy addition of more questions.

3. **Correct Answers**: Assumed logical correct answers for each question:
   - Cat sound: "Meow-Meow"
   - Fridge contents: "Ice Cream"
   - Banana color: "Yellow"
   - Dog legs: "Four"

4. **Score Display**: Implemented percentage-based scoring as shown in the Figma design.

5. **Font Choice**: Used Playfair Display as shown in the design for headings and Inter for body text.

6. **Color Palette**: Extracted colors from the design:
   - Primary Dark: #1a3a47
   - Primary Teal: #1a5568
   - Accent Cyan: #6bc5d8
   - Background: Linear gradient from #a8d8ea to #e8f4f8

## ⏱️ Time Spent

| Task | Time |
|------|------|
| Project Setup & Configuration | 15 minutes |
| Component Architecture | 20 minutes |
| UI Implementation | 45 minutes |
| Animations & Transitions | 30 minutes |
| Accessibility Features | 20 minutes |
| Testing & Bug Fixes | 15 minutes |
| Documentation | 15 minutes |
| **Total** | **~2.5 hours** |

## 👤 Author

**Balajee**

### Best Practices ✅
- WCAG 2.1 accessibility compliance
- Semantic HTML
- ESLint for code quality
- Git version control




---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*
