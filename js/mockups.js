/**
 * Interactive Desktop GUI Simulations & Live Mockups
 */

export function initProjectMockups(soundEngine) {
  initMedicineReminderMockup(soundEngine);
  initImageToolkitMockup(soundEngine);
  initEncryptionMockup(soundEngine);
  initResultAnalyzerMockup(soundEngine);
  initPaymentFormMockup(soundEngine);
}

// 1. Medicine Reminder Interactive Engine
function initMedicineReminderMockup(soundEngine) {
  const container = document.querySelector('#mockup-medicine');
  if (!container) return;

  const pillCards = container.querySelectorAll('.pill-card');
  const statusCount = container.querySelector('.pill-taken-count');
  const testAlarmBtn = container.querySelector('.alarm-test-btn');
  const alarmPopup = document.querySelector('#medicine-alarm-modal');
  const alarmDismissBtn = document.querySelector('#alarm-dismiss-btn');
  const alarmTakeBtn = document.querySelector('#alarm-take-btn');

  function updateCount() {
    const taken = container.querySelectorAll('.pill-card.is-taken').length;
    const total = pillCards.length;
    if (statusCount) {
      statusCount.textContent = `${taken}/${total} Taken Today`;
    }
  }

  pillCards.forEach((card) => {
    card.addEventListener('click', () => {
      const isTaken = card.classList.toggle('is-taken');
      const badge = card.querySelector('.pill-badge');
      if (isTaken) {
        badge.textContent = 'TAKEN';
        badge.className = 'pill-badge badge-taken';
        soundEngine?.playClick(580);
      } else {
        badge.textContent = 'PENDING';
        badge.className = 'pill-badge badge-pending';
        soundEngine?.playClick(420);
      }
      updateCount();
    });
  });

  if (testAlarmBtn && alarmPopup) {
    testAlarmBtn.addEventListener('click', () => {
      alarmPopup.classList.add('is-active');
      soundEngine?.playAlarm();
    });
  }

  if (alarmDismissBtn && alarmPopup) {
    alarmDismissBtn.addEventListener('click', () => {
      alarmPopup.classList.remove('is-active');
      soundEngine?.playClick(300);
    });
  }

  if (alarmTakeBtn && alarmPopup) {
    alarmTakeBtn.addEventListener('click', () => {
      alarmPopup.classList.remove('is-active');
      const firstPending = container.querySelector('.pill-card:not(.is-taken)');
      if (firstPending) {
        firstPending.classList.add('is-taken');
        const badge = firstPending.querySelector('.pill-badge');
        badge.textContent = 'TAKEN';
        badge.className = 'pill-badge badge-taken';
        updateCount();
      }
      soundEngine?.playClick(750);
    });
  }
}

// 2. Image Processing Toolkit Interactive Engine
function initImageToolkitMockup(soundEngine) {
  const container = document.querySelector('#mockup-image-toolkit');
  if (!container) return;

  const canvasImg = container.querySelector('#interactive-toolkit-image');
  const sliderBrightness = container.querySelector('#slider-brightness');
  const sliderContrast = container.querySelector('#slider-contrast');
  const sliderBlur = container.querySelector('#slider-blur');
  const filterButtons = container.querySelectorAll('.filter-btn');
  const btnRotate = container.querySelector('#btn-rotate-img');
  const btnFlip = container.querySelector('#btn-flip-img');
  const filterReadout = container.querySelector('#canvas-filter-readout');

  let currentRotation = 0;
  let currentFlip = 1;
  let activePreset = 'normal';

  function applyFilters() {
    const brightness = sliderBrightness ? sliderBrightness.value : 100;
    const contrast = sliderContrast ? sliderContrast.value : 100;
    const blur = sliderBlur ? sliderBlur.value : 0;

    let filterString = `brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px)`;

    if (activePreset === 'grayscale') filterString += ' grayscale(100%)';
    else if (activePreset === 'invert') filterString += ' invert(100%)';
    else if (activePreset === 'sepia') filterString += ' sepia(90%)';
    else if (activePreset === 'sharpen') filterString += ' contrast(160%) brightness(110%)';

    if (canvasImg) {
      canvasImg.style.filter = filterString;
      canvasImg.style.transform = `rotate(${currentRotation}deg) scaleX(${currentFlip})`;
    }

    if (filterReadout) {
      filterReadout.textContent = `B:${brightness}% C:${contrast}% B:${blur}px [${activePreset}]`;
    }
  }

  [sliderBrightness, sliderContrast, sliderBlur].forEach((slider) => {
    if (slider) {
      slider.addEventListener('input', () => {
        applyFilters();
      });
    }
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activePreset = btn.getAttribute('data-filter') || 'normal';
      soundEngine?.playClick(500);
      applyFilters();
    });
  });

  if (btnRotate) {
    btnRotate.addEventListener('click', () => {
      currentRotation = (currentRotation + 90) % 360;
      soundEngine?.playClick(620);
      applyFilters();
    });
  }

  if (btnFlip) {
    btnFlip.addEventListener('click', () => {
      currentFlip = currentFlip === 1 ? -1 : 1;
      soundEngine?.playClick(620);
      applyFilters();
    });
  }
}

