import React from 'react';

export const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Ayush_Saxena_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-primary py-12 px-24 border-t border-gray-800 flex justify-center">
      <button
        onClick={downloadResume}
        className="px-8 py-4 bg-secondary text-primary font-bold uppercase rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-110 active:scale-95 shadow-lg text-lg"
      >
        📥 Download My Resume
      </button>
    </section>
  );
};
