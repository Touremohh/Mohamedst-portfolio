document.addEventListener('DOMContentLoaded', function() {
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
      container.querySelector('.hover-image').style.display = 'block';
    });

    container.addEventListener('mouseout', () => {
      container.querySelector('.hover-image').style.display = 'none';
    });
  });
});
