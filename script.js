* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Background animasi Love/Hati */
.hearts-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
}

.heart {
    position: absolute;
    bottom: -20px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    animation: floatUp linear infinite;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) scale(0.8);
        opacity: 1;
    }
    100% {
        transform: translateY(-105vh) scale(1.2);
        opacity: 0;
    }
}

/* Container utama kartu */
.card-container {
    position: relative;
    z-index: 2;
    width: 90%;
    max-width: 450px;
}

.card {
    background: rgba(255, 255, 255, 0.9);
    padding: 30px 20px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.3);
    text-align: center;
    backdrop-filter: blur(5px);
    transition: all 0.5s ease;
}

.hidden {
    display: none;
    opacity: 0;
    transform: scale(0.9);
}

.active {
    display: block;
    opacity: 1;
    transform: scale(1);
}

h1.title, h2 {
    color: #d63384;
    font-size: 1.4rem;
    margin-bottom: 20px;
}

/* Desain Kado Merah */
.gift-box {
    width: 120px;
    height: 120px;
    background: #e63946;
    margin: 20px auto;
    position: relative;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(230, 57, 70, 0.4);
    animation: pulse 1.5s infinite ease-in-out;
}

.gift-box:hover {
    transform: scale(1.08);
}

.ribbon-v {
    position: absolute;
    width: 24px;
    height: 100%;
    background: #ffb703;
    left: 48px;
}

.ribbon-h {
    position: absolute;
    width: 100%;
    height: 24px;
    background: #ffb703;
    top: 48px;
}

.bow {
    position: absolute;
    width: 40px;
    height: 20px;
    background: #ffb703;
    top: -15px;
    left: 40px;
    border-radius: 20px 20px 0 0;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Slider Sayang */
.slider-box {
    margin: 20px 0;
}

#slider-value {
    font-size: 2rem;
    font-weight: 700;
    color: #e63946;
    display: block;
    margin-bottom: 10px;
}

input[type=range] {
    width: 100%;
    accent-color: #ff4d6d;
    cursor: pointer;
}

.feedback-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: #c7254e;
    min-height: 50px;
    margin-top: 15px;
}

/* Tombol */
.btn {
    background: #ff4d6d;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 15px;
    box-shadow: 0 5px 15px rgba(255, 77, 109, 0.4);
    transition: 0.3s;
}

.btn:hover {
    background: #c7254e;
    transform: translateY(-2px);
}

/* Daftar Kata-kata */
.messages-list {
    max-height: 250px;
    overflow-y: auto;
    text-align: left;
    padding: 10px;
    background: #fff0f3;
    border-radius: 12px;
    margin-bottom: 15px;
}

.message-item {
    background: white;
    padding: 10px 12px;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #555;
    border-left: 4px solid #ff4d6d;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
  