// 3. Encryption & Decryption System Interactive Engine
function initEncryptionMockup(soundEngine) {
  const container = document.querySelector('#mockup-encryption');
  if (!container) return;

  const inputText = container.querySelector('#crypto-input-text');
  const outputStream = container.querySelector('#crypto-output-stream');
  const shiftSlider = container.querySelector('#crypto-shift-slider');
  const shiftValDisplay = container.querySelector('#crypto-shift-val');
  const genOtpBtn = container.querySelector('#crypto-gen-otp-btn');
  const otpDisplay = container.querySelector('#crypto-otp-code');
  const hexDisplay = container.querySelector('#crypto-hex-stream');

  function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        result += text[i];
      }
    }
    return result;
  }

  function updateCrypto() {
    const text = inputText ? inputText.value : 'SECURE_DAKSHU_SYS';
    const shift = shiftSlider ? parseInt(shiftSlider.value, 10) : 7;
    const encrypted = encrypt(text, shift);

    if (outputStream) {
      outputStream.textContent = encrypted;
    }

    if (shiftValDisplay) {
      shiftValDisplay.textContent = `Shift: +${shift}`;
    }

    if (hexDisplay) {
      let hex = '';
      for (let i = 0; i < encrypted.length; i++) {
        hex += encrypted.charCodeAt(i).toString(16).toUpperCase() + ' ';
      }
      hexDisplay.textContent = hex || '44 41 4B 53 48 55';
    }
  }

  if (inputText) {
    inputText.addEventListener('input', () => {
      soundEngine?.playClick(440);
      updateCrypto();
    });
  }

  if (shiftSlider) {
    shiftSlider.addEventListener('input', () => {
      updateCrypto();
    });
  }

  if (genOtpBtn && otpDisplay) {
    genOtpBtn.addEventListener('click', () => {
      const randomOtp = Math.floor(100000 + Math.random() * 900000);
      otpDisplay.textContent = randomOtp;
      soundEngine?.playClick(800);
    });
  }

  updateCrypto();
}

// 4. Student Result Analyzer Interactive Engine
function initResultAnalyzerMockup(soundEngine) {
  const container = document.querySelector('#mockup-analyzer');
  if (!container) return;

  const sliders = container.querySelectorAll('.subject-score-slider');
  const gpaDisplay = container.querySelector('#analyzer-gpa-val');
  const pctDisplay = container.querySelector('#analyzer-pct-val');
  const gradeDisplay = container.querySelector('#analyzer-grade-val');

  function calculateResults() {
    let total = 0;
    let count = 0;
    let max = 0;
    let min = 100;

    sliders.forEach((slider) => {
      const val = parseInt(slider.value, 10);
      total += val;
      count++;
      if (val > max) max = val;
      if (val < min) min = val;

      const subject = slider.getAttribute('data-subject');
      const barFill = container.querySelector(`.bar-fill-${subject}`);
      const valSpan = container.querySelector(`.val-${subject}`);
      if (barFill) barFill.style.height = `${val}%`;
      if (valSpan) valSpan.textContent = `${val}%`;
    });

    if (count === 0) return;

    const average = (total / count).toFixed(1);
    const gpa = (average / 10).toFixed(2);

    let letterGrade = 'A+';
    if (average < 60) letterGrade = 'C';
    else if (average < 75) letterGrade = 'B';
    else if (average < 90) letterGrade = 'A';
    else letterGrade = 'A+';

    if (gpaDisplay) gpaDisplay.textContent = `${gpa} / 10`;
    if (pctDisplay) pctDisplay.textContent = `${average}%`;
    if (gradeDisplay) gradeDisplay.textContent = letterGrade;
  }

  sliders.forEach((slider) => {
    slider.addEventListener('input', () => {
      calculateResults();
    });
  });

  calculateResults();
}

// 5. Payment Form Interface Interactive Engine
function initPaymentFormMockup(soundEngine) {
  const container = document.querySelector('#mockup-payment-form');
  if (!container) return;

  const cardNumInput = container.querySelector('#payment-input-num');
  const cardNameInput = container.querySelector('#payment-input-name');
  const cardExpInput = container.querySelector('#payment-input-exp');
  const cardDisplayNum = container.querySelector('#card-display-number');
  const cardDisplayName = container.querySelector('#card-display-name');
  const cardDisplayExp = container.querySelector('#card-display-expiry');

  if (cardNumInput && cardDisplayNum) {
    cardNumInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      val = val.replace(/(\d{4})(?=\d)/g, ' ');
      e.target.value = val;
      cardDisplayNum.textContent = val || '•••• •••• •••• 4242';
      soundEngine?.playClick(450);
    });
  }

  if (cardNameInput && cardDisplayName) {
    cardNameInput.addEventListener('input', (e) => {
      cardDisplayName.textContent = e.target.value.toUpperCase() || 'DAKSH SHARMA';
    });
  }

  if (cardExpInput && cardDisplayExp) {
    cardExpInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 3) {
        val = val.substring(0, 2) + '/' + val.substring(2);
      }
      e.target.value = val;
      cardDisplayExp.textContent = val || '12/28';
    });
  }
}