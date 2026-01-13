/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #8B0000;
    --primary-dark: #5a0000;
    --primary-light: #a83232;
    --secondary: #0a0a0a;
    --secondary-light: #1a1a1a;
    --text: #f0f0f0;
    --text-dark: #aaa;
    --accent: #ff3333;
    --glow: rgba(139, 0, 0, 0.5);
    --card-bg: rgba(15, 15, 15, 0.8);
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --border-radius: 8px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Rajdhani', sans-serif;
    background-color: var(--secondary);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
}

h1, h2, h3, h4 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 100px 0;
    position: relative;
}

/* Loader */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader.fade-out {
    opacity: 0;
    visibility: hidden;
}

.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.loader-logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader-logo span {
    font-family: 'Orbitron', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    color: var(--primary);
    text-shadow: 0 0 20px var(--glow);
    position: relative;
    z-index: 2;
}

.loader-logo span:first-child {
    animation: pulse 2s infinite;
}

.loader-logo span:last-child {
    animation: pulse 2s infinite 0.5s;
}

.loader-particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary);
}

.loader-particle:nth-child(1) {
    top: -20px;
    left: 30%;
    animation: float 3s infinite ease-in-out;
}

.loader-particle:nth-child(2) {
    top: 50%;
    right: -10px;
    animation: float 3s infinite 0.5s ease-in-out;
}

.loader-particle:nth-child(3) {
    bottom: -20px;
    left: 50%;
    animation: float 3s infinite 1s ease-in-out;
}

.loader-text {
    text-align: center;
}

.typewriter h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    color: var(--text);
    margin-bottom: 20px;
    overflow: hidden;
    border-right: 2px solid var(--primary);
    white-space: nowrap;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

.progress-bar {
    width: 300px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
}

.progress {
    height: 100%;
    width: 0%;
    background-color: var(--primary);
    animation: loading 2s ease-in-out forwards;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 20px 0;
    background-color: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(139, 0, 0, 0.2);
    transition: var(--transition);
}

.navbar.scrolled {
    padding: 15px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.nav-logo a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.logo-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--text);
    line-height: 1;
}

.logo-accent {
    color: var(--primary);
    text-shadow: 0 0 10px var(--glow);
}

.logo-subtitle {
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: var(--text-dark);
    margin-top: 2px;
}

.nav-menu {
    display: flex;
    gap: 30px;
}

.nav-link {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--text-dark);
    position: relative;
    padding: 5px 0;
    transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
    color: var(--text);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
}

.nav-link:hover::after, .nav-link.active::after {
    width: 100%;
}

.nav-link i {
    margin-right: 8px;
    font-size: 0.9rem;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btn-discord {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    padding: 10px 20px;
    border-radius: var(--border-radius);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
}

.btn-discord:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.menu-toggle span {
    width: 100%;
    height: 3px;
    background-color: var(--text);
    transition: var(--transition);
    border-radius: 3px;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 100px;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.particle-layer {
    position: absolute;
    width: 100%;
    height: 100%;
}

.gradient-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.9) 70%);
}

.hero-content {
    text-align: center;
    max-width: 900px;
    padding: 0 20px;
    z-index: 2;
}

.hero-tagline {
    margin-bottom: 30px;
}

.tagline-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 3px;
    color: var(--text);
    text-transform: uppercase;
}

.highlight {
    color: var(--primary);
    text-shadow: 0 0 10px var(--glow);
    position: relative;
}

.hero-title {
    margin-bottom: 30px;
}

.title-main {
    font-size: 6rem;
    font-weight: 900;
    color: var(--text);
    line-height: 1;
    margin-bottom: 10px;
    position: relative;
    text-shadow: 0 0 30px rgba(139, 0, 0, 0.5);
}

.title-remastered {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.title-line {
    width: 200px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    margin: 0 auto;
}

.hero-subtitle {
    max-width: 600px;
    margin: 0 auto 40px;
}

.hero-subtitle p {
    font-size: 1.3rem;
    color: var(--text-dark);
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.btn {
    padding: 15px 30px;
    border-radius: var(--border-radius);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    border: none;
}

.btn-text {
    position: relative;
    z-index: 2;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    box-shadow: 0 5px 20px rgba(139, 0, 0, 0.4);
}

.btn-primary:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(139, 0, 0, 0.6);
}

.btn-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
}

.btn-primary:hover .btn-glow {
    opacity: 1;
}

.btn-secondary {
    background-color: var(--secondary-light);
    color: var(--text);
    border: 2px solid rgba(139, 0, 0, 0.3);
}

.btn-secondary:hover {
    background-color: rgba(139, 0, 0, 0.1);
    border-color: var(--primary);
    transform: translateY(-3px);
}

.btn-outline {
    background-color: transparent;
    color: var(--text);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-3px);
}

.hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--text-dark);
    font-size: 0.9rem;
    letter-spacing: 2px;
}

.mouse {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.wheel {
    width: 4px;
    height: 10px;
    background-color: var(--primary);
    border-radius: 2px;
    animation: scroll 2s infinite;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
}

.title-number {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    color: var(--primary);
    font-weight: 700;
}

.title-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text);
}

.title-line {
    width: 100px;
    height: 2px;
    background-color: var(--primary);
}

.section-subtitle {
    font-size: 1.2rem;
    color: var(--text-dark);
}

/* Qualities Section */
.qualities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.quality-card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 30px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(139, 0, 0, 0.1);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.quality-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.quality-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: white;
}

.quality-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--text);
}

.quality-card p {
    color: var(--text-dark);
    font-size: 1.1rem;
}

.quality-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.quality-card:hover .quality-glow {
    opacity: 1;
}

/* Quick Links */
.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.link-card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 30px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(139, 0, 0, 0.1);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.link-card:hover {
    transform: translateY(-10px) scale(1.03);
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.link-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: white;
}

.link-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--text);
}

.link-card p {
    color: var(--text-dark);
    font-size: 1rem;
    margin-bottom: 20px;
    flex-grow: 1;
}

.link-arrow {
    width: 40px;
    height: 40px;
    background-color: rgba(139, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
}

.link-card:hover .link-arrow {
    background-color: var(--primary);
    transform: translateX(5px);
}

.link-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.link-card:hover .link-glow {
    opacity: 1;
}

/* Footer */
.footer {
    background-color: var(--secondary-light);
    padding: 60px 0 30px;
    border-top: 1px solid rgba(139, 0, 0, 0.2);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto 40px;
    padding: 0 20px;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-logo {
    margin-bottom: 15px;
}

.footer-tagline {
    font-size: 1rem;
    color: var(--text-dark);
    margin-bottom: 20px;
}

.owner-credit {
    display: flex;
    gap: 10px;
    font-size: 1.1rem;
}

.owner-credit span:first-child {
    color: var(--text-dark);
}

.owner-name {
    color: var(--primary);
    font-weight: 600;
}

.footer-links {
    display: flex;
    flex-direction: column;
}

.footer-links h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--text);
}

.footer-links a {
    color: var(--text-dark);
    margin-bottom: 10px;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--primary);
    transform: translateX(5px);
}

.footer-social h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--text);
}

.social-icons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.social-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: var(--border-radius);
    background-color: rgba(255, 255, 255, 0.05);
    transition: var(--transition);
}

.social-icon:hover {
    background-color: rgba(139, 0, 0, 0.2);
    transform: translateX(5px);
}

.social-icon.d
