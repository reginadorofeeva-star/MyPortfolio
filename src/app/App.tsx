import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Beyond from './components/Beyond';
import Footer from './components/Footer';
import GradientBlobs from './components/GradientBlobs';
import ProjectModal from './components/ProjectModal';
import { projectsData, type ProjectId } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectId | null>(null);

  return (
    <div className="relative min-h-screen">
      <GradientBlobs />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-[760px] mx-auto px-6">
          <Hero />
          <Projects onProjectClick={setSelectedProject} />
          <Experience />
          <Skills />
          <Beyond />
        </main>

        <footer className="max-w-[760px] mx-auto px-6">
          <Footer />
        </footer>
      </div>

      <ProjectModal
        project={selectedProject ? projectsData[selectedProject] : null}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
