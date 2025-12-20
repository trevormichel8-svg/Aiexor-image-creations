body  {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: linear-gradient(to bottom right, #0b0b0b, #004040);
  color: #f5f5f5;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #0b0b0b, #003333);
  padding: 1rem 2rem;
  border-bottom: 1px solid #00ffff40;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
}

nav a {
  color: #f5f5f5;
  text-decoration: none;
  margin-left: 1rem;
  transition: color 0.2s;
}

nav a:hover {
  color: gold;
}

.generator, .gallery, .login {
  max-width: 700px;
  margin: 3rem auto;
  text-align: center;
}

textarea, select, input {
  width: 100%;
  margin: 1rem 0;
  padding: 0.8rem;
  border: 1px solid #00ffff60;
  border-radius: 8px;
  background: #0f1f1f;
  color: #f5f5f5;
}

button {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, #008080, gold);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}

.image-preview img {
  margin-top: 2rem;
  max-width: 100%;
  border-radius: 10px;
  border: 2px solid #00ffff80;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item img {
  width: 100%;
  border-radius: 8px;
}

.footer {
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #00ffff40;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #ccc;
}
