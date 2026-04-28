// pages/projectList/index.js

import HeaderSix from '@/components/header/HeaderSix';
import ProjectsList from '@/components/projectList';
import ContactFormModal from '@/components/contactModule/contactFormModule';
export default function ProjectsPage() {
  const toggleClassNameInBody = () => {};
  const SetToggleClassName = () => {};
  const navPositionClass = '';
  const topbar = false;

  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      className="p-6 sm:p-10 bg-gray-50 min-h-screen"
    >
      <HeaderSix
        toggleClassNameInBody={toggleClassNameInBody}
        SetToggleClassName={SetToggleClassName}
        navPositionClass={navPositionClass}
        topbar={topbar}
      />
      <ProjectsList />
        <ContactFormModal
          isOpen={open}
          setOpen={setOpen}
          ContactType="HomepagePopup"
          title="Get a callback in 1 minute"
        />
        
    </main>
  );
}
