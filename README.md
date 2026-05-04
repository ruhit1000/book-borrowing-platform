# Online Book Borrowing Platform
A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security, performance, and a highly interactive user experience.

## 🌐 Live Website URL
[Click Here]](https://book-borrowing-platform-kappa.vercel.app/)

## ✨ Key Features
- **Responsive Layout**: The website is fully responsive, ensuring a perfect viewing experience on mobile, tablet, and desktop devices.
- **Secure Authentication**: Robust user login and registration system using BetterAuth, featuring both standard Email/Password authentication and Google Social Login.
- **Dynamic Home Page**: Includes a welcoming banner, a scrolling marquee highlighting new arrivals and discounts, featured top books, and custom interactive sections.
- **Advanced Book Discovery**: An "All Books" page equipped with a title search bar and a functional left sidebar to filter books by categories such as Story, Tech, and Science.
- **Secure Book Borrowing (Private Routes)**: Protected "Book Details" pages where logged-in users can view the book cover, author, description, available quantity, and securely borrow the book with visual toast confirmations.
- **Profile Management**: A private "My Profile" dashboard displaying user information, complete with a dedicated form to update the user's profile image and name.
- **Smooth UI Animations**: Engaging user interface animations powered by animate.css.
- **Protected Data & Routing**: Secure environment variables protect configuration keys, while private routes ensure unauthorized users cannot access sensitive pages.

## 🛠️ Technologies & Tools Used
- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS, DaisyUI / HeroUI
- **Authentication**: BetterAuth
- **Database**: MongoDB
- **Animations**: animate.css

## 📂 Project Structure & Navigation
- **Navbar**: Features the website logo linked to the home page, central navigation links (Home, All Books, My Profile), and conditional rendering to show either Login or the user's name and Logout button based on their session status.
- **Home (/)**: The landing area featuring the main banner, marquee, and top 4 featured books fetched from the database.
- **All Books (/books)**: The comprehensive digital catalog featuring search functionality and a category filtering sidebar.
- **Book Details (/books/[id])**: A private route detailing specific book information alongside the core "Borrow This Book" functionality.
- **My Profile (/profile)**: A private route showing user details and providing access to the update information feature.
- **Authentication (/login, /register)**: Dedicated forms for secure user onboarding and access.
- **Footer**: A custom-designed footer featuring social media icons and a "Contact Us" section.

## 🚀 Local Setup Instructions

1. **Clone the repository**:
```bash
git clone https://github.com/ruhit1000/book-borrowing-platform.git
cd book-borrowing-platform
```
2. **Install dependencies**:
```bash
npm install
```
3. **Set up Environment Variables**:
Create a `.env.local` file in the root directory. You must secure your configuration keys using environment variables. Add your BetterAuth secrets, MongoDB connection string, and Google OAuth credentials here.

4. **Run the development server**:
```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result. Ensure the application does not throw errors upon reloading from any route.