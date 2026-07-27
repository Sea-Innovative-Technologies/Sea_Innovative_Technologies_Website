export interface CourseTopic {
  title: string;
  duration?: string;
  lessonCount?: string;
  subtopics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  iconName: string;
  projectsCount?: string;
  certification?: string;
  placementSupport?: string;
  careerOutcome?: string;
  topics: CourseTopic[];
}

export interface TechCovered {
  name: string;
  category: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
}

// Student Dashboard Types
export interface StudentProfile {
  name: string;
  email: string;
  course: string;
  studentId: string;
  joinedDate: string;
  avatarUrl: string;
}

export interface CourseProgress {
  courseId: string;
  courseName: string;
  progress: number; // percentage
  completedModules: number;
  totalModules: number;
  nextLecture: string;
  nextLectureTime: string;
}

export interface MockExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LocatorChallenge {
  id: number;
  label: string;
  htmlCode: string;
  hint: string;
  correctLocators: {
    xpath?: string[];
    css?: string[];
    id?: string;
    playwright?: string[];
  };
}

export interface TestCase {
  id: string;
  testSuite: string;
  title: string;
  preConditions: string;
  steps: string[];
  expectedResult: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Draft' | 'Approved' | 'Executed';
}

export interface ResumeCheckResult {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  feedback: string[];
}
