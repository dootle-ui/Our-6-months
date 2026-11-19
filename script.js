
/* =================================
   GENERAL PAGE DESIGN
================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f8f3ed;
  background-image:
    radial-gradient(#dfd2c4 0.7px, transparent 0.7px);
  background-size: 18px 18px;
  color: #493c38;
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  padding: 40px 20px;
}

.page {
  max-width: 850px;
  margin: 0 auto;
}

.screen {
  text-align: center;
  animation: fadeIn 1s ease;
}

.hidden {
  display: none !important;
}

.eyebrow {
  color: #ad827b;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 400;
  margin-bottom: 12px;
}

.subtitle {
  color: #897772;
  font-size: 15px;
  margin-bottom: 35px;
}

.footer-note {
  color: #ad9188;
  font-family: 'Caveat', cursive;
  font-size: 20px;
  margin-top: 45px;
}


/* =================================
   ENVELOPE DESIGN
================================= */

.envelope-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px auto 35px;
  perspective: 800px;
}

.envelope {
  position: relative;
  width: 220px;
  height: 145px;
  background: #e9c9c4;
  border-radius: 5px;
  box-shadow: 0 12px 25px rgba(90, 60, 50, 0.12);
  overflow: hidden;
}

.envelope::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  border-left: 110px solid #f0d7d0;
  border-right: 110px solid #f0d7d0;
  border-top: 85px solid transparent;
  z-index: 2;
}

.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-top: 85px solid #d9aaa5;
  z-index: 3;
}

.envelope-heart {
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff8f3;
  font-size: 30px;
  z-index: 4;
}


/* =================================
   PASSWORD AREA
================================= */

.password-area {
  max-width: 330px;
  margin: 0 auto;
}

.password-area label {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  margin-bottom: 14px;
}

.password-area input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #dfc9c2;
  border-radius: 8px;
  background: #fffdfb;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  text-align: center;
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
}

.password-area input:focus {
  border-color: #c58f89;
  box-shadow: 0 0 0 3px rgba(197, 143, 137, 0.15);
}

.hint {
  color: #a48c84;
  font-family: 'Caveat', cursive;
  font-size: 19px;
  margin: 12px 0 20px;
}

button {
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  background: #b77f79;
  color: white;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  transition: background 0.3s, transform 0.3s;
}

button:hover {
  background: #9f6964;
  transform: translateY(-2px);
}

.error-message {
  color: #b45f5f;
  font-size: 13px;
  margin-top: 12px;
}


/* =================================
   LOVE LETTER DESIGN
================================= */

#letter-screen {
  max-width: 760px;
  margin: 0 auto;
}

.letter-intro {
  color: #a47c74;
  font-family: 'Caveat', cursive;
  font-size: 25px;
  margin: 15px 0 35px;
}

.letter-content {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 35px;
  align-items: start;
  padding: 30px;
  background: rgba(255, 252, 248, 0.9);
  border: 1px solid #eadbd1;
  border-radius: 5px;
  box-shadow: 0 10px 30px rgba(90, 60, 50, 0.07);
  text-align: left;
}

.photo-frame {
  background: white;
  padding: 12px 12px 20px;
  box-shadow: 0 5px 15px rgba(70, 50, 40, 0.12);
  transform: rotate(-3deg);
}

.photo-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 2px;
}

.photo-caption {
  font-family: 'Caveat', cursive;
  font-size: 19px;
  color: #90766e;
  text-align: center;
  margin-top: 12px;
}

.letter-text {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  line-height: 1.9;
  color: #574742;
}

.letter-text p {
  margin-bottom: 20px;
}

.signature {
  color: #a16f69;
  font-family: 'Caveat', cursive;
  font-size: 25px;
  line-height: 1.5;
  margin-top: 30px;
}


/* =================================
   ANIMATIONS
================================= */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =================================
   MOBILE DESIGN
================================= */

@media (max-width: 600px) {
  body {
    padding: 35px 18px;
  }

  .letter-content {
    grid-template-columns: 1fr;
    padding: 22px;
    gap: 30px;
  }

  .photo-frame {
    max-width: 280px;
    margin: 0 auto;
  }

  .letter-text {
    font-size: 15px;
  }
}
