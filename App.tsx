import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AuthScreen from './components/auth/AuthScreen';
import Header from './components/common/Header';
import Dashboard from './components/dashboard/Dashboard';
import PersonalityQuiz from './components/quiz/PersonalityQuiz';
import ResumeAnalysis from './components/resume/ResumeAnalysis';
import CareerPaths from './components/careers/CareerPaths';
import LearningRoadmap from './components/roadmap/LearningRoadmap';
import ChatBot from './components/chat/ChatBot';
import LoadingSpinner from './components/common/LoadingSpinner';
import { HollandCode, CareerReport } from './types';
import { AIService } from './services/aiService';
import { generateMockHollandCode } from './data/mockData';

function AppContent() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [careerReport, setCareerReport] = useState<CareerReport | null>(null);

  useEffect(() => {
    const savedReport = localStorage.getItem('careerReport');
    if (savedReport) {
      setCareerReport(JSON.parse(savedReport));
    }
  }, []);

    const careerRecommendations = await AIService.generateCareerRecommendations(hollandCode, mockSkills);
    const learningRoadmap = await AIService.generateLearningRoadmap(mockSkills);

    const newReport: CareerReport = {
      id: Date.now().toString(),
      userId: user?.id || '',
      createdAt: new Date().toISOString(),
      resumeAnalysis: {
        skills: mockSkills,
        experience: ['Software Development - 3 years', 'Team Leadership - 2 years'],
        education: ['Bachelor of Science in Computer Science'],
        strengths: ['Strong analytical thinking', 'Excellent communication skills'],
        weaknesses: ['Limited experience with advanced data visualization']
      },
      hollandCode,
      careerRecommendations,
      learningRoadmap
    };

    setCareerReport(newReport);
    localStorage.setItem('careerReport', JSON.stringify(newReport));
    setActiveTab('dashboard');
  };

  const handleResumeAnalysis = async (analysis: any) => {
    const hollandCode = generateMockHollandCode();
    const careerRecommendations = await AIService.generateCareerRecommendations(hollandCode, analysis.skills);
    const learningRoadmap = await AIService.generateLearningRoadmap(analysis.skills);

    const newReport: CareerReport = {
      id: Date.now().toString(),
      userId: user?.id || '',
      createdAt: new Date().toISOString(),
      resumeAnalysis: analysis,
      hollandCode,
      careerRecommendations,
      learningRoadmap
    };

    setCareerReport(newReport);
    localStorage.setItem('careerReport', JSON.stringify(newReport));
    setActiveTab('dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg" className="text-indigo-600" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'quiz':
        return <PersonalityQuiz onComplete={handleQuizComplete} />;
      case 'resume':
        return <ResumeAnalysis onAnalysisComplete={handleResumeAnalysis} />;
      case 'careers':
        return <CareerPaths />;
      case 'roadmap':
        return <LearningRoadmap />;
      case 'chat':
        return <ChatBot />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderActiveComponent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
