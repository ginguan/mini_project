const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (currentActive === 1) {
    btnPrev.classList.remove('disabled');
  } else if (currentActive === circles.length) {
    btnNext.classList.add('disabled');
  } else {
    btnNext.classList.remove('disabled');
    btnPrev.classList.remove('disabled');
  }

  const activeCircle = document.querySelectorAll('.circle.active');

  progressBar.style.width = `${
    ((activeCircle.length - 1) / (circles.length - 1)) * 100
  }%`;
};

btnNext.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

btnPrev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
