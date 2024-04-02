// Assuming the JSON is stored in a variable called `tutorialData`

function createTutorialArticle(tutorialData) {
  const article = document.createElement('article');
  
  // Set the title
  const title = document.createElement('h1');
  title.textContent = tutorialData.title;
  article.appendChild(title);
  
  // Create sections
  tutorialData.sections.forEach(section => {
    const sectionElement = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = section.heading;
    sectionElement.appendChild(heading);
    
    // Add subsections
    section.subsections.forEach(subsection => {
      const subsectionElement = document.createElement('div');
      const subtitle = document.createElement('h3');
      subtitle.textContent = subsection.title;
      subsectionElement.appendChild(subtitle);
      
      // Add steps and code snippets
      const steps = document.createElement('ul');
      subsection.steps.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        steps.appendChild(stepItem);
      });
      subsectionElement.appendChild(steps);
      
      subsection.codeSnippets.forEach(snippet => {
        const codeBlock = document.createElement('pre');
        codeBlock.textContent = snippet;
        subsectionElement.appendChild(codeBlock);
      });
      
      sectionElement.appendChild(subsectionElement);
    });
    
    article.appendChild(sectionElement);
  });

  // Add the author and last updated info
  const authorInfo = document.createElement('p');
  authorInfo.textContent = `written by ${tutorialData.author.name} - Last Updated ${tutorialData.author.lastUpdated}`;
  article.appendChild(authorInfo);

  // Additional resources, footer, etc. would be similarly added
  
  return article;
}

// Then, you can append the article to the main content of your page:
const mainContent = document.querySelector('.main-content');
const articleElement = createTutorialArticle(tutorialData);
mainContent.appendChild(articleElement);
