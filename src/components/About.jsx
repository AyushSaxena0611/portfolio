import React from 'react';

export const About = () => {
  const skills = {
    "Programming Languages": ["Java", "C++", "Python", "SQL"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Flask", "ASP.NET", "MVC", "API"],
    "Big Data & Frameworks": ["PySpark", "Hadoop", "Spark", "Databricks"],
    "Cloud & DevOps": ["Azure (ADF, Synapse, Functions, Logic Apps, Key Vault, ADLS Gen2, Blob Storage, CosmosDB)", "AWS", "Azure DevOps", "Jenkins", "Docker", "Kubernetes"],
    "Databases": ["MongoDB", "MySQL", "Azure SQL Server", "SSMS"],
    "Data Analytics": ["Power BI", "Microsoft Fabric", "Power Apps", "Power Automate"],
    "Tools & Version Control": ["Git", "VS Code", "Eclipse", "Jupyter Lab"],
    "CS Fundamentals": ["DSA", "OOPS", "Operating Systems", "DBMS", "System Design"]
  };

  return (
    <section id="about" className="min-h-screen w-full bg-primary py-24 px-24 flex items-center justify-center border-t border-gray-800">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-12 animate-slideDown">About Me</h1>

          <div className="flex items-center gap-12 w-full max-w-5xl">
            <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl border-4 border-secondary">
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQGfXNTjlNiKhQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1702384030197?e=1735632000&v=beta&t=5qdHV1Kzl8BcbkIGvyD3QCp5H7J0EYW5o6mTvVvQfhE"
                alt="Ayush Saxena"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-2">Ayush Saxena</h2>
                <p className="text-xl text-gray-300 font-semibold">Software Engineer 1 @ MAQ Software</p>
              </div>

              <div className="space-y-2 text-gray-300">
                <p className="text-lg">🎓 B.Tech in Computer Science & Engineering</p>
                <p className="text-lg">📍 Chitkara University, Baddi, Himachal Pradesh (2021-2025)</p>
                <p className="text-lg">📊 CGPA: 8.6/10</p>
                <p className="text-lg">📍 Shahjahanpur, Uttar Pradesh, India</p>
              </div>

              <div className="bg-dark p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 italic">
                  "Proficient in cloud technologies, data engineering, and full-stack development. Experienced in designing automated data pipelines, building scalable applications, and implementing CI/CD solutions with a focus on performance optimization and best practices."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 w-full max-w-5xl">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Technical Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-dark p-4 rounded-lg border border-gray-700 hover:border-secondary transition-colors duration-300">
                  <h4 className="text-secondary font-bold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span key={idx} className="bg-primary px-3 py-1 rounded-full text-sm text-gray-300 border border-secondary border-opacity-30 hover:border-opacity-100 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
