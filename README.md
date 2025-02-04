# HNG12 Public API

This is a simple public API built for the HNG12 task. It returns the following information in JSON format:

- Email address (used to register on the HMG12 Slack workspace).
- The current date and time in ISO 8601 format
- The GitHub URL of the project's codebase

## API Endpoint

_Base URL:_  
https://hng12-stage0-ks5i.onrender.com

### _GET /_

Returns JSON response with the required information.

#### _Response Format_

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-02-04T12:00:00Z",
  "github_url": "https://github.com/lubsy09/hng12_stage0.git"
}

Deployment
This API is live and publicly accessible
1. Clone the repository: git clone <https://github.com/lubsy09/hng12_stage0.git>

2.Navigate into the project folder: cd hng12_stage0

3. Install dependencies: npm install

4. Start the server: node index.js


Repository
GitHub Repository: https://github.com/lubsy09/hng12_stage0.git"
```
