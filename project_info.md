Project Summary: Building a Blogging Website with React and Appwriter Backend

The Blogging Fever website is a comprehensive platform that allows users to create, edit, and share blog posts. Key features include:

1) User Authentication:
    i) Only logged-in users who created a blog can edit their posts.
    ii) User authentication is handled using JWT (JSON Web Tokens)  for secure access.

2) Blog Creation and Management:
    i) Users can create new blog posts, add content, and upload images.
    ii) The backend, powered by the Appwriter server, stores and manages blog data.

3) Frontend with React.js:
    i) The user-friendly frontend is built using React.js, providing a seamless experience for content creators.
    ii) React components handle rendering, state management, and interactions.

4) Backend with Appwriter:
    i) The Appwriter server serves as the backend, handling API requests, data storage, and authentication.
    ii) Loose coupling ensures scalability and maintainability.

5) API Integration:
    i) The frontend communicates with the backend via RESTful APIs.
    ii) API endpoints allow fetching, creating, and updating blog content.

6) CORS Configuration:
    i) Cross-Origin Resource Sharing (CORS) is configured to allow communication between the frontend and backend.
    ii) Proper CORS headers ensure secure data exchange.
