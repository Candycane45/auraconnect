# 🌟 AuraConnect - Bringing Communities Closer

<div align="center">

<img src="https://github.com/Candycane45/auraconnect/blob/main/frontend/public/logo.png" alt="AuraConnect Logo" width="90" height="90">

**A neighborhood-first event networking platform that transforms digital connections into real-world community experiences**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green)](https://mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-orange)](https://firebase.google.com/)

[🐛 Report Bug](https://github.com/yourusername/auraconnect/issues) 

[✨ Request Feature](https://github.com/yourusername/auraconnect/issues)

</div>

---

## 🎯 The Problem

In today's fast-paced world, neighbors often live side-by-side for years without connecting. Digital distractions and busy routines replace face-to-face moments. Most social platforms focus on global networks, leaving a gap for local, meaningful interactions. This leads to:

- 🏠 **Social isolation** in our own neighborhoods
- 🤝 **Weaker community bonds** and missed connections
- 🚫 **Lost opportunities** for collaboration and friendship
- 💔 **Disconnect** between digital presence and real-world community

## 💡 Our Solution

**AuraConnect** is a neighborhood-first event networking app that makes it easy to create, discover, and join local activities — from potluck dinners to yoga in the park. We help people turn shared interests into shared experiences, strengthen community ties, and build a sense of belonging.

> Think of it as a friendly, smart digital notice board for your neighborhood.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 📍 Location-Based Discovery
- 🗺️ GPS-powered suggestions for nearby events
- 📏 Smart radius-based event recommendations
- 🗺️ Interactive map integration with Google Maps API

### 🤖 Intelligent Matching
- 🎯 AI-powered tags for relevant activity recommendations
- 🎨 Personalized event suggestions based on user interests
- 🤝 Smart community member matching

</td>
<td width="50%">

### 👥 Community Groups
- 🔒 Private, verified spaces for societies and clubs
- 🏘️ Neighborhood-specific event boards
- 🛡️ Secure group management tools

### 📱 Comprehensive Event Tools
- ✅ Easy RSVP system with real-time updates
- 🔔 Built-in reminders and notifications
- 💬 In-app chat for event coordination
- 📸 Event creation with rich media support

</td>

<td width="75%">

### 🔐 Secure Authentication
- 🔥 Firebase-powered authentication
- 🔑 Google OAuth integration
- 🛡️ Privacy-first approach to user data

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

### Database & Auth
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FF6F00?style=for-the-badge&logo=firebase&logoColor=white)

### External Services
![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

</div>

<details>
<summary><strong>📋 Detailed Tech Stack</strong></summary>

#### Frontend
- **Next.js** - React framework for production-ready applications
- **CSS3** - Custom styling with CSS variables and responsive design
- **Progressive Web App** - Mobile-optimized experience

#### Backend
- **Express.js** - Fast, unopinionated web framework for Node.js
- **RESTful APIs** - Clean, scalable API architecture

#### Database
- **MongoDB** - NoSQL database for flexible data modeling
- **Mongoose** - Elegant MongoDB object modeling

#### Authentication & Security
- **Firebase Authentication** - Secure user management
- **Google OAuth** - Streamlined social login
- **JWT Tokens** - Stateless authentication

#### External Services
- **Google Maps API** - Location services and mapping
- **Python Microservice** - AI-powered recommendations
- **Cloud Storage** - Media file management

#### Development Tools
- **Git** - Version control
- **ESLint** - Code quality assurance
- **Prettier** - Code formatting

</details>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v16.0+-339933?style=flat-square&logo=node.js) 
- ![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-4EA94B?style=flat-square&logo=mongodb)
- Firebase account
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Candycane45/auraconnect.git
   cd auraconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 🎨 Design System

Our design philosophy centers around **warmth**, **community**, and **accessibility**.

### 🌈 Color Palette

<div align="center">

| Color | Hex Code | Usage |
|:---:|:---:|:---:|
| 🌿 **Matcha Green** | `#95d5b2` | Primary brand color |
| 🌱 **Dark Green** | `#386641` | Text and accents |
| 🌸 **Soft Pink** | `#ffb6b9` | Secondary highlights |
| 💗 **Hot Pink** | `#f76b8a` | Action elements and CTAs |
| ☁️ **Off-white** | `#f8f9fa` | Background and neutrals |

</div>

### 📝 Typography
- **Primary Font**: Segoe UI, Arial, sans-serif
- **Headings**: Bold, 900 weight for strong hierarchy
- **Body**: Regular weight with 1.5+ line height for readability

---

## 👥 Meet the Team

<div align="center">

<table>
<tr>
<td align="center" width="200px">
<br>
<b>🌟 Anushka</b><br>
<sub>AI & Backend Architect</sub>
<br>
<small>Python, Cloud, Databases</small>
</td>
<td align="center" width="200px">
<br>
<b>🎨 Pravallika</b>
<br>
<sub>Frontend Designer & Engineer</sub><br>
<small>React, Prompt Engineering</small>
</td>
<td align="center" width="200px">
<br>
<b>⚡ Roshan</b>
<br>
<sub>Full-Stack Engineer</sub><br>
<small>Web Technologies, Rust</small>
</td>
<td align="center" width="200px">
<br>
<b>💻 Cindy Jane Miriyala</b>
<br>
<sub>Frontend Developer</sub><br>
<small>Frontend Development</small>
</td>
</tr>
</table>

</div>

### Team Highlights

**🌟 Anushka - AI & Backend Architect**  
Passionate about Machine Learning & AI with strong expertise in Python. Experienced in cloud technologies (GCP, AWS), both relational and NoSQL databases, and mobile app development using Flutter. Always excited to turn data into smart, impactful solutions.

**🎨 Pravallika - Frontend Designer & Engineer**  
The creative heart of our frontend, dedicated to building beautiful and intuitive user experiences. A prompt engineering enthusiast committed to unlocking the magic of Human-AI collaboration.

**⚡ Roshan - Full-Stack Engineer**  
Full-stack web developer with a passion for efficient, scalable applications. Loves experimenting with new technologies (including Rust and C!) and believes the web is for everyone.

**💻 Cindy Jane Miriyala - Frontend Developer**  
Third-year Computer Science student and passionate web developer. Eager to learn, collaborate, and help build digital spaces that bring people together.

---

## 🌍 Our Impact

AuraConnect is more than an app — it's a **catalyst for stronger communities**. By enabling easy local meetups, we aim to:

- 🤝 **Reduce social isolation** and foster meaningful connections
- 🏛️ **Strengthen community bonds** through shared experiences  
- 🌏 **Encourage cultural exchange** and celebrate diversity
- 💪 **Build neighborhood resilience** through mutual support
- ❤️ **Create lasting friendships** that transcend digital boundaries

---

## 📈 Roadmap

<details>
<summary><strong>Phase 1: Foundation ✅</strong></summary>

- ✅ Core event creation and discovery
- ✅ User authentication and profiles
- ✅ Basic search and filtering
- ✅ Responsive web design

</details>

<details>
<summary><strong>Phase 2: Enhanced Features 🚧</strong></summary>

- 📱 Mobile app development (React Native/Flutter)
- 🤖 Advanced AI recommendations
- 💬 Real-time chat integration
- 🔔 Push notifications

</details>

<details>
<summary><strong>Phase 3: Community Growth 📅</strong></summary>

- 🎮 Gamification and achievement system
- 🛡️ Community moderation tools
- 📊 Event analytics dashboard
- 🌍 Multi-language support

</details>

<details>
<summary><strong>Phase 4: Scale & Impact 🚀</strong></summary>

- 🔌 API for third-party integrations
- 🏢 Enterprise features for organizations
- 📍 Advanced location services
- 📈 Community impact metrics

</details>

---

## 🤝 Contributing

We believe in the power of **community-driven development**! Here's how you can contribute:

### 🐛 Bug Reports

Found a bug? Please [create an issue](https://github.com/yourusername/auraconnect/issues) with:

- 📝 Clear description of the problem
- 🔄 Steps to reproduce
- ⚖️ Expected vs. actual behavior
- 📸 Screenshots if applicable

### ✨ Feature Requests

Have an idea for improvement? We'd love to hear it! Please include:

- 🎯 Problem you're trying to solve
- 💡 Proposed solution
- 🌟 Why it would benefit the community

### 💻 Code Contributions

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 📝 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

## 🙏 Acknowledgments

- 📸 [Unsplash](https://unsplash.com) - For beautiful, free stock photography
- 🗺️ [Google Maps](https://developers.google.com/maps) - For reliable location services
- 🔥 [Firebase](https://firebase.google.com) - For secure authentication infrastructure
- 🍃 [MongoDB](https://mongodb.com) - For flexible data storage solutions
- ❤️ **Our Community** - For inspiring us to build meaningful connections

---


**Built with ❤️ by the AuraConnect Team**

*Bringing communities closer, one connection at a time.*

</div>
