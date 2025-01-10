# File Sharing Frontend

This is the frontend of the **5 Minute File Share** application, built using React. The application allows users to upload files, retrieve files via unique IDs, and download them seamlessly within the 5 minute expiry window. The frontend communicates with a [File Sharing backend API](https://github.com/JaakkoLipp/send-backend) to handle file storage and retrieval.


## Features

- **File Upload**: Users can select files to upload to the server.
- **Unique File ID**: Each file is assigned a unique ID upon upload for retrieval.
- **File Download**: Files can be downloaded by entering the unique ID.
- **Maximum File Size**: Enforces a file size limit (e.g., 5MB) with validation both on the client and server.
- **Consistent UI**: Styled "Browse" and "Upload" buttons for a clean and user-friendly experience.


## Tech Stack

- **React**: Frontend framework for building the user interface.
- **Fetch API**: Used to make API calls to the backend for uploading and downloading files.
- **CSS**: For styling components and ensuring consistent UI.


## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd file-sharing-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).


## Usage

1. **Upload a File**:

   - Click the "Browse" button to select a file.
   - Click "Upload" to send the file to the server.
   - A unique file ID will be displayed upon successful upload.

2. **Download a File**:
   - Enter the unique file ID in the text input.
   - Click "Download" to retrieve the file from the server.


## Project Structure

```
src/
├── components/
│   ├── UploadFile.jsx       # File upload component
│   ├── DownloadFile.jsx     # File download component
├── styles/
│   ├── styles.css           # CSS styles for the app
├── App.jsx                  # Main app entry point
└── index.js                 # React DOM rendering
```


## Environment Variables

Ensure the following environment variable is set for API communication:

- **REACT_APP_BACKEND_URL**: Base URL for the backend API (e.g., `http://localhost:5000`).

Create a `.env` file in the project root:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```


## API Endpoints

- **Upload File**:

  - **Method**: `POST`
  - **URL**: `/api/files/upload`
  - **Body**: `multipart/form-data` containing the file.

- **Download File**:
  - **Method**: `GET`
  - **URL**: `/api/files/download/:fileId`


## To-Do Features

- Add progress indicators for file uploads and downloads.
- Improve error handling for invalid file IDs.
- Implement file preview for certain file types (e.g., images, PDFs).
- Enhance the UI for mobile responsiveness.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
