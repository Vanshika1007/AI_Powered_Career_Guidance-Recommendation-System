# 🎯 AI-Powered Career Guidance & Recommendation Platform

This project is a smart, AI-based web platform designed to help students and professionals discover the best career paths based on their personality, resume, and skills. The system uses a combination of resume parsing, personality assessments (like Holland Code), and AI/ML to generate personalized career recommendations and learning roadmaps.

---

## 🌟 Features

- 🧠 **Personality Test (Holland Code)**  
  Take a short quiz to identify your interests and personality type.

- 📄 **Resume Analyzer**  
  Upload your resume — our AI extracts skills, education, and experience using NLP.

- 🔍 **Smart Career Recommendations**  
  AI suggests best-fit domains (e.g., Data Analyst, Software Developer, Product Manager) based on your personality + resume.

- 📚 **Skill Gap Analysis + Learning Path**  
  Get a list of skills to learn and a personalized roadmap (with course links if needed).

- 📈 **Trending Career Insights**  
  See top roles and their current market demand.

- 📥 **PDF Report Download**  
  Get your full report (career match + roadmap) as a downloadable PDF.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS

**Backend:**
- Python (Flask / Django)
- RESTful APIs

**AI/ML:**
- OpenAI GPT API / Custom ML Models
- NLP for resume parsing (spaCy, NLTK, or BERT)
- Holland Code logic for psychometric analysis

**Database:**
- MongoDB or PostgreSQL

**Other Tools:**
- `pdf2text` or `PyMuPDF` for resume parsing
- Chart.js / Recharts for visual analytics
- JWT for authentication

---

## 🚀 How It Works

1. **User uploads resume** → Resume Parser extracts relevant data.
2. **User takes personality test** → Determines interests via Holland Code logic.
3. **AI Model** combines both inputs to suggest ideal careers.
4. **Learning Path** is generated to fill skill gaps and upskill for that career.
5. **Report** can be downloaded as PDF for future reference.

---

# Install frontend dependencies
cd frontend
npm install
npm start
